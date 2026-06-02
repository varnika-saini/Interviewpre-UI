"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  AuthDivider,
  FieldLabel,
  PasswordInput,
  SocialButtons,
} from "@/components/common/auth-fields";

function strength(pw: string) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

const strengthLabels = ["", "Weak", "Fair", "Good", "Strong"];
const strengthColors = [
  "bg-muted",
  "bg-rose-500",
  "bg-amber-500",
  "bg-blue-500",
  "bg-emerald-500",
];

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const score = strength(password);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    toast.success("Account created! Setting up your workspace…");
    setTimeout(() => router.push("/dashboard"), 900);
  }

  return (
    <div>
      <div className="space-y-1.5">
        <h1 className="font-heading text-2xl font-bold tracking-tight">
          Create your account
        </h1>
        <p className="text-sm text-muted-foreground">
          Start practicing for free — no credit card required.
        </p>
      </div>

      <div className="mt-8">
        <SocialButtons />
        <AuthDivider label="or sign up with email" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <Input
              id="name"
              placeholder="Alex Carter"
              autoComplete="name"
              required
              className="h-10"
            />
          </div>

          <div className="space-y-1.5">
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="h-10"
            />
          </div>

          <div className="space-y-1.5">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <PasswordInput
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password && (
              <div className="space-y-1 pt-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <span
                      key={i}
                      className={cn(
                        "h-1 flex-1 rounded-full transition-colors",
                        i <= score ? strengthColors[score] : "bg-muted"
                      )}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Password strength:{" "}
                  <span className="font-medium text-foreground">
                    {strengthLabels[score]}
                  </span>
                </p>
              </div>
            )}
          </div>

          <div className="space-y-1.5">
            <FieldLabel htmlFor="confirm">Confirm password</FieldLabel>
            <PasswordInput id="confirm" autoComplete="new-password" />
          </div>

          <label className="flex items-start gap-2.5 text-sm">
            <Checkbox id="terms" defaultChecked className="mt-0.5" />
            <span className="text-muted-foreground">
              I agree to the{" "}
              <Link href="#" className="font-medium text-primary hover:underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="#" className="font-medium text-primary hover:underline">
                Privacy Policy
              </Link>
            </span>
          </label>

          <Button
            type="submit"
            size="lg"
            className="h-10 w-full"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <>
                Create account
                <ArrowRight className="size-4" />
              </>
            )}
          </Button>
        </form>
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-primary hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
