"use client";

import Link from "next/link";
import { Bell, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Logo } from "@/components/common/logo";
import { MobileSidebar } from "./mobile-nav";
import { UserMenu } from "./user-menu";

const notifications = [
  {
    title: "Mock interview tomorrow",
    desc: "System Design with Elena Rossi at 8:00 AM",
    time: "2h ago",
  },
  {
    title: "You earned a new badge!",
    desc: "Streak Master — 25 day streak",
    time: "1d ago",
  },
  {
    title: "Weekly report ready",
    desc: "You solved 57 problems this week",
    time: "2d ago",
  },
];

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-xl sm:px-6">
      <MobileSidebar />
      <div className="lg:hidden">
        <Logo showText={false} />
      </div>

      <div className="relative hidden max-w-md flex-1 md:block">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search problems, quizzes, topics…"
          className="h-9 pl-9"
        />
        <kbd className="pointer-events-none absolute right-2.5 top-1/2 hidden -translate-y-1/2 select-none rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground lg:inline-block">
          ⌘K
        </kbd>
      </div>

      <div className="ml-auto flex items-center gap-1">
        <Link
          href="/questions"
          className={cn(
            buttonVariants({ size: "sm" }),
            "hidden h-9 sm:inline-flex"
          )}
        >
          Start practicing
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                aria-label="Notifications"
              >
                <Bell className="size-[1.15rem]" />
                <span className="absolute right-2 top-2 size-2 rounded-full bg-primary ring-2 ring-background" />
              </Button>
            }
          />
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="text-sm font-semibold text-foreground">
              Notifications
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.map((n, i) => (
              <DropdownMenuItem
                key={i}
                className="flex-col items-start gap-0.5 py-2.5"
              >
                <div className="flex w-full items-center justify-between">
                  <span className="text-sm font-medium">{n.title}</span>
                  <span className="text-[11px] text-muted-foreground">
                    {n.time}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">{n.desc}</span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-sm text-primary">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <ThemeToggle />

        <div className="lg:hidden">
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
