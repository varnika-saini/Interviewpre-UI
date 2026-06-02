import Link from "next/link";
import { Clock, ListChecks, Star, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { DifficultyBadge } from "@/components/common/difficulty-badge";
import { cn } from "@/lib/utils";
import { formatNumber } from "@/lib/format";
import type { Quiz } from "@/types";

export function QuizCard({ quiz }: { quiz: Quiz }) {
  return (
    <Card className="group justify-between gap-0 transition-all hover:ring-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <span className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
            {quiz.category}
          </span>
          <DifficultyBadge difficulty={quiz.difficulty} />
        </div>

        <Link href={`/quizzes/${quiz.slug}`}>
          <h3 className="mt-3 font-heading text-base font-semibold leading-snug transition-colors group-hover:text-primary">
            {quiz.title}
          </h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
          {quiz.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <ListChecks className="size-3.5" />
            {quiz.questionCount} questions
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" />
            {quiz.durationMin} min
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="size-3.5" />
            {formatNumber(quiz.attempts)}
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            <span className="font-medium text-foreground">{quiz.rating}</span>
          </span>
        </div>
      </div>

      <div className="mt-4 px-4 pb-4">
        <Link
          href={`/quizzes/${quiz.slug}`}
          className={cn(buttonVariants({ size: "lg" }), "w-full")}
        >
          Start quiz
        </Link>
      </div>
    </Card>
  );
}
