"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GitHubIcon, GoogleIcon } from "@/components/common/brand-icons";

export function PasswordInput({
  id,
  placeholder = "••••••••",
  value,
  onChange,
  autoComplete,
}: {
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}) {
  const [show, setShow] = React.useState(false);
  return (
    <div className="relative">
      <Input
        id={id}
        type={show ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="h-10 pr-10"
      />
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        aria-label={show ? "Hide password" : "Show password"}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
      </button>
    </div>
  );
}

export function SocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Button variant="outline" size="lg" className="h-10" type="button">
        <GoogleIcon className="size-4" />
        Google
      </Button>
      <Button variant="outline" size="lg" className="h-10" type="button">
        <GitHubIcon className="size-4" />
        GitHub
      </Button>
    </div>
  );
}

export function AuthDivider({ label = "or continue with" }: { label?: string }) {
  return (
    <div className="relative my-6 flex items-center">
      <span className="h-px flex-1 bg-border" />
      <span className="px-3 text-xs text-muted-foreground">{label}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export function FieldLabel({
  htmlFor,
  children,
  className,
}: {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-sm font-medium text-foreground", className)}
    >
      {children}
    </label>
  );
}
