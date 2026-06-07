"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  RotateCcw,
  Trophy,
  X,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/common/progress-bar";
import { DifficultyBadge } from "@/components/common/difficulty-badge";
import { cn } from "@/lib/utils";
import { formatClock, scoreColor } from "@/lib/format";
import type { Quiz } from "@/types";

export function QuizAttempt({ quiz }: { quiz: Quiz }) {
  const total = quiz.questions.length;
  const [index, setIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<(number | null)[]>(
    Array(total).fill(null)
  );
  const [submitted, setSubmitted] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(quiz.durationMin * 60);

  const submit = React.useCallback(() => setSubmitted(true), []);

  React.useEffect(() => {
    if (submitted) return;
    if (timeLeft <= 0) {
      submit();
      return;
    }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, submitted, submit]);

  const select = (optionIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = optionIndex;
      return next;
    });
  };

  const score = answers.reduce<number>(
    (acc, a, i) => (a === quiz.questions[i].correctIndex ? acc + 1 : acc),
    0
  );
  const answeredCount = answers.filter((a) => a !== null).length;

  if (submitted) {
    const pct = Math.round((score / total) * 100);
    return (
      <div className="mx-auto max-w-3xl space-y-6">
        <Card className="overflow-hidden p-0">
          <div className="relative bg-gradient-to-br from-primary to-violet-600 p-8 text-center text-primary-foreground">
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-15" />
            <div className="relative">
              <Trophy className="mx-auto size-10" />
              <h1 className="mt-3 font-heading text-2xl font-bold">
                Quiz complete!
              </h1>
              <p className="mt-1 text-sm text-primary-foreground/80">
                {quiz.title}
              </p>
              <div className="mt-5 font-heading text-5xl font-bold tabular-nums">
                {pct}%
              </div>
              <p className="mt-1 text-sm text-primary-foreground/80">
                You scored {score} out of {total}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 divide-x divide-border">
            {[
              { label: "Correct", value: score, cls: "text-emerald-500" },
              {
                label: "Incorrect",
                value: total - score,
                cls: "text-rose-500",
              },
              {
                label: "Time left",
                value: formatClock(timeLeft),
                cls: "text-foreground",
              },
            ].map((s) => (
              <div key={s.label} className="p-4 text-center">
                <div
                  className={cn(
                    "font-heading text-xl font-bold tabular-nums",
                    s.cls
                  )}
                >
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Review */}
        <div className="space-y-3">
          <h2 className="font-heading text-lg font-semibold">Review answers</h2>
          {quiz.questions.map((q, qi) => {
            const userAnswer = answers[qi];
            const correct = userAnswer === q.correctIndex;
            return (
              <Card key={q.id} size="sm" className="p-4">
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full",
                      correct
                        ? "bg-emerald-500/15 text-emerald-500"
                        : "bg-rose-500/15 text-rose-500"
                    )}
                  >
                    {correct ? (
                      <Check className="size-3.5" />
                    ) : (
                      <X className="size-3.5" />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">
                      {qi + 1}. {q.prompt}
                    </p>
                    <div className="mt-2 space-y-1.5">
                      {q.options.map((opt, oi) => (
                        <div
                          key={oi}
                          className={cn(
                            "rounded-lg border px-3 py-1.5 text-xs",
                            oi === q.correctIndex
                              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                              : oi === userAnswer
                              ? "border-rose-500/40 bg-rose-500/10 text-rose-600 dark:text-rose-400"
                              : "border-border text-muted-foreground"
                          )}
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                    <p className="mt-2 rounded-lg bg-muted/60 p-2.5 text-xs text-muted-foreground">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center gap-3">
          <Link
            href="/quizzes"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Back to quizzes
          </Link>
          <Button
            onClick={() => {
              setAnswers(Array(total).fill(null));
              setIndex(0);
              setSubmitted(false);
              setTimeLeft(quiz.durationMin * 60);
            }}
          >
            <RotateCcw className="size-4" />
            Retake quiz
          </Button>
        </div>
      </div>
    );
  }

  const q = quiz.questions[index];
  const lowTime = timeLeft <= 30;

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <Link
          href="/quizzes"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Exit
        </Link>
        <div className="flex items-center gap-3">
          <DifficultyBadge difficulty={quiz.difficulty} />
          <span
            className={cn(
              "flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-sm font-semibold tabular-nums",
              lowTime
                ? "border-rose-500/40 bg-rose-500/10 text-rose-500"
                : "border-border"
            )}
          >
            <Clock className="size-4" />
            {formatClock(timeLeft)}
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">
            Question {index + 1} of {total}
          </span>
          <span className="text-muted-foreground">
            {answeredCount} answered
          </span>
        </div>
        <ProgressBar value={((index + 1) / total) * 100} />
        <div className="flex flex-wrap gap-1.5 pt-1">
          {quiz.questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to question ${i + 1}`}
              className={cn(
                "size-7 rounded-lg text-xs font-medium transition-colors",
                i === index
                  ? "bg-primary text-primary-foreground"
                  : answers[i] !== null
                  ? "bg-primary/15 text-primary"
                  : "bg-muted text-muted-foreground hover:bg-muted/70"
              )}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Question */}
      <Card className="p-6">
        <h2 className="font-heading text-lg font-semibold leading-snug">
          {q.prompt}
        </h2>
        <div className="mt-5 space-y-2.5">
          {q.options.map((opt, oi) => {
            const selected = answers[index] === oi;
            return (
              <button
                key={oi}
                onClick={() => select(oi)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl border p-3.5 text-left text-sm transition-all",
                  selected
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-border hover:border-primary/40 hover:bg-muted/50"
                )}
              >
                <span
                  className={cn(
                    "grid size-7 shrink-0 place-items-center rounded-lg border text-xs font-semibold",
                    selected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground"
                  )}
                >
                  {String.fromCharCode(65 + oi)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      </Card>

      {/* Nav */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
        >
          <ArrowLeft className="size-4" />
          Previous
        </Button>
        {index === total - 1 ? (
          <Button onClick={submit}>
            <Check className="size-4" />
            Submit quiz
          </Button>
        ) : (
          <Button onClick={() => setIndex((i) => Math.min(total - 1, i + 1))}>
            Next
            <ArrowRight className="size-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
