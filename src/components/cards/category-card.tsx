import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Icon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { QuizCategory } from "@/types";

const colorMap: Record<string, string> = {
  violet: "bg-violet-500/12 text-violet-500 ring-violet-500/20",
  blue: "bg-blue-500/12 text-blue-500 ring-blue-500/20",
  emerald: "bg-emerald-500/12 text-emerald-500 ring-emerald-500/20",
  amber: "bg-amber-500/12 text-amber-500 ring-amber-500/20",
  rose: "bg-rose-500/12 text-rose-500 ring-rose-500/20",
  cyan: "bg-cyan-500/12 text-cyan-500 ring-cyan-500/20",
};

export function CategoryCard({ category }: { category: QuizCategory }) {
  return (
    <Card
      size="sm"
      className="group cursor-pointer transition-all hover:ring-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex items-start gap-3 px-4">
        <span
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-xl ring-1",
            colorMap[category.color] ?? colorMap.violet
          )}
        >
          <Icon name={category.icon} className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-sm font-semibold">
              {category.name}
            </h3>
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
          </div>
          <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
            {category.description}
          </p>
          <p className="mt-2 text-xs font-medium text-primary">
            {category.quizCount} quizzes
          </p>
        </div>
      </div>
    </Card>
  );
}
