import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/common/page-header";
import { ProgressBar } from "@/components/common/progress-bar";
import { WeeklyAreaChart } from "@/components/charts/weekly-area-chart";
import { MonthlyLineChart } from "@/components/charts/monthly-line-chart";
import { SkillRadarChart } from "@/components/charts/skill-radar-chart";
import { DifficultyDonut } from "@/components/charts/difficulty-donut";
import {
  skillBreakdown,
  weeklyProgress,
  monthlyProgress,
  difficultyDistribution,
  studyTimeByTopic,
} from "@/data";

export const metadata: Metadata = { title: "Analytics" };

const summary = [
  { label: "Problems solved", value: "342", sub: "+38 this month" },
  { label: "Avg. quiz accuracy", value: "86%", sub: "+4.2% vs last month" },
  { label: "Study time", value: "88h", sub: "this month" },
  { label: "Acceptance rate", value: "71%", sub: "on first attempt" },
];

export default function AnalyticsPage() {
  const maxHours = Math.max(...studyTimeByTopic.map((s) => s.hours));

  return (
    <div className="space-y-6">
      <PageHeader
        title="Progress Analytics"
        description="A deep look at your performance, skill growth, and study habits over time."
      />

      {/* Summary */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {summary.map((s) => (
          <Card key={s.label} className="gap-0 p-5">
            <div className="font-heading text-2xl font-bold tracking-tight tabular-nums">
              {s.value}
            </div>
            <div className="mt-1 text-sm font-medium text-muted-foreground">
              {s.label}
            </div>
            <div className="mt-2 text-xs text-emerald-500">{s.sub}</div>
          </Card>
        ))}
      </div>

      {/* Skill + difficulty */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="border-b">
            <CardTitle>Skill Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 pt-4 md:grid-cols-2">
            <SkillRadarChart data={skillBreakdown} />
            <div className="flex flex-col justify-center gap-3">
              {skillBreakdown.map((s) => (
                <div key={s.skill} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{s.skill}</span>
                    <span className="tabular-nums text-muted-foreground">
                      {s.value}%
                    </span>
                  </div>
                  <ProgressBar value={s.value} size="sm" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b">
            <CardTitle>By Difficulty</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <DifficultyDonut data={difficultyDistribution} />
            <div className="mt-4 space-y-2">
              {difficultyDistribution.map((d) => (
                <div
                  key={d.difficulty}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="size-2.5 rounded-full"
                      style={{ background: d.color }}
                    />
                    {d.difficulty}
                  </span>
                  <span className="tabular-nums text-muted-foreground">
                    {d.solved} / {d.total}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly + Monthly */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Weekly Activity</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <WeeklyAreaChart data={weeklyProgress} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b">
            <CardTitle>Monthly Trend</CardTitle>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-chart-1" /> Solved
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-chart-3" /> Avg score
              </span>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <MonthlyLineChart data={monthlyProgress} />
          </CardContent>
        </Card>
      </div>

      {/* Study time */}
      <Card>
        <CardHeader className="border-b">
          <CardTitle>Study Time by Topic</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          {studyTimeByTopic.map((s) => (
            <div key={s.topic} className="flex items-center gap-4">
              <span className="w-28 shrink-0 text-sm font-medium">
                {s.topic}
              </span>
              <div className="h-3 flex-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(s.hours / maxHours) * 100}%`,
                    background: s.fill,
                  }}
                />
              </div>
              <span className="w-12 shrink-0 text-right text-sm tabular-nums text-muted-foreground">
                {s.hours}h
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
