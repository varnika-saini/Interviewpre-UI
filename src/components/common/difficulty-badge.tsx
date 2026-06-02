import { cn } from "@/lib/utils";
import { difficultyClasses } from "@/lib/format";
import type { Difficulty } from "@/types";

export function DifficultyBadge({
  difficulty,
  className,
}: {
  difficulty: Difficulty;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-5 items-center rounded-full px-2 text-[11px] font-semibold",
        difficultyClasses(difficulty),
        className
      )}
    >
      {difficulty}
    </span>
  );
}
