"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, Settings, User as UserIcon, ChevronsUpDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { initials } from "@/lib/format";
import { currentUser } from "@/data";
import { cn } from "@/lib/utils";

export function UserMenu({ variant = "icon" }: { variant?: "icon" | "full" }) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            className={cn(
              "flex items-center gap-2 rounded-lg outline-none transition-colors",
              variant === "full"
                ? "w-full p-2 hover:bg-sidebar-accent"
                : "rounded-full"
            )}
          >
            <Avatar size={variant === "full" ? "default" : "default"}>
              <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
              <AvatarFallback>{initials(currentUser.name)}</AvatarFallback>
            </Avatar>
            {variant === "full" && (
              <>
                <span className="flex min-w-0 flex-1 flex-col text-left">
                  <span className="truncate text-sm font-medium">
                    {currentUser.name}
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    Level {currentUser.level} · #{currentUser.rank}
                  </span>
                </span>
                <ChevronsUpDown className="size-4 text-muted-foreground" />
              </>
            )}
          </button>
        }
      />
      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuLabel>
          <div className="flex items-center gap-2.5">
            <Avatar>
              <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
              <AvatarFallback>{initials(currentUser.name)}</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">
                {currentUser.name}
              </p>
              <p className="truncate text-xs font-normal text-muted-foreground">
                {currentUser.email}
              </p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem render={<Link href="/profile" />}>
          <UserIcon className="size-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem render={<Link href="/settings" />}>
          <Settings className="size-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onClick={() => router.push("/login")}
        >
          <LogOut className="size-4" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
