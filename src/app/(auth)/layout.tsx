import Link from "next/link";
import { ArrowLeft, CheckCircle2, Star } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { ThemeToggle } from "@/components/common/theme-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden overflow-hidden bg-gradient-to-br from-primary via-violet-600 to-indigo-700 p-10 text-primary-foreground lg:flex lg:flex-col lg:justify-between">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-15" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-white/10 blur-3xl" />
        <div className="relative">
          <Logo className="text-primary-foreground [&_span]:text-primary-foreground" />
        </div>

        <div className="relative max-w-md">
          <h2 className="font-heading text-3xl font-bold leading-tight">
            Join 120,000+ engineers landing offers at top companies.
          </h2>
          <ul className="mt-8 space-y-3">
            {[
              "3,000+ curated interview problems",
              "AI mock interviews with instant feedback",
              "Progress analytics & a global leaderboard",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="size-5 shrink-0 text-primary-foreground/90" />
                {item}
              </li>
            ))}
          </ul>

          <figure className="mt-10 rounded-2xl bg-white/10 p-5 backdrop-blur">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-amber-300 text-amber-300" />
              ))}
            </div>
            <blockquote className="mt-3 text-sm leading-relaxed">
              “I went from failing phone screens to four offers in eight weeks.
              This platform changed everything.”
            </blockquote>
            <figcaption className="mt-3 text-xs text-primary-foreground/80">
              Aarav M. — Software Engineer @ Google
            </figcaption>
          </figure>
        </div>

        <div className="relative text-xs text-primary-foreground/70">
          © 2026 InterviewPrep Pro
        </div>
      </div>

      {/* Form area */}
      <div className="relative flex flex-col">
        <div className="flex items-center justify-between p-5">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
          <ThemeToggle />
        </div>
        <div className="flex flex-1 items-center justify-center p-5 pb-16">
          <div className="w-full max-w-sm">
            <div className="mb-8 lg:hidden">
              <Logo />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
