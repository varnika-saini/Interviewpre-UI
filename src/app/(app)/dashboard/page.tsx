import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Flame,
  Trophy,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatCard } from "@/components/common/stat-card";
import { DifficultyBadge } from "@/components/common/difficulty-badge";
import { ProgressBar } from "@/components/common/progress-bar";
import { WeeklyAreaChart } from "@/components/charts/weekly-area-chart";
import { ActivityBarChart } from "@/components/charts/activity-bar-chart";
import { cn } from "@/lib/utils";
import { formatDate, formatTime, initials, relativeTime, scoreColor } from "@/lib/format";
import {
  dashboardStats,
  weeklyProgress,
  recentQuizzes,
  upcomingInterviews,
  activityHeatmap,
  currentUser,
} from "@/data";

export const metadata: Metadata = { title: "Dashboard" };

const heatColors = [
  "bg-muted",
  "bg-primary/25",
  "bg-primary/45",
  "bg-primary/70",
  "bg-primary",
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
            Welcome back, {currentUser.name.split(" ")[0]} 👋
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            You&apos;re on a {currentUser.streak}-day streak. Keep the momentum going!
          </p>
        </div>
        <Link href="/questions" className={cn(buttonVariants({ size: "lg" }))}>
          Start practicing
          <ArrowRight className="size-4" />
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Charts row */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="border-b">
            <CardTitle>Weekly Progress</CardTitle>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-chart-1" /> Solved
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-chart-2" /> Minutes
              </span>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <WeeklyAreaChart data={weeklyProgress} />
          </CardContent>
        </Card>

        {/* Streak */}
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2">
              <Flame className="size-4 text-amber-500" />
              Learning Streak
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="flex items-end gap-3">
              <span className="font-heading text-4xl font-bold tabular-nums">
                {currentUser.streak}
              </span>
              <span className="pb-1.5 text-sm text-muted-foreground">
                days in a row
              </span>
            </div>
            <div className="space-y-1.5">
              {activityHeatmap.map((week, wi) => (
                <div key={wi} className="flex gap-1.5">
                  {week.map((day, di) => (
                    <span
                      key={di}
                      className={cn(
                        "size-5 flex-1 rounded-[4px]",
                        heatColors[day]
                      )}
                      title={`${day} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2 text-xs">
              <span className="text-muted-foreground">Longest streak</span>
              <span className="font-semibold">
                {currentUser.longestStreak} days
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity + lists */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Daily Activity</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ActivityBarChart data={weeklyProgress} />
          </CardContent>
        </Card>

        {/* Recent quizzes */}
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Recent Quizzes</CardTitle>
            <Link
              href="/quizzes"
              className="text-xs font-medium text-primary hover:underline"
            >
              View all
            </Link>
          </CardHeader>
          <CardContent className="space-y-3 pt-4">
            {recentQuizzes.map((q) => {
              const pct = Math.round((q.score / q.total) * 100);
              return (
                <div key={q.id} className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{q.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {relativeTime(q.takenAt)}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "text-sm font-bold tabular-nums",
                        scoreColor(pct)
                      )}
                    >
                      {q.score}/{q.total}
                    </span>
                  </div>
                  <ProgressBar
                    value={pct}
                    size="sm"
                    color={pct >= 80 ? "emerald" : pct >= 60 ? "amber" : "rose"}
                  />
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Upcoming interviews */}
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Upcoming Interviews</CardTitle>
            <Link
              href="/interviews"
              className="text-xs font-medium text-primary hover:underline"
            >
              View all
            </Link>
          </CardHeader>
          <CardContent className="space-y-3 pt-4">
            {upcomingInterviews.slice(0, 3).map((iv) => (
              <div
                key={iv.id}
                className="flex items-center gap-3 rounded-lg border border-border p-2.5"
              >
                <Avatar size="sm">
                  <AvatarImage
                    src={iv.interviewer.avatar}
                    alt={iv.interviewer.name}
                  />
                  <AvatarFallback>
                    {initials(iv.interviewer.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{iv.type}</p>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="size-3" />
                    {formatDate(iv.scheduledAt)} · {formatTime(iv.scheduledAt)}
                  </p>
                </div>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
              </div>
            ))}
            <Link
              href="/interviews"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "w-full"
              )}
            >
              <Trophy className="size-4" />
              Schedule new interview
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
