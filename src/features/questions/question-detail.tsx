"use client";

import * as React from "react";
import Link from "next/link";
import { toast } from "sonner";
import {
  ArrowLeft,
  Building2,
  Check,
  Lightbulb,
  Play,
  RotateCcw,
  Send,
  ThumbsUp,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DifficultyBadge } from "@/components/common/difficulty-badge";
import { cn } from "@/lib/utils";
import { formatNumber } from "@/lib/format";
import type { Question } from "@/types";

// Render text with `inline code` segments.
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, li) => (
        <p key={li} className={cn(line === "" ? "h-3" : "")}>
          {line.split(/(`[^`]+`)/g).map((part, pi) =>
            part.startsWith("`") && part.endsWith("`") ? (
              <code
                key={pi}
                className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.8em] text-foreground"
              >
                {part.slice(1, -1)}
              </code>
            ) : (
              <span key={pi}>{part}</span>
            )
          )}
        </p>
      ))}
    </>
  );
}

type RunState = "idle" | "running" | "done";

export function QuestionDetail({ question }: { question: Question }) {
  const [language, setLanguage] = React.useState(
    question.starterCode[0]?.language ?? "JavaScript"
  );
  const codeFor = (lang: string) =>
    question.starterCode.find((s) => s.language === lang)?.code ?? "";
  const [code, setCode] = React.useState(codeFor(language));
  const [runState, setRunState] = React.useState<RunState>("idle");
  const [revealedHints, setRevealedHints] = React.useState(0);

  function onLanguageChange(lang: string | null) {
    if (!lang) return;
    setLanguage(lang);
    setCode(codeFor(lang));
    setRunState("idle");
  }

  function run() {
    setRunState("running");
    setTimeout(() => {
      setRunState("done");
      toast.success("All test cases passed", {
        description: `Runtime 64 ms · Memory 42.1 MB`,
      });
    }, 1200);
  }

  function submit() {
    setRunState("running");
    setTimeout(() => {
      setRunState("done");
      toast.success("Accepted — solution submitted!", {
        description: "Beats 92% on runtime · 76% on memory",
      });
    }, 1400);
  }

  const lineCount = code.split("\n").length;

  return (
    <div className="space-y-4">
      <Link
        href="/questions"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to problems
      </Link>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Problem panel */}
        <div className="rounded-xl border border-border bg-card">
          <div className="border-b border-border p-5">
            <div className="flex items-start justify-between gap-3">
              <h1 className="font-heading text-xl font-bold tracking-tight">
                {question.title}
              </h1>
              <DifficultyBadge difficulty={question.difficulty} />
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <ThumbsUp className="size-3.5" />
                {formatNumber(question.likes)}
              </span>
              <span>Acceptance {question.acceptance}%</span>
              <span className="flex items-center gap-1">
                <Building2 className="size-3.5" />
                {question.companies.join(", ")}
              </span>
            </div>
          </div>

          <Tabs defaultValue="description" className="p-5">
            <TabsList variant="line">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="hints">Hints</TabsTrigger>
              <TabsTrigger value="solutions">Solutions</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="space-y-6 pt-4">
              <div className="space-y-1 text-sm leading-relaxed text-foreground/90">
                <RichText text={question.description} />
              </div>

              <div className="space-y-3">
                {question.examples.map((ex, i) => (
                  <div key={i}>
                    <p className="mb-1.5 text-sm font-semibold">
                      Example {i + 1}
                    </p>
                    <div className="rounded-lg border border-border bg-muted/40 p-3 font-mono text-xs">
                      <p>
                        <span className="text-muted-foreground">Input: </span>
                        {ex.input}
                      </p>
                      <p className="mt-1">
                        <span className="text-muted-foreground">Output: </span>
                        {ex.output}
                      </p>
                      {ex.explanation && (
                        <p className="mt-1 text-muted-foreground">
                          Explanation: {ex.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold">Constraints</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {question.constraints.map((c, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <code className="font-mono text-[0.85em]">{c}</code>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {question.tags.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hints" className="space-y-3 pt-4">
              {question.hints.map((hint, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border bg-muted/40 p-3"
                >
                  {i < revealedHints ? (
                    <p className="flex gap-2 text-sm">
                      <Lightbulb className="size-4 shrink-0 text-amber-500" />
                      {hint}
                    </p>
                  ) : (
                    <button
                      onClick={() => setRevealedHints(i + 1)}
                      disabled={i !== revealedHints}
                      className="flex w-full items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground disabled:opacity-50"
                    >
                      <Lightbulb className="size-4 shrink-0" />
                      {i === revealedHints
                        ? `Reveal hint ${i + 1}`
                        : `Hint ${i + 1} (locked)`}
                    </button>
                  )}
                </div>
              ))}
            </TabsContent>

            <TabsContent value="solutions" className="pt-4">
              <div className="rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
                Community solutions unlock after you submit an accepted answer.
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Editor panel */}
        <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between gap-2 border-b border-border p-3">
            <Select value={language} onValueChange={onLanguageChange}>
              <SelectTrigger size="sm" className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {question.starterCode.map((s) => (
                  <SelectItem key={s.language} value={s.language}>
                    {s.language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Reset code"
              onClick={() => setCode(codeFor(language))}
            >
              <RotateCcw className="size-4" />
            </Button>
          </div>

          {/* Editor */}
          <div className="relative flex-1 bg-[#0d1117] dark:bg-[#0d1117]">
            <div className="flex min-h-[340px]">
              <div
                aria-hidden
                className="select-none border-r border-white/5 px-3 py-3 text-right font-mono text-xs leading-6 text-slate-600"
              >
                {Array.from({ length: Math.max(lineCount, 14) }).map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                className="flex-1 resize-none bg-transparent p-3 font-mono text-xs leading-6 text-slate-100 outline-none"
              />
            </div>
          </div>

          {/* Console */}
          <div className="border-t border-border bg-muted/40 p-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-medium">Console</span>
              {runState === "done" && (
                <span className="flex items-center gap-1 font-medium text-emerald-500">
                  <Check className="size-3.5" /> Accepted
                </span>
              )}
            </div>
            <pre className="mt-2 max-h-24 overflow-auto rounded-lg bg-background p-2.5 font-mono text-[11px] text-muted-foreground">
{runState === "running"
  ? "Running test cases…"
  : runState === "done"
  ? "✓ Case 1 passed\n✓ Case 2 passed\n✓ Case 3 passed\n\nRuntime: 64 ms · Memory: 42.1 MB"
  : "Run your code to see test results."}
            </pre>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 border-t border-border p-3">
            <Button
              variant="outline"
              onClick={run}
              disabled={runState === "running"}
            >
              {runState === "running" ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Play className="size-4" />
              )}
              Run
            </Button>
            <Button onClick={submit} disabled={runState === "running"}>
              <Send className="size-4" />
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
