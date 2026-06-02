import Link from "next/link";
import { CheckCircle2, CircleDot, Lock, ThumbsUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DifficultyBadge } from "@/components/common/difficulty-badge";
import { formatNumber } from "@/lib/format";
import type { Question } from "@/types";

export function QuestionCard({ question }: { question: Question }) {
  return (
    <Card
      size="sm"
      className="group transition-all hover:ring-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex items-start gap-3 px-4">
        <div className="mt-0.5 shrink-0">
          {question.status === "solved" ? (
            <CheckCircle2 className="size-5 text-emerald-500" />
          ) : question.status === "attempted" ? (
            <CircleDot className="size-5 text-amber-500" />
          ) : (
            <CircleDot className="size-5 text-muted-foreground/40" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <Link
              href={`/questions/${question.slug}`}
              className="font-medium leading-snug transition-colors hover:text-primary"
            >
              {question.title}
            </Link>
            <DifficultyBadge difficulty={question.difficulty} />
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {question.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
            {question.isPremium && (
              <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-600 dark:text-amber-400">
                <Lock className="size-3" />
                Premium
              </span>
            )}
          </div>

          <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
            <span>
              Acceptance{" "}
              <span className="font-semibold text-foreground">
                {question.acceptance}%
              </span>
            </span>
            <span className="flex items-center gap-1">
              <ThumbsUp className="size-3.5" />
              {formatNumber(question.likes)}
            </span>
            <span className="hidden sm:inline">
              {question.companies.length} companies
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
