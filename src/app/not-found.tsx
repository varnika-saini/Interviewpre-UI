import Link from "next/link";
import { Home, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Logo />
      <p className="mt-10 font-heading text-7xl font-bold text-gradient">404</p>
      <h1 className="mt-4 font-heading text-2xl font-bold tracking-tight">
        Page not found
      </h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="mt-7 flex flex-col gap-2 sm:flex-row">
        <Link href="/" className={cn(buttonVariants({ size: "lg" }))}>
          <Home className="size-4" />
          Back home
        </Link>
        <Link
          href="/questions"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          <Search className="size-4" />
          Browse problems
        </Link>
      </div>
    </div>
  );
}
