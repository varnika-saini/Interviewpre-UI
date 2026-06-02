import type {
  StatCardData,
  DayProgress,
  MonthProgress,
  SkillBreakdown,
  DifficultyDistribution,
  RecentQuiz,
} from "@/types";

export const dashboardStats: StatCardData[] = [
  {
    id: "stat-solved",
    label: "Problems Solved",
    value: "342",
    change: 12.5,
    trend: "up",
    icon: "CheckCircle2",
    hint: "+38 this month",
  },
  {
    id: "stat-streak",
    label: "Current Streak",
    value: "27 days",
    change: 8.0,
    trend: "up",
    icon: "Flame",
    hint: "Longest: 41 days",
  },
  {
    id: "stat-accuracy",
    label: "Quiz Accuracy",
    value: "86%",
    change: 4.2,
    trend: "up",
    icon: "Target",
    hint: "Across 48 quizzes",
  },
  {
    id: "stat-rank",
    label: "Global Rank",
    value: "#1,284",
    change: 6.1,
    trend: "up",
    icon: "Trophy",
    hint: "Top 3% worldwide",
  },
];

export const weeklyProgress: DayProgress[] = [
  { day: "Mon", solved: 5, minutes: 62 },
  { day: "Tue", solved: 8, minutes: 95 },
  { day: "Wed", solved: 3, minutes: 41 },
  { day: "Thu", solved: 11, minutes: 128 },
  { day: "Fri", solved: 7, minutes: 88 },
  { day: "Sat", solved: 14, minutes: 165 },
  { day: "Sun", solved: 9, minutes: 110 },
];

export const monthlyProgress: MonthProgress[] = [
  { month: "Jan", solved: 41, score: 72 },
  { month: "Feb", solved: 58, score: 76 },
  { month: "Mar", solved: 49, score: 79 },
  { month: "Apr", solved: 72, score: 83 },
  { month: "May", solved: 88, score: 86 },
  { month: "Jun", solved: 34, score: 89 },
];

export const skillBreakdown: SkillBreakdown[] = [
  { skill: "Arrays", value: 92, fullMark: 100 },
  { skill: "Graphs", value: 68, fullMark: 100 },
  { skill: "DP", value: 74, fullMark: 100 },
  { skill: "Trees", value: 85, fullMark: 100 },
  { skill: "Strings", value: 88, fullMark: 100 },
  { skill: "System Design", value: 63, fullMark: 100 },
];

export const difficultyDistribution: DifficultyDistribution[] = [
  { difficulty: "Easy", solved: 168, total: 210, color: "var(--chart-3)" },
  { difficulty: "Medium", solved: 142, total: 320, color: "var(--chart-4)" },
  { difficulty: "Hard", solved: 32, total: 140, color: "var(--chart-5)" },
];

export const recentQuizzes: RecentQuiz[] = [
  {
    id: "rq-1",
    title: "JavaScript Fundamentals",
    category: "Web & Frontend",
    score: 8,
    total: 8,
    takenAt: "2026-05-31T09:20:00.000Z",
    difficulty: "Easy",
  },
  {
    id: "rq-2",
    title: "Data Structures Deep Dive",
    category: "Data Structures",
    score: 7,
    total: 8,
    takenAt: "2026-05-30T17:45:00.000Z",
    difficulty: "Medium",
  },
  {
    id: "rq-3",
    title: "System Design Basics",
    category: "System Design",
    score: 4,
    total: 6,
    takenAt: "2026-05-29T20:05:00.000Z",
    difficulty: "Hard",
  },
  {
    id: "rq-4",
    title: "Algorithms Essentials",
    category: "Algorithms",
    score: 6,
    total: 8,
    takenAt: "2026-05-28T11:30:00.000Z",
    difficulty: "Medium",
  },
];

// Contribution heatmap — 5 weeks x 7 days of activity counts (0-4 intensity)
export const activityHeatmap: number[][] = [
  [0, 1, 2, 3, 2, 4, 1],
  [2, 3, 1, 0, 4, 3, 2],
  [1, 2, 4, 3, 2, 1, 0],
  [3, 4, 2, 1, 3, 4, 2],
  [2, 1, 3, 4, 4, 2, 3],
];

export const studyTimeByTopic = [
  { topic: "Arrays", hours: 24, fill: "var(--chart-1)" },
  { topic: "Graphs", hours: 18, fill: "var(--chart-2)" },
  { topic: "DP", hours: 21, fill: "var(--chart-3)" },
  { topic: "Trees", hours: 14, fill: "var(--chart-4)" },
  { topic: "System Design", hours: 11, fill: "var(--chart-5)" },
];
