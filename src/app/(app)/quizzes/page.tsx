"use client";

import * as React from "react";
import { PageHeader } from "@/components/common/page-header";
import { CategoryCard } from "@/components/cards/category-card";
import { QuizCard } from "@/components/cards/quiz-card";
import { EmptyState } from "@/components/common/empty-state";
import { cn } from "@/lib/utils";
import { quizCategories, quizzes } from "@/data";
import type { Difficulty } from "@/types";

const DIFFICULTIES: (Difficulty | "All")[] = ["All", "Easy", "Medium", "Hard"];

export default function QuizzesPage() {
  const [difficulty, setDifficulty] = React.useState<Difficulty | "All">("All");

  const filtered = quizzes.filter(
    (q) => difficulty === "All" || q.difficulty === difficulty
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Quizzes"
        description="Sharpen your fundamentals with focused, timed quizzes across every CS topic."
      />

      {/* Categories */}
      <section className="space-y-4">
        <h2 className="font-heading text-lg font-semibold">
          Browse by category
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quizCategories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </section>

      {/* Quizzes */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-heading text-lg font-semibold">Popular quizzes</h2>
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
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((q) => (
              <QuizCard key={q.id} quiz={q} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon="BrainCircuit"
            title="No quizzes match this difficulty"
            description="Try selecting a different difficulty level."
          />
        )}
      </section>
    </div>
  );
}
