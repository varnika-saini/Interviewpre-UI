import { Card } from "@/components/ui/card";
import { Icon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import type { StatCardData } from "@/types";

export function StatCard({ stat }: { stat: StatCardData }) {
  const positive = stat.trend === "up";
  return (
    <Card className="relative gap-0 overflow-hidden p-5">
      <div className="absolute -right-6 -top-6 size-24 rounded-full bg-primary/5 blur-2xl" />
      <div className="flex items-center justify-between">
        <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
          <Icon name={stat.icon} className="size-5" />
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold",
            positive
              ? "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400"
              : "bg-rose-500/12 text-rose-600 dark:text-rose-400"
          )}
        >
          {positive ? (
            <TrendingUp className="size-3" />
          ) : (
            <TrendingDown className="size-3" />
          )}
          {Math.abs(stat.change)}%
        </span>
      </div>
      <div className="mt-4">
        <div className="font-heading text-2xl font-bold tracking-tight tabular-nums">
          {stat.value}
        </div>
        <div className="mt-0.5 text-sm font-medium text-muted-foreground">
          {stat.label}
        </div>
      </div>
      <div className="mt-3 text-xs text-muted-foreground">{stat.hint}</div>
    </Card>
  );
}
