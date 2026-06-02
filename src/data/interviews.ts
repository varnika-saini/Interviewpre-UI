import type { Interview } from "@/types";

export const interviews: Interview[] = [
  {
    id: "int-1",
    title: "System Design — URL Shortener",
    type: "System Design",
    role: "Senior Backend Engineer",
    company: "Stripe",
    interviewer: {
      name: "Elena Rossi",
      title: "Staff Engineer",
      company: "Stripe",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&crop=faces",
    },
    scheduledAt: "2026-06-04T15:00:00.000Z",
    durationMin: 45,
    status: "upcoming",
    difficulty: "Hard",
    topics: ["Scalability", "Caching", "Databases", "Load Balancing"],
  },
  {
    id: "int-2",
    title: "DSA — Trees & Graphs",
    type: "Data Structures",
    role: "Software Engineer II",
    company: "Google",
    interviewer: {
      name: "Marcus Chen",
      title: "Senior SWE",
      company: "Google",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=faces",
    },
    scheduledAt: "2026-06-06T18:30:00.000Z",
    durationMin: 60,
    status: "upcoming",
    difficulty: "Medium",
    topics: ["Binary Trees", "BFS / DFS", "Recursion"],
  },
  {
    id: "int-3",
    title: "Behavioral — Leadership Principles",
    type: "Behavioral",
    role: "Senior Software Engineer",
    company: "Amazon",
    interviewer: {
      name: "Priya Nair",
      title: "Engineering Manager",
      company: "Amazon",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=128&h=128&fit=crop&crop=faces",
    },
    scheduledAt: "2026-06-09T16:00:00.000Z",
    durationMin: 45,
    status: "upcoming",
    difficulty: "Medium",
    topics: ["STAR Method", "Ownership", "Conflict Resolution"],
  },
  {
    id: "int-4",
    title: "Frontend — Component Architecture",
    type: "Frontend",
    role: "Frontend Engineer",
    company: "Airbnb",
    interviewer: {
      name: "Sofia Alvarez",
      title: "Senior Frontend Engineer",
      company: "Airbnb",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=faces",
    },
    scheduledAt: "2026-05-27T14:00:00.000Z",
    durationMin: 60,
    status: "completed",
    difficulty: "Medium",
    score: 88,
    feedback:
      "Strong component decomposition and state management. Work on articulating accessibility trade-offs earlier in the design.",
    topics: ["React", "State Management", "Accessibility"],
  },
  {
    id: "int-5",
    title: "DSA — Dynamic Programming",
    type: "Data Structures",
    role: "Software Engineer",
    company: "Meta",
    interviewer: {
      name: "Daniel Okafor",
      title: "Senior SWE",
      company: "Meta",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop&crop=faces",
    },
    scheduledAt: "2026-05-22T17:00:00.000Z",
    durationMin: 60,
    status: "completed",
    difficulty: "Hard",
    score: 74,
    feedback:
      "Identified the DP recurrence but took too long on the base cases. Solid recovery and clean final code.",
    topics: ["Dynamic Programming", "Memoization", "Optimization"],
  },
  {
    id: "int-6",
    title: "System Design — News Feed",
    type: "System Design",
    role: "Staff Engineer",
    company: "Netflix",
    interviewer: {
      name: "Aarav Mehta",
      title: "Principal Engineer",
      company: "Netflix",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=faces",
    },
    scheduledAt: "2026-05-15T19:00:00.000Z",
    durationMin: 45,
    status: "completed",
    difficulty: "Hard",
    score: 91,
    feedback:
      "Excellent breadth-first approach and great handling of fan-out trade-offs. Among the strongest sessions this month.",
    topics: ["Feed Ranking", "Fan-out", "Caching", "Pagination"],
  },
];

export const upcomingInterviews = interviews.filter(
  (i) => i.status === "upcoming"
);
export const completedInterviews = interviews.filter(
  (i) => i.status === "completed"
);
