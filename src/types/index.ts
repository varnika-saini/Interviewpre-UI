// ---------------------------------------------------------------------------
// Shared domain types for InterviewPrep Pro
// ---------------------------------------------------------------------------

export type Difficulty = "Easy" | "Medium" | "Hard";

export type QuestionStatus = "solved" | "attempted" | "todo";

export interface CodeExample {
  input: string;
  output: string;
  explanation?: string;
}

export interface StarterCode {
  language: string;
  code: string;
}

export interface Question {
  id: string;
  slug: string;
  title: string;
  difficulty: Difficulty;
  category: string;
  tags: string[];
  companies: string[];
  acceptance: number; // percentage 0-100
  likes: number;
  dislikes: number;
  status: QuestionStatus;
  isPremium: boolean;
  description: string;
  examples: CodeExample[];
  constraints: string[];
  hints: string[];
  starterCode: StarterCode[];
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: Difficulty;
  questionCount: number;
  durationMin: number;
  attempts: number;
  rating: number;
  tags: string[];
  questions: QuizQuestion[];
}

export interface QuizCategory {
  id: string;
  name: string;
  description: string;
  icon: string; // lucide icon name
  quizCount: number;
  color: string; // tailwind color token base, e.g. "violet"
}

export type InterviewStatus = "upcoming" | "completed" | "cancelled";
export type InterviewType =
  | "System Design"
  | "Data Structures"
  | "Behavioral"
  | "Frontend"
  | "Backend"
  | "Full Stack";

export interface Interviewer {
  name: string;
  title: string;
  company: string;
  avatar: string;
}

export interface Interview {
  id: string;
  title: string;
  type: InterviewType;
  role: string;
  company: string;
  interviewer: Interviewer;
  scheduledAt: string; // ISO
  durationMin: number;
  status: InterviewStatus;
  difficulty: Difficulty;
  score?: number; // 0-100
  feedback?: string;
  topics: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string; // lucide icon name
  color: string;
  earnedAt?: string;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  progress: number; // 0-100
  target: number;
  current: number;
  icon: string;
  unlocked: boolean;
}

export interface ActivityItem {
  id: string;
  type: "solved" | "quiz" | "interview" | "badge" | "streak";
  title: string;
  description: string;
  timestamp: string; // ISO
  meta?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  role: string;
  company: string;
  location: string;
  bio: string;
  joinedAt: string;
  rank: number;
  globalPercentile: number;
  level: number;
  xp: number;
  xpToNext: number;
  streak: number;
  longestStreak: number;
  solvedTotal: number;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  skills: Skill[];
  badges: Badge[];
}

export interface LeaderboardEntry {
  rank: number;
  previousRank: number;
  name: string;
  username: string;
  avatar: string;
  country: string;
  countryFlag: string;
  score: number;
  solved: number;
  streak: number;
  badges: number;
  topBadge: string;
}

export interface StatCardData {
  id: string;
  label: string;
  value: string;
  change: number; // percentage, can be negative
  trend: "up" | "down";
  icon: string;
  hint: string;
}

export interface DayProgress {
  day: string;
  solved: number;
  minutes: number;
}

export interface MonthProgress {
  month: string;
  solved: number;
  score: number;
}

export interface SkillBreakdown {
  skill: string;
  value: number;
  fullMark: number;
}

export interface DifficultyDistribution {
  difficulty: Difficulty;
  solved: number;
  total: number;
  color: string;
}

export interface RecentQuiz {
  id: string;
  title: string;
  category: string;
  score: number;
  total: number;
  takenAt: string;
  difficulty: Difficulty;
}

// Marketing primitives ------------------------------------------------------

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string; // lucide icon name
  badge?: string;
}
