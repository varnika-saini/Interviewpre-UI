import type { Difficulty } from "@/types";

export function formatNumber(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  return n.toLocaleString("en-US");
}

export function initials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export function relativeTime(iso: string, now: Date = new Date()): string {
  const diff = now.getTime() - new Date(iso).getTime();
  const abs = Math.abs(diff);
  const future = diff < 0;
  const minute = 60_000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;

  const fmt = (value: number, unit: string) =>
    future
      ? `in ${value} ${unit}${value > 1 ? "s" : ""}`
      : `${value} ${unit}${value > 1 ? "s" : ""} ago`;

  if (abs < minute) return future ? "soon" : "just now";
  if (abs < hour) return fmt(Math.round(abs / minute), "min");
  if (abs < day) return fmt(Math.round(abs / hour), "hour");
  if (abs < week) return fmt(Math.round(abs / day), "day");
  return fmt(Math.round(abs / week), "week");
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}

export function formatClock(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

// Difficulty + status badge styling -----------------------------------------

export function difficultyClasses(d: Difficulty): string {
  switch (d) {
    case "Easy":
      return "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20";
    case "Medium":
      return "bg-amber-500/12 text-amber-600 dark:text-amber-400 ring-1 ring-amber-500/20";
    case "Hard":
      return "bg-rose-500/12 text-rose-600 dark:text-rose-400 ring-1 ring-rose-500/20";
  }
}

export function difficultyDot(d: Difficulty): string {
  switch (d) {
    case "Easy":
      return "bg-emerald-500";
    case "Medium":
      return "bg-amber-500";
    case "Hard":
      return "bg-rose-500";
  }
}

export function scoreColor(score: number): string {
  if (score >= 80) return "text-emerald-600 dark:text-emerald-400";
  if (score >= 60) return "text-amber-600 dark:text-amber-400";
  return "text-rose-600 dark:text-rose-400";
}
