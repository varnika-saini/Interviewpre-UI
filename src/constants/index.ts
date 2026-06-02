import type { NavItem } from "@/types";

export const APP_NAME = "InterviewPrep Pro";
export const APP_TAGLINE = "Land your dream tech job.";

export const MARKETING_NAV = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
] as const;

export const SIDEBAR_NAV: { group: string; items: NavItem[] }[] = [
  {
    group: "Overview",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
      { label: "Analytics", href: "/analytics", icon: "BarChart3" },
      { label: "Leaderboard", href: "/leaderboard", icon: "Trophy" },
    ],
  },
  {
    group: "Practice",
    items: [
      { label: "Coding Questions", href: "/questions", icon: "Code2" },
      { label: "Quizzes", href: "/quizzes", icon: "BrainCircuit" },
      {
        label: "Mock Interviews",
        href: "/interviews",
        icon: "Video",
        badge: "New",
      },
    ],
  },
  {
    group: "Account",
    items: [
      { label: "Profile", href: "/profile", icon: "User" },
      { label: "Settings", href: "/settings", icon: "Settings" },
    ],
  },
];

export const MOBILE_TABBAR: NavItem[] = [
  { label: "Home", href: "/dashboard", icon: "LayoutDashboard" },
  { label: "Code", href: "/questions", icon: "Code2" },
  { label: "Quiz", href: "/quizzes", icon: "BrainCircuit" },
  { label: "Ranks", href: "/leaderboard", icon: "Trophy" },
  { label: "Profile", href: "/profile", icon: "User" },
];

export const PROGRAMMING_LANGUAGES = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "Go",
] as const;

export const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Coding Practice", href: "/questions" },
      { label: "Mock Interviews", href: "/interviews" },
      { label: "Leaderboard", href: "/leaderboard" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];
