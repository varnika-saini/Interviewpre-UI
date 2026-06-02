"use client";

import * as React from "react";
import { ChevronDown, ChevronUp, Crown, Flame, Medal, Minus } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { formatNumber, initials } from "@/lib/format";
import { leaderboard, currentUser } from "@/data";
import type { LeaderboardEntry } from "@/types";

const rarityColor: Record<string, string> = {
  Legendary: "text-amber-500",
  Epic: "text-violet-500",
  Rare: "text-blue-500",
  Common: "text-muted-foreground",
};

function RankChange({ entry }: { entry: LeaderboardEntry }) {
  const diff = entry.previousRank - entry.rank;
  if (diff === 0)
    return (
      <span className="inline-flex items-center text-muted-foreground">
        <Minus className="size-3.5" />
      </span>
    );
  const up = diff > 0;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 text-xs font-medium tabular-nums",
        up ? "text-emerald-500" : "text-rose-500"
      )}
    >
      {up ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
      {Math.abs(diff)}
    </span>
  );
}

function Podium({ entries }: { entries: LeaderboardEntry[] }) {
  // order: 2nd, 1st, 3rd
  const order = [entries[1], entries[0], entries[2]];
  const heights = ["pt-8", "pt-0", "pt-12"];
  const medals = ["text-slate-400", "text-amber-400", "text-amber-700"];
  return (
    <div className="grid grid-cols-3 items-end gap-3 sm:gap-6">
      {order.map((e, i) => {
        const isFirst = i === 1;
        return (
          <div key={e.username} className={cn("text-center", heights[i])}>
            <div className="relative inline-block">
              {isFirst && (
                <Crown className="absolute -top-6 left-1/2 size-6 -translate-x-1/2 fill-amber-400 text-amber-400" />
              )}
              <Avatar
                size="lg"
                className={cn(
                  "mx-auto ring-2 ring-offset-2 ring-offset-background",
                  isFirst ? "size-16 ring-amber-400" : "ring-border"
                )}
              >
                <AvatarImage src={e.avatar} alt={e.name} />
                <AvatarFallback>{initials(e.name)}</AvatarFallback>
              </Avatar>
              <span
                className={cn(
                  "absolute -bottom-1 left-1/2 grid size-6 -translate-x-1/2 place-items-center rounded-full bg-background ring-1 ring-border"
                )}
              >
                <Medal className={cn("size-4", medals[i])} />
              </span>
            </div>
            <p className="mt-3 truncate text-sm font-semibold">{e.name}</p>
            <p className="text-xs text-muted-foreground">
              {e.countryFlag} {e.country}
            </p>
            <div
              className={cn(
                "mx-auto mt-3 flex flex-col items-center justify-end rounded-t-xl bg-gradient-to-b from-primary/15 to-transparent",
                isFirst ? "h-24" : "h-16"
              )}
            >
              <span className="font-heading text-lg font-bold tabular-nums">
                {formatNumber(e.score)}
              </span>
              <span className="text-xs text-muted-foreground">pts</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function LeaderboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Leaderboard"
        description="See how you stack up against the best engineers on the platform."
      >
        <Tabs defaultValue="global">
          <TabsList>
            <TabsTrigger value="global">Global</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
          </TabsList>
        </Tabs>
      </PageHeader>

      {/* Your rank */}
      <Card className="flex-row items-center gap-4 bg-primary/5 p-5 ring-primary/20">
        <span className="font-heading text-2xl font-bold text-primary tabular-nums">
          #{formatNumber(currentUser.rank)}
        </span>
        <Avatar>
          <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
          <AvatarFallback>{initials(currentUser.name)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="text-sm font-semibold">{currentUser.name} (You)</p>
          <p className="text-xs text-muted-foreground">
            Top {100 - currentUser.globalPercentile}% worldwide ·{" "}
            {currentUser.solvedTotal} solved
          </p>
        </div>
        <div className="hidden items-center gap-1.5 text-sm font-medium text-amber-500 sm:flex">
          <Flame className="size-4" />
          {currentUser.streak} day streak
        </div>
      </Card>

      {/* Podium */}
      <Card className="px-4 pb-4 pt-12 sm:px-8">
        <Podium entries={leaderboard.slice(0, 3)} />
      </Card>

      {/* Table */}
      <Card className="overflow-hidden p-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-16">Rank</TableHead>
              <TableHead>Engineer</TableHead>
              <TableHead className="text-right">Score</TableHead>
              <TableHead className="hidden text-right sm:table-cell">
                Solved
              </TableHead>
              <TableHead className="hidden text-right md:table-cell">
                Streak
              </TableHead>
              <TableHead className="hidden text-right lg:table-cell">
                Badges
              </TableHead>
              <TableHead className="w-16 text-right">Δ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboard.map((e) => (
              <TableRow key={e.username}>
                <TableCell>
                  <span
                    className={cn(
                      "grid size-7 place-items-center rounded-lg text-xs font-bold tabular-nums",
                      e.rank <= 3
                        ? "bg-amber-500/15 text-amber-500"
                        : "text-muted-foreground"
                    )}
                  >
                    {e.rank}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar size="sm">
                      <AvatarImage src={e.avatar} alt={e.name} />
                      <AvatarFallback>{initials(e.name)}</AvatarFallback>
                    </Avatar>
                    <div className="leading-tight">
                      <p className="text-sm font-medium">{e.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {e.countryFlag} @{e.username}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right font-semibold tabular-nums">
                  {formatNumber(e.score)}
                </TableCell>
                <TableCell className="hidden text-right tabular-nums text-muted-foreground sm:table-cell">
                  {e.solved}
                </TableCell>
                <TableCell className="hidden text-right md:table-cell">
                  <span className="inline-flex items-center gap-1 text-sm tabular-nums text-muted-foreground">
                    <Flame className="size-3.5 text-amber-500" />
                    {e.streak}
                  </span>
                </TableCell>
                <TableCell className="hidden text-right lg:table-cell">
                  <span
                    className={cn(
                      "text-sm font-medium",
                      rarityColor[e.topBadge] ?? "text-muted-foreground"
                    )}
                  >
                    {e.badges}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <RankChange entry={e} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
