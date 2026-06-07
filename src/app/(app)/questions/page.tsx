"use client";

import * as React from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QuestionCard } from "@/components/cards/question-card";
import { Pagination } from "@/components/common/pagination";
import { EmptyState } from "@/components/common/empty-state";
import { cn } from "@/lib/utils";
import { questions, allTags, allCategories } from "@/data";
import type { Difficulty } from "@/types";

const DIFFICULTIES: (Difficulty | "All")[] = ["All", "Easy", "Medium", "Hard"];
const PAGE_SIZE = 6;

export default function QuestionsPage() {
  const [query, setQuery] = React.useState("");
  const [difficulty, setDifficulty] = React.useState<Difficulty | "All">("All");
  const [category, setCategory] = React.useState("All");
  const [activeTags, setActiveTags] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(1);

  const toggleTag = (tag: string) =>
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  const filtered = React.useMemo(() => {
    return questions.filter((q) => {
      if (difficulty !== "All" && q.difficulty !== difficulty) return false;
      if (category !== "All" && q.category !== category) return false;
      if (
        query &&
        !q.title.toLowerCase().includes(query.toLowerCase()) &&
        !q.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
        return false;
      if (activeTags.length && !activeTags.every((t) => q.tags.includes(t)))
        return false;
      return true;
    });
  }, [query, difficulty, category, activeTags]);

  React.useEffect(() => setPage(1), [query, difficulty, category, activeTags]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const solved = questions.filter((q) => q.status === "solved").length;
  const hasFilters =
    query || difficulty !== "All" || category !== "All" || activeTags.length;

  const clearAll = () => {
    setQuery("");
    setDifficulty("All");
    setCategory("All");
    setActiveTags([]);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Coding Questions"
        description="Practice problems curated from real interviews at top companies."
      >
        <div className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm">
          <span className="font-semibold text-emerald-500">{solved}</span>
          <span className="text-muted-foreground"> / {questions.length} solved</span>
        </div>
      </PageHeader>

      {/* Filters */}
      <Card size="sm" className="gap-3 p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title or tag…"
              className="h-9 pl-9"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex rounded-lg border border-border p-0.5">
              {DIFFICULTIES.map((d) => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={cn(
                    "rounded-md px-3 py-1 text-xs font-medium transition-colors",
                    difficulty === d
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {d}
                </button>
              ))}
            </div>

            <Select value={category} onValueChange={(v) => setCategory(v ?? "All")}>
              <SelectTrigger className="h-9 w-44">
                <SlidersHorizontal className="size-3.5 text-muted-foreground" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All categories</SelectItem>
                {allCategories.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
                activeTags.includes(tag)
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </Card>

      {/* Results header */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-medium text-foreground">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "problem" : "problems"}
        </p>
        {hasFilters ? (
          <Button variant="ghost" size="sm" onClick={clearAll}>
            <X className="size-3.5" />
            Clear filters
          </Button>
        ) : null}
      </div>

      {/* List */}
      {pageItems.length > 0 ? (
        <div className="space-y-3">
          {pageItems.map((q) => (
            <QuestionCard key={q.id} question={q} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon="Search"
          title="No problems found"
          description="Try adjusting your search or clearing some filters."
          action={
            <Button variant="outline" onClick={clearAll}>
              Clear filters
            </Button>
          }
        />
      )}

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
