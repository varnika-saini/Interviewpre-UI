import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Star,
  Play,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icon } from "@/lib/icons";
import { initials } from "@/lib/format";
import { SectionHeading } from "@/components/common/page-header";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/reveal";
import {
  features,
  steps,
  testimonials,
  faqs,
  trustedCompanies,
  landingStats,
} from "@/data";

export default function LandingPage() {
  return (
    <>
      {/* Hero ---------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-primary/20 opacity-40 blur-[120px] animate-aurora" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium backdrop-blur transition-colors hover:bg-card"
              >
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-primary">
                  <Sparkles className="size-3" /> New
                </span>
                AI-powered mock interviews are here
                <ArrowRight className="size-3.5" />
              </Link>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Crack your next{" "}
                <span className="text-gradient">tech interview</span> with
                confidence
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                Practice 3,000+ real interview problems, take adaptive quizzes,
                run AI mock interviews, and track every bit of progress — all in
                one beautiful platform.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/register"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-11 px-6 text-sm"
                  )}
                >
                  Start free today
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/dashboard"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-11 px-6 text-sm"
                  )}
                >
                  <Play className="size-4" />
                  Live demo
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 text-emerald-500" />
                No credit card required · Free forever plan
              </div>
            </Reveal>
          </div>

          {/* Product preview */}
          <Reveal delay={0.25} className="mx-auto mt-16 max-w-5xl">
            <HeroPreview />
          </Reveal>
        </div>
      </section>

      {/* Trusted by --------------------------------------------------- */}
      <section className="border-y border-border bg-muted/30 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by engineers landing offers at
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedCompanies.map((c) => (
              <span
                key={c}
                className="font-heading text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats -------------------------------------------------------- */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {landingStats.map((s) => (
              <Reveal key={s.label} className="text-center">
                <div className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features ----------------------------------------------------- */}
      <section id="features" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Everything you need"
              title="One platform, complete prep"
              description="From your first array problem to your final on-site loop — we've got every stage of your interview journey covered."
            />
          </Reveal>

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                  <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-transform group-hover:scale-105">
                    <Icon name={f.icon} className="size-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* How it works ------------------------------------------------- */}
      <section
        id="how-it-works"
        className="scroll-mt-20 border-y border-border bg-muted/30 py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="From zero to offer in four steps"
              description="A guided path that adapts to your goals and keeps you consistent."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="grid size-12 place-items-center rounded-xl bg-background text-primary ring-1 ring-border">
                      <Icon name={step.icon} className="size-6" />
                    </span>
                    <span className="font-heading text-3xl font-bold text-muted-foreground/30">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials ------------------------------------------------- */}
      <section id="testimonials" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Loved by engineers"
              title="Results that speak for themselves"
              description="Thousands of engineers have turned interview anxiety into offers."
            />
          </Reveal>

          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {testimonials.map((t) => (
              <Reveal key={t.name} className="break-inside-avoid">
                <figure className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={t.avatar} alt={t.name} />
                      <AvatarFallback>{initials(t.name)}</AvatarFallback>
                    </Avatar>
                    <div className="leading-tight">
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {t.role} · {t.company}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ---------------------------------------------------------- */}
      <section
        id="faq"
        className="scroll-mt-20 border-t border-border bg-muted/30 py-20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions, answered"
              description="Everything you need to know before getting started."
            />
          </Reveal>

          <Reveal className="mt-10">
            <Accordion className="rounded-2xl border border-border bg-card px-5">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA ---------------------------------------------------------- */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-violet-600 px-6 py-16 text-center text-primary-foreground sm:px-16">
              <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Your dream job is one practice session away
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                  Join 120,000+ engineers preparing smarter. Start free — no
                  credit card, no commitment.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/register"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-background px-6 text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
                  >
                    Get started free
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/login"
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-white/30 px-6 text-sm font-semibold transition-colors hover:bg-white/10"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

// Stylized product preview ----------------------------------------------------
function HeroPreview() {
  const bars = [42, 68, 30, 88, 56, 96, 72];
  return (
    <div className="rounded-2xl border border-border bg-card/80 p-2 shadow-2xl shadow-primary/10 backdrop-blur ring-1 ring-white/5">
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="size-3 rounded-full bg-rose-400/70" />
        <span className="size-3 rounded-full bg-amber-400/70" />
        <span className="size-3 rounded-full bg-emerald-400/70" />
        <span className="ml-3 rounded-md bg-muted px-3 py-1 text-xs text-muted-foreground">
          interviewprep.pro/dashboard
        </span>
      </div>
      <div className="rounded-xl bg-background p-4 sm:p-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { l: "Solved", v: "342", c: "text-violet-500" },
            { l: "Streak", v: "27🔥", c: "text-amber-500" },
            { l: "Accuracy", v: "86%", c: "text-emerald-500" },
            { l: "Rank", v: "#1,284", c: "text-blue-500" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-border p-3">
              <div className="text-[11px] text-muted-foreground">{s.l}</div>
              <div className={cn("mt-1 font-heading text-lg font-bold", s.c)}>
                {s.v}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          <div className="rounded-xl border border-border p-4 lg:col-span-2">
            <div className="mb-3 text-sm font-medium">Weekly progress</div>
            <div className="flex h-32 items-end gap-2">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-primary"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border p-4">
            <div className="mb-3 text-sm font-medium">Up next</div>
            <div className="space-y-2.5">
              {["Two Sum", "Valid Parentheses", "Course Schedule"].map(
                (t, i) => (
                  <div key={t} className="flex items-center gap-2 text-xs">
                    <span
                      className={cn(
                        "size-2 rounded-full",
                        i === 0
                          ? "bg-emerald-500"
                          : i === 1
                          ? "bg-amber-500"
                          : "bg-rose-500"
                      )}
                    />
                    <span className="text-muted-foreground">{t}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
