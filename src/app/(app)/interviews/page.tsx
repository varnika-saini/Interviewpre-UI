"use client";

import * as React from "react";
import { toast } from "sonner";
import { CalendarPlus, CheckCircle2, Star, Video } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InterviewCard } from "@/components/cards/interview-card";
import { EmptyState } from "@/components/common/empty-state";
import { FieldLabel } from "@/components/common/auth-fields";
import { interviews, upcomingInterviews, completedInterviews } from "@/data";

const INTERVIEW_TYPES = [
  "System Design",
  "Data Structures",
  "Behavioral",
  "Frontend",
  "Backend",
  "Full Stack",
];

function ScheduleDialog() {
  const [open, setOpen] = React.useState(false);

  function handleSchedule() {
    toast.success("Interview scheduled!", {
      description: "We'll send a calendar invite and a reminder.",
    });
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button size="lg">
            <CalendarPlus className="size-4" />
            Schedule interview
          </Button>
        }
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Schedule a mock interview</DialogTitle>
          <DialogDescription>
            Pick a focus area and a time. An AI interviewer will run the session.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <FieldLabel htmlFor="type">Interview type</FieldLabel>
            <Select defaultValue="System Design">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {INTERVIEW_TYPES.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor="role">Target role</FieldLabel>
            <Input id="role" placeholder="e.g. Senior Backend Engineer" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <FieldLabel htmlFor="date">Date</FieldLabel>
              <Input id="date" type="date" />
            </div>
            <div className="space-y-1.5">
              <FieldLabel htmlFor="time">Time</FieldLabel>
              <Input id="time" type="time" />
            </div>
          </div>
        </div>

        <DialogFooter>
          <DialogClose
            render={<Button variant="outline">Cancel</Button>}
          />
          <Button onClick={handleSchedule}>Schedule</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function InterviewsPage() {
  const avgScore = Math.round(
    completedInterviews.reduce((a, i) => a + (i.score ?? 0), 0) /
      Math.max(completedInterviews.length, 1)
  );

  const summary = [
    {
      label: "Upcoming",
      value: upcomingInterviews.length,
      icon: Video,
      cls: "text-violet-500 bg-violet-500/12",
    },
    {
      label: "Completed",
      value: completedInterviews.length,
      icon: CheckCircle2,
      cls: "text-emerald-500 bg-emerald-500/12",
    },
    {
      label: "Avg. score",
      value: `${avgScore}/100`,
      icon: Star,
      cls: "text-amber-500 bg-amber-500/12",
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Mock Interviews"
        description="Practice realistic interview rounds and get structured feedback on your performance."
      >
        <ScheduleDialog />
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-3">
        {summary.map((s) => (
          <Card key={s.label} className="flex-row items-center gap-4 p-5">
            <span
              className={`grid size-11 place-items-center rounded-xl ${s.cls}`}
            >
              <s.icon className="size-5" />
            </span>
            <div>
              <div className="font-heading text-xl font-bold tabular-nums">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">
            Upcoming ({upcomingInterviews.length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed ({completedInterviews.length})
          </TabsTrigger>
          <TabsTrigger value="all">All ({interviews.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="pt-5">
          {upcomingInterviews.length ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {upcomingInterviews.map((iv) => (
                <InterviewCard key={iv.id} interview={iv} />
              ))}
            </div>
          ) : (
            <EmptyState
              icon="Video"
              title="No upcoming interviews"
              description="Schedule your next mock interview to keep practicing."
            />
          )}
        </TabsContent>

        <TabsContent value="completed" className="pt-5">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {completedInterviews.map((iv) => (
              <InterviewCard key={iv.id} interview={iv} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="all" className="pt-5">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {interviews.map((iv) => (
              <InterviewCard key={iv.id} interview={iv} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
