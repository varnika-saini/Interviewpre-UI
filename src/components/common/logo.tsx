import Link from "next/link";
import { Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { APP_NAME } from "@/constants";

export function Logo({
  href = "/",
  className,
  showText = true,
}: {
  href?: string;
  className?: string;
  showText?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn("group flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-violet-500 text-primary-foreground shadow-lg shadow-primary/25 ring-1 ring-white/10 transition-transform group-hover:scale-105">
        <Code2 className="size-5" strokeWidth={2.4} />
      </span>
      {showText && (
        <span className="font-heading text-base font-semibold tracking-tight">
          InterviewPrep
          <span className="text-primary">Pro</span>
        </span>
      )}
    </Link>
  );
}
