import type { Metadata } from "next";
import {
  Briefcase,
  Download,
  FileText,
  MapPin,
  Pencil,
  Upload,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProgressBar } from "@/components/common/progress-bar";
import { Icon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/common/brand-icons";
import { formatDate, initials, relativeTime } from "@/lib/format";
import { currentUser, achievements, activityFeed, badges } from "@/data";

export const metadata: Metadata = { title: "Profile" };

const activityIcon: Record<string, string> = {
  solved: "CheckCircle2",
  quiz: "BrainCircuit",
  interview: "Video",
  badge: "Award",
  streak: "Flame",
};

const rarityRing: Record<string, string> = {
  Legendary: "ring-amber-500/40 bg-amber-500/10 text-amber-500",
  Epic: "ring-violet-500/40 bg-violet-500/10 text-violet-500",
  Rare: "ring-blue-500/40 bg-blue-500/10 text-blue-500",
  Common: "ring-border bg-muted text-muted-foreground",
};

export default function ProfilePage() {
  const skillCategories = Array.from(
    new Set(currentUser.skills.map((s) => s.category))
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="overflow-hidden p-0">
        <div className="relative h-28 bg-gradient-to-r from-primary via-violet-600 to-indigo-600">
          <div className="absolute inset-0 bg-dots opacity-15" />
        </div>
        <div className="px-5 pb-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-end gap-4">
              <Avatar
                size="lg"
                className="-mt-10 size-20 ring-4 ring-card"
              >
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback className="text-xl">
                  {initials(currentUser.name)}
                </AvatarFallback>
              </Avatar>
              <div className="pb-1">
                <h1 className="font-heading text-xl font-bold tracking-tight">
                  {currentUser.name}
                </h1>
                <p className="text-sm text-muted-foreground">
                  @{currentUser.username}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {[
                { Icon: GitHubIcon, href: currentUser.socials.github },
                { Icon: LinkedInIcon, href: currentUser.socials.linkedin },
                { Icon: XIcon, href: currentUser.socials.twitter },
              ].map(({ Icon: BrandIcon }, i) => (
                <button
                  key={i}
                  className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <BrandIcon className="size-4" />
                </button>
              ))}
              <Button variant="outline">
                <Pencil className="size-4" />
                Edit profile
              </Button>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm text-foreground/90">
            {currentUser.bio}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Briefcase className="size-4" />
              {currentUser.role}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4" />
              {currentUser.location}
            </span>
            <span>Joined {formatDate(currentUser.joinedAt)}</span>
          </div>

          {/* Stats */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Global rank", value: `#${currentUser.rank}` },
              { label: "Problems solved", value: currentUser.solvedTotal },
              { label: "Current streak", value: `${currentUser.streak}d` },
              { label: "Level", value: currentUser.level },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border p-3 text-center"
              >
                <div className="font-heading text-lg font-bold tabular-nums">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          {/* XP */}
          <div className="mt-4 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium">Level {currentUser.level}</span>
              <span className="text-muted-foreground tabular-nums">
                {currentUser.xp} / {currentUser.xpToNext} XP
              </span>
            </div>
            <ProgressBar
              value={(currentUser.xp / currentUser.xpToNext) * 100}
            />
          </div>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left column */}
        <div className="space-y-6 lg:col-span-2">
          {/* Skills */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 pt-4">
              {skillCategories.map((cat) => (
                <div key={cat}>
                  <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {cat}
                  </p>
                  <div className="space-y-3">
                    {currentUser.skills
                      .filter((s) => s.category === cat)
                      .map((s) => (
                        <div key={s.name} className="space-y-1.5">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">{s.name}</span>
                            <span className="tabular-nums text-muted-foreground">
                              {s.level}%
                            </span>
                          </div>
                          <ProgressBar value={s.level} size="sm" />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 pt-4 sm:grid-cols-2">
              {achievements.map((a) => (
                <div
                  key={a.id}
                  className={cn(
                    "rounded-xl border p-4",
                    a.unlocked
                      ? "border-primary/30 bg-primary/5"
                      : "border-border"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "grid size-10 place-items-center rounded-lg",
                        a.unlocked
                          ? "bg-primary/15 text-primary"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      <Icon name={a.icon} className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold">{a.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {a.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <ProgressBar
                      value={a.progress}
                      size="sm"
                      color={a.unlocked ? "emerald" : "primary"}
                    />
                    <p className="text-right text-[11px] text-muted-foreground tabular-nums">
                      {a.current} / {a.target}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Badges */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle>Badges</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-3 pt-4">
              {badges.map((b) => (
                <div
                  key={b.id}
                  className="flex flex-col items-center gap-1.5 text-center"
                  title={b.description}
                >
                  <span
                    className={cn(
                      "grid size-14 place-items-center rounded-2xl ring-1",
                      rarityRing[b.rarity],
                      !b.earnedAt && "opacity-40 grayscale"
                    )}
                  >
                    <Icon name={b.icon} className="size-6" />
                  </span>
                  <span className="text-[11px] font-medium leading-tight">
                    {b.name}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Resume */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle>Resume</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              <div className="flex items-center gap-3 rounded-xl border border-border p-3">
                <span className="grid size-10 place-items-center rounded-lg bg-rose-500/10 text-rose-500">
                  <FileText className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">
                    Alex_Carter_Resume.pdf
                  </p>
                  <p className="text-xs text-muted-foreground">
                    248 KB · Updated {relativeTime(currentUser.joinedAt)}
                  </p>
                </div>
                <Button variant="ghost" size="icon-sm" aria-label="Download">
                  <Download className="size-4" />
                </Button>
              </div>
              <Button variant="outline" className="w-full">
                <Upload className="size-4" />
                Upload new resume
              </Button>
            </CardContent>
          </Card>

          {/* Activity */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle>Activity History</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ol className="relative space-y-4 border-l border-border pl-5">
                {activityFeed.map((a) => (
                  <li key={a.id} className="relative">
                    <span className="absolute -left-[1.6rem] grid size-6 place-items-center rounded-full bg-card ring-1 ring-border">
                      <Icon
                        name={activityIcon[a.type] ?? "CircleDot"}
                        className="size-3.5 text-primary"
                      />
                    </span>
                    <p className="text-sm font-medium leading-snug">{a.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {a.description}
                    </p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                      {relativeTime(a.timestamp)}
                      {a.meta ? ` · ${a.meta}` : ""}
                    </p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
