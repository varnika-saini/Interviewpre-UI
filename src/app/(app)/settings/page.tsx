"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { Check, Monitor, Moon, ShieldCheck, Sun } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { FieldLabel, PasswordInput } from "@/components/common/auth-fields";
import { cn } from "@/lib/utils";
import { currentUser } from "@/data";

function ToggleRow({
  title,
  description,
  defaultChecked,
}: {
  title: string;
  description: string;
  defaultChecked?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      <div className="space-y-0.5">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}

function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const current = mounted ? theme : undefined;

  const options = [
    { value: "light", label: "Light", Icon: Sun },
    { value: "dark", label: "Dark", Icon: Moon },
    { value: "system", label: "System", Icon: Monitor },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => setTheme(o.value)}
          className={cn(
            "relative flex flex-col items-center gap-2 rounded-xl border p-4 transition-colors",
            current === o.value
              ? "border-primary bg-primary/5 ring-1 ring-primary"
              : "border-border hover:bg-muted/50"
          )}
        >
          {current === o.value && (
            <Check className="absolute right-2 top-2 size-4 text-primary" />
          )}
          <o.Icon className="size-5" />
          <span className="text-sm font-medium">{o.label}</span>
        </button>
      ))}
    </div>
  );
}

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        description="Manage your account, preferences, and security."
      />

      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* Account */}
        <TabsContent value="account" className="pt-5">
          <Card className="max-w-2xl">
            <CardHeader className="border-b">
              <CardTitle>Account information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <FieldLabel htmlFor="name">Full name</FieldLabel>
                  <Input id="name" defaultValue={currentUser.name} className="h-10" />
                </div>
                <div className="space-y-1.5">
                  <FieldLabel htmlFor="username">Username</FieldLabel>
                  <Input
                    id="username"
                    defaultValue={currentUser.username}
                    className="h-10"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  defaultValue={currentUser.email}
                  className="h-10"
                />
              </div>
              <div className="space-y-1.5">
                <FieldLabel htmlFor="bio">Bio</FieldLabel>
                <Textarea
                  id="bio"
                  rows={3}
                  defaultValue={currentUser.bio}
                />
              </div>
              <div className="flex justify-end gap-2 border-t border-border pt-4">
                <Button variant="outline">Cancel</Button>
                <Button onClick={() => toast.success("Profile updated")}>
                  Save changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="pt-5">
          <Card className="max-w-2xl">
            <CardHeader className="border-b">
              <CardTitle>Notification preferences</CardTitle>
            </CardHeader>
            <CardContent className="divide-y divide-border pt-2">
              <ToggleRow
                title="Daily practice reminder"
                description="Get a nudge to keep your streak alive."
                defaultChecked
              />
              <ToggleRow
                title="Interview reminders"
                description="Alerts before your scheduled mock interviews."
                defaultChecked
              />
              <ToggleRow
                title="Weekly progress report"
                description="A summary of your stats every Monday."
                defaultChecked
              />
              <ToggleRow
                title="Leaderboard updates"
                description="When your global rank changes significantly."
              />
              <ToggleRow
                title="Product news & tips"
                description="Occasional updates about new features."
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance */}
        <TabsContent value="appearance" className="pt-5">
          <Card className="max-w-2xl">
            <CardHeader className="border-b">
              <CardTitle>Appearance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 pt-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Theme</p>
                <ThemePicker />
              </div>
              <div className="divide-y divide-border border-t border-border">
                <ToggleRow
                  title="Reduced motion"
                  description="Minimize animations across the app."
                />
                <ToggleRow
                  title="Compact mode"
                  description="Tighter spacing to fit more on screen."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="pt-5">
          <div className="max-w-2xl space-y-6">
            <Card>
              <CardHeader className="border-b">
                <CardTitle>Change password</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="space-y-1.5">
                  <FieldLabel htmlFor="current">Current password</FieldLabel>
                  <PasswordInput id="current" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <FieldLabel htmlFor="new">New password</FieldLabel>
                    <PasswordInput id="new" />
                  </div>
                  <div className="space-y-1.5">
                    <FieldLabel htmlFor="confirm">Confirm</FieldLabel>
                    <PasswordInput id="confirm" />
                  </div>
                </div>
                <div className="flex justify-end border-t border-border pt-4">
                  <Button onClick={() => toast.success("Password updated")}>
                    Update password
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-500" />
                  Two-factor authentication
                </CardTitle>
              </CardHeader>
              <CardContent className="divide-y divide-border pt-2">
                <ToggleRow
                  title="Authenticator app"
                  description="Use a TOTP app for an extra layer of security."
                  defaultChecked
                />
                <ToggleRow
                  title="SMS backup codes"
                  description="Receive codes via text as a fallback."
                />
              </CardContent>
            </Card>

            <Card className="border-destructive/30">
              <CardHeader className="border-b border-destructive/20">
                <CardTitle className="text-destructive">Danger zone</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-start justify-between gap-3 pt-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-medium">Delete account</p>
                  <p className="text-xs text-muted-foreground">
                    Permanently remove your account and all data.
                  </p>
                </div>
                <Button
                  variant="destructive"
                  onClick={() =>
                    toast.error("Account deletion is disabled in the demo")
                  }
                >
                  Delete account
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
