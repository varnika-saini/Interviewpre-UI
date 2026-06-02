"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AuthDivider,
  FieldLabel,
  PasswordInput,
  SocialButtons,
} from "@/components/common/auth-fields";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    toast.success("Welcome back! Redirecting to your dashboard…");
    setTimeout(() => router.push("/dashboard"), 900);
  }

  return (
    <div>
      <div className="space-y-1.5">
        <h1 className="font-heading text-2xl font-bold tracking-tight">
          Welcome back
        </h1>
        <p className="text-sm text-muted-foreground">
          Sign in to continue your interview prep journey.
        </p>
      </div>

      <div className="mt-8">
        <SocialButtons />
        <AuthDivider />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              defaultValue="alex.carter@example.com"
              required
              className="h-10"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Link
                href="#"
                className="text-xs font-medium text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <PasswordInput id="password" autoComplete="current-password" />
          </div>

          <label className="flex items-center gap-2.5 text-sm">
            <Checkbox id="remember" defaultChecked />
            <span className="text-muted-foreground">Remember me for 30 days</span>
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
                Sign in
                <ArrowRight className="size-4" />
              </>
            )}
          </Button>
        </form>
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-primary hover:underline"
        >
          Sign up free
        </Link>
      </p>
    </div>
  );
}
