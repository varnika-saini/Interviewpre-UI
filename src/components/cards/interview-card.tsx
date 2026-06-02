import { Calendar, Clock, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DifficultyBadge } from "@/components/common/difficulty-badge";
import { cn } from "@/lib/utils";
import {
  formatDate,
  formatDuration,
  formatTime,
  initials,
  scoreColor,
} from "@/lib/format";
import type { Interview } from "@/types";

const typeColor: Record<string, string> = {
  "System Design": "bg-violet-500/12 text-violet-600 dark:text-violet-400",
  "Data Structures": "bg-blue-500/12 text-blue-600 dark:text-blue-400",
  Behavioral: "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400",
  Frontend: "bg-cyan-500/12 text-cyan-600 dark:text-cyan-400",
  Backend: "bg-amber-500/12 text-amber-600 dark:text-amber-400",
  "Full Stack": "bg-rose-500/12 text-rose-600 dark:text-rose-400",
};

export function InterviewCard({ interview }: { interview: Interview }) {
  const isCompleted = interview.status === "completed";

  return (
    <Card className="gap-0 transition-all hover:ring-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="px-4">
        <div className="flex items-center justify-between gap-2">
          <span
            className={cn(
              "rounded-md px-2 py-0.5 text-[11px] font-semibold",
              typeColor[interview.type] ?? "bg-muted text-muted-foreground"
            )}
          >
            {interview.type}
          </span>
          {isCompleted && interview.score != null ? (
            <span
              className={cn(
                "text-sm font-bold tabular-nums",
                scoreColor(interview.score)
              )}
            >
              {interview.score}
              <span className="text-xs font-normal text-muted-foreground">
                /100
              </span>
            </span>
          ) : (
            <DifficultyBadge difficulty={interview.difficulty} />
          )}
        </div>

        <h3 className="mt-3 font-heading text-base font-semibold leading-snug">
          {interview.title}
        </h3>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {interview.role} · {interview.company}
        </p>

        <div className="mt-4 flex items-center gap-2.5">
          <Avatar size="sm">
            <AvatarImage
              src={interview.interviewer.avatar}
              alt={interview.interviewer.name}
            />
            <AvatarFallback>
              {initials(interview.interviewer.name)}
            </AvatarFallback>
          </Avatar>
          <div className="leading-tight">
            <p className="text-xs font-medium">{interview.interviewer.name}</p>
            <p className="text-[11px] text-muted-foreground">
              {interview.interviewer.title}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="size-3.5" />
            {formatDate(interview.scheduledAt)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" />
            {isCompleted
              ? formatDuration(interview.durationMin)
              : formatTime(interview.scheduledAt)}
          </span>
        </div>

        {isCompleted && interview.feedback && (
          <p className="mt-3 line-clamp-2 rounded-lg bg-muted/60 p-2.5 text-xs text-muted-foreground">
            “{interview.feedback}”
          </p>
        )}
      </div>

      <div className="mt-4 px-4 pb-4">
        {isCompleted ? (
          <Button variant="outline" size="lg" className="w-full">
            View report
          </Button>
        ) : (
          <Button size="lg" className="w-full">
            <Video className="size-4" />
            Join interview
          </Button>
        )}
      </div>
    </Card>
  );
}
