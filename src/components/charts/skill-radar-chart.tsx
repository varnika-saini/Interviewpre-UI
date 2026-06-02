"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ChartTooltip } from "./chart-tooltip";
import type { SkillBreakdown } from "@/types";

export function SkillRadarChart({ data }: { data: SkillBreakdown[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data} outerRadius="72%">
        <PolarGrid stroke="var(--border)" />
        <PolarAngleAxis
          dataKey="skill"
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
        />
        <Tooltip content={<ChartTooltip />} />
        <Radar
          name="Proficiency"
          dataKey="value"
          stroke="var(--chart-1)"
          fill="var(--chart-1)"
          fillOpacity={0.35}
          strokeWidth={2}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
