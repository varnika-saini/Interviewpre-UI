import { cn } from "@/lib/utils";

const colorMap: Record<string, string> = {
  primary: "bg-primary",
  violet: "bg-violet-500",
  blue: "bg-blue-500",
  emerald: "bg-emerald-500",
  amber: "bg-amber-500",
  rose: "bg-rose-500",
  cyan: "bg-cyan-500",
};

export function ProgressBar({
  value,
  className,
  indicatorClassName,
  color = "primary",
  size = "default",
}: {
  value: number;
  className?: string;
  indicatorClassName?: string;
  color?: keyof typeof colorMap | string;
  size?: "sm" | "default" | "lg";
}) {
  const clamped = Math.max(0, Math.min(100, value));
  const height =
    size === "sm" ? "h-1.5" : size === "lg" ? "h-3" : "h-2";

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-full bg-muted",
        height,
        className
      )}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn(
          "h-full rounded-full transition-all duration-700 ease-out",
          colorMap[color] ?? "bg-primary",
          indicatorClassName
        )}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
