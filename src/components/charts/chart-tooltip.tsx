"use client";

import type { ReactNode } from "react";

interface TooltipPayloadItem {
  name?: string;
  value?: number | string;
  color?: string;
  dataKey?: string | number;
  payload?: Record<string, unknown>;
}

export function ChartTooltip({
  active,
  payload,
  label,
  unitMap,
  labelFormatter,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: ReactNode;
  unitMap?: Record<string, string>;
  labelFormatter?: (label: ReactNode) => ReactNode;
}) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="min-w-32 rounded-lg border border-border bg-popover/95 px-3 py-2 text-xs shadow-xl backdrop-blur">
      {label != null && (
        <div className="mb-1.5 font-medium text-foreground">
          {labelFormatter ? labelFormatter(label) : label}
        </div>
      )}
      <div className="space-y-1">
        {payload.map((item, i) => (
          <div key={i} className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-1.5 text-muted-foreground capitalize">
              <span
                className="size-2 rounded-full"
                style={{ background: item.color }}
              />
              {item.name}
            </span>
            <span className="font-semibold tabular-nums text-foreground">
              {item.value}
              {unitMap?.[String(item.dataKey)] ?? ""}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
