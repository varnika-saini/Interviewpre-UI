import { Icon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function EmptyState({
  icon = "Search",
  title,
  description,
  action,
  className,
}: {
  icon?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-border px-6 py-16 text-center",
        className
      )}
    >
      <div className="grid size-14 place-items-center rounded-2xl bg-muted text-muted-foreground">
        <Icon name={icon} className="size-6" />
      </div>
      <h3 className="mt-4 font-heading text-base font-semibold">{title}</h3>
      {description && (
        <p className="mt-1 max-w-sm text-sm text-muted-foreground">
          {description}
        </p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
