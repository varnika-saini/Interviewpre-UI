import type { Feature, Step, Testimonial, FaqItem } from "@/types";

export const features: Feature[] = [
  {
    icon: "Code2",
    title: "3,000+ Coding Problems",
    description:
      "Curated questions from real interviews at top companies, organized by topic, pattern, and difficulty.",
  },
  {
    icon: "BrainCircuit",
    title: "Adaptive Quizzes",
    description:
      "Test your CS fundamentals with quizzes that adapt to your skill level and target your weak spots.",
  },
  {
    icon: "Video",
    title: "AI Mock Interviews",
    description:
      "Practice live system design and behavioral rounds with an AI interviewer that gives instant feedback.",
  },
  {
    icon: "BarChart3",
    title: "Progress Analytics",
    description:
      "Track solved problems, accuracy, streaks, and skill growth with beautiful, actionable dashboards.",
  },
  {
    icon: "Trophy",
    title: "Global Leaderboard",
    description:
      "Compete with thousands of engineers worldwide, earn badges, and climb the weekly rankings.",
  },
  {
    icon: "Sparkles",
    title: "Personalized Roadmaps",
    description:
      "Get a study plan tailored to your target role and timeline, updated as you make progress.",
  },
];

export const steps: Step[] = [
  {
    number: "01",
    icon: "UserPlus",
    title: "Create your account",
    description:
      "Sign up in seconds and tell us your target role, companies, and interview date.",
  },
  {
    number: "02",
    icon: "Target",
    title: "Get your roadmap",
    description:
      "We build a personalized study plan covering DSA, system design, and behavioral prep.",
  },
  {
    number: "03",
    icon: "Dumbbell",
    title: "Practice daily",
    description:
      "Solve problems, take quizzes, and run mock interviews — all with real-time feedback.",
  },
  {
    number: "04",
    icon: "Rocket",
    title: "Ace the interview",
    description:
      "Walk in confident with measurable progress and a track record of solved challenges.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Aarav Mehta",
    role: "Software Engineer",
    company: "Google",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=faces",
    quote:
      "I went from failing phone screens to four offers in eight weeks. The mock interviews felt exactly like the real thing.",
    rating: 5,
  },
  {
    name: "Sofia Alvarez",
    role: "Frontend Engineer",
    company: "Stripe",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=faces",
    quote:
      "The analytics showed me exactly where I was weak. I focused on graphs and DP for two weeks and it completely changed my interviews.",
    rating: 5,
  },
  {
    name: "Daniel Okafor",
    role: "Backend Engineer",
    company: "Amazon",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop&crop=faces",
    quote:
      "The system design track is gold. Clear frameworks, realistic prompts, and feedback that actually made me better.",
    rating: 5,
  },
  {
    name: "Mei Lin",
    role: "ML Engineer",
    company: "Meta",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&fit=crop&crop=faces",
    quote:
      "The leaderboard kept me accountable. Competing with friends turned grinding LeetCode into something I actually looked forward to.",
    rating: 5,
  },
  {
    name: "Lucas Bianchi",
    role: "Full Stack Engineer",
    company: "Airbnb",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=128&h=128&fit=crop&crop=faces",
    quote:
      "Best money I've spent on my career. The roadmap took the guesswork out of prep and kept me consistent.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Senior Engineer",
    company: "Netflix",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=128&h=128&fit=crop&crop=faces",
    quote:
      "After ten years out of the interview loop, this got me ready fast. The behavioral practice was a game changer.",
    rating: 5,
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Is InterviewPrep Pro free to use?",
    answer:
      "You can start for free with access to hundreds of problems and core quizzes. Pro unlocks the full question bank, unlimited AI mock interviews, and advanced analytics.",
  },
  {
    question: "Which companies are the questions based on?",
    answer:
      "Our question bank is curated from publicly reported interview experiences at companies like Google, Amazon, Meta, Microsoft, Stripe, and many fast-growing startups.",
  },
  {
    question: "How do the AI mock interviews work?",
    answer:
      "You pick a track — system design, DSA, or behavioral — and an AI interviewer guides you through a realistic session, then gives structured feedback on your performance.",
  },
  {
    question: "Do you support multiple programming languages?",
    answer:
      "Yes. You can practice in JavaScript, TypeScript, Python, Java, C++, and Go, with starter templates provided for each problem.",
  },
  {
    question: "Can I track my progress over time?",
    answer:
      "Absolutely. Your dashboard and analytics pages show solved counts, accuracy, learning streaks, skill breakdowns, and weekly and monthly trends.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes — there are no long-term contracts. You can upgrade, downgrade, or cancel your plan at any time from your settings.",
  },
];

export const trustedCompanies = [
  "Google",
  "Amazon",
  "Meta",
  "Microsoft",
  "Stripe",
  "Netflix",
  "Airbnb",
  "Uber",
];

export const landingStats = [
  { value: "120k+", label: "Engineers prepping" },
  { value: "3,000+", label: "Coding problems" },
  { value: "92%", label: "Offer rate" },
  { value: "4.9/5", label: "Average rating" },
];
