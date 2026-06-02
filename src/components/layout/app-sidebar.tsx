import Link from "next/link";
import { Flame, Sparkles } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { SidebarNav } from "./sidebar-nav";
import { UserMenu } from "./user-menu";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { currentUser } from "@/data";

export function AppSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
      <div className="flex h-16 items-center px-5">
        <Logo />
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-2 no-scrollbar">
        <SidebarNav />
      </div>

      <div className="space-y-3 p-3">
        <div className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 px-3 py-2.5 ring-1 ring-amber-500/20">
          <span className="grid size-9 place-items-center rounded-lg bg-amber-500/15 text-amber-500">
            <Flame className="size-5" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">{currentUser.streak}-day streak</p>
            <p className="text-xs text-muted-foreground">Keep it alive today!</p>
          </div>
        </div>

        <div className="rounded-xl border border-primary/20 bg-primary/5 p-3">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Sparkles className="size-4 text-primary" />
            Upgrade to Pro
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Unlock unlimited mock interviews & the full question bank.
          </p>
          <Link
            href="/settings"
            className={cn(buttonVariants({ size: "sm" }), "mt-3 w-full")}
          >
            Upgrade
          </Link>
        </div>

        <div className="border-t border-sidebar-border pt-2">
          <UserMenu variant="full" />
        </div>
      </div>
    </aside>
  );
}
