"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartTooltip } from "./chart-tooltip";
import type { DifficultyDistribution } from "@/types";

export function DifficultyDonut({
  data,
}: {
  data: DifficultyDistribution[];
}) {
  const total = data.reduce((acc, d) => acc + d.solved, 0);
  const chartData = data.map((d) => ({ name: d.difficulty, value: d.solved, color: d.color }));

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Tooltip content={<ChartTooltip />} />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={62}
            outerRadius={92}
            paddingAngle={3}
            strokeWidth={0}
          >
            {chartData.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-heading text-2xl font-bold tabular-nums">
          {total}
        </span>
        <span className="text-xs text-muted-foreground">Solved</span>
      </div>
    </div>
  );
}
