import type { Quiz, QuizCategory, QuizQuestion } from "@/types";

export const quizCategories: QuizCategory[] = [
  {
    id: "cat-dsa",
    name: "Data Structures",
    description: "Arrays, trees, graphs, hashing and more.",
    icon: "Boxes",
    quizCount: 18,
    color: "violet",
  },
  {
    id: "cat-algo",
    name: "Algorithms",
    description: "Sorting, searching, DP and greedy techniques.",
    icon: "Workflow",
    quizCount: 14,
    color: "blue",
  },
  {
    id: "cat-system",
    name: "System Design",
    description: "Scalability, caching, databases and queues.",
    icon: "Network",
    quizCount: 9,
    color: "emerald",
  },
  {
    id: "cat-db",
    name: "Databases & SQL",
    description: "Indexes, transactions, joins and normalization.",
    icon: "Database",
    quizCount: 11,
    color: "amber",
  },
  {
    id: "cat-os",
    name: "Operating Systems",
    description: "Processes, threads, memory and scheduling.",
    icon: "Cpu",
    quizCount: 7,
    color: "rose",
  },
  {
    id: "cat-web",
    name: "Web & Frontend",
    description: "HTTP, the browser, React and performance.",
    icon: "Layout",
    quizCount: 12,
    color: "cyan",
  },
];

const jsQuestions: QuizQuestion[] = [
  {
    id: "jq-1",
    prompt: "What is the output of `typeof null` in JavaScript?",
    options: ["'null'", "'object'", "'undefined'", "'number'"],
    correctIndex: 1,
    explanation:
      "`typeof null` returns 'object'. This is a long-standing bug in JavaScript kept for backward compatibility.",
  },
  {
    id: "jq-2",
    prompt: "Which method creates a new array with the results of calling a function on every element?",
    options: ["forEach", "map", "filter", "reduce"],
    correctIndex: 1,
    explanation:
      "`map` returns a new array; `forEach` returns undefined, `filter` selects items, and `reduce` accumulates a single value.",
  },
  {
    id: "jq-3",
    prompt: "What does the `===` operator check?",
    options: [
      "Value only",
      "Type only",
      "Value and type",
      "Reference only",
    ],
    correctIndex: 2,
    explanation:
      "`===` is strict equality and compares both value and type, without coercion.",
  },
  {
    id: "jq-4",
    prompt: "What is a closure?",
    options: [
      "A function with no arguments",
      "A function that remembers its lexical scope",
      "A way to close the browser tab",
      "An immediately destroyed variable",
    ],
    correctIndex: 1,
    explanation:
      "A closure is a function bundled with references to its surrounding state (its lexical environment).",
  },
  {
    id: "jq-5",
    prompt: "Which keyword declares a block-scoped variable that can be reassigned?",
    options: ["var", "let", "const", "function"],
    correctIndex: 1,
    explanation:
      "`let` is block-scoped and reassignable. `const` is block-scoped but not reassignable; `var` is function-scoped.",
  },
  {
    id: "jq-6",
    prompt: "What is the result of `[1, 2, 3].reduce((a, b) => a + b, 0)`?",
    options: ["0", "6", "123", "undefined"],
    correctIndex: 1,
    explanation:
      "reduce sums all elements starting from the initial value 0: 0 + 1 + 2 + 3 = 6.",
  },
  {
    id: "jq-7",
    prompt: "Which of these is NOT a primitive type in JavaScript?",
    options: ["string", "symbol", "array", "boolean"],
    correctIndex: 2,
    explanation:
      "Arrays are objects. The primitives are string, number, bigint, boolean, undefined, symbol, and null.",
  },
  {
    id: "jq-8",
    prompt: "What does `Promise.all` resolve with?",
    options: [
      "The first resolved value",
      "An array of all resolved values",
      "The last resolved value",
      "Nothing — it returns void",
    ],
    correctIndex: 1,
    explanation:
      "Promise.all resolves with an array of results once all input promises resolve, or rejects on the first rejection.",
  },
];

const dsaQuestions: QuizQuestion[] = [
  {
    id: "dq-1",
    prompt: "What is the time complexity of accessing an element in an array by index?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctIndex: 0,
    explanation:
      "Array indexing is constant time because the memory address is computed directly from the index.",
  },
  {
    id: "dq-2",
    prompt: "Which data structure uses LIFO ordering?",
    options: ["Queue", "Stack", "Heap", "Linked List"],
    correctIndex: 1,
    explanation:
      "A stack is Last-In-First-Out. A queue is First-In-First-Out.",
  },
  {
    id: "dq-3",
    prompt: "What is the average time complexity of search in a balanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctIndex: 1,
    explanation:
      "A balanced BST halves the search space each step, giving O(log n).",
  },
  {
    id: "dq-4",
    prompt: "Which structure is best for implementing a priority queue?",
    options: ["Array", "Hash Table", "Heap", "Stack"],
    correctIndex: 2,
    explanation:
      "A binary heap supports O(log n) insertion and removal of the min/max element.",
  },
  {
    id: "dq-5",
    prompt: "What is the worst-case time complexity of quicksort?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    correctIndex: 2,
    explanation:
      "Quicksort degrades to O(n^2) when partitions are maximally unbalanced (e.g., already-sorted input with poor pivots).",
  },
  {
    id: "dq-6",
    prompt: "A hash table's average lookup time is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctIndex: 0,
    explanation:
      "With a good hash function and load factor, lookups are amortized O(1).",
  },
  {
    id: "dq-7",
    prompt: "Which traversal visits the root node between its subtrees?",
    options: ["Pre-order", "In-order", "Post-order", "Level-order"],
    correctIndex: 1,
    explanation:
      "In-order traversal visits left subtree, root, then right subtree — yielding sorted order for a BST.",
  },
  {
    id: "dq-8",
    prompt: "What graph algorithm finds shortest paths from a single source with non-negative weights?",
    options: ["Kruskal's", "Dijkstra's", "Bellman-Ford", "Prim's"],
    correctIndex: 1,
    explanation:
      "Dijkstra's algorithm efficiently finds shortest paths when edge weights are non-negative.",
  },
];

const systemQuestions: QuizQuestion[] = [
  {
    id: "sq-1",
    prompt: "What does a CDN primarily improve?",
    options: [
      "Database write speed",
      "Content delivery latency",
      "Password hashing",
      "Code compilation",
    ],
    correctIndex: 1,
    explanation:
      "A CDN caches content at edge locations close to users, reducing latency for static assets.",
  },
  {
    id: "sq-2",
    prompt: "Which strategy helps a service handle sudden traffic spikes gracefully?",
    options: [
      "Vertical scaling only",
      "Rate limiting and queues",
      "Disabling caching",
      "Synchronous everything",
    ],
    correctIndex: 1,
    explanation:
      "Rate limiting protects the system and message queues absorb bursts by smoothing the load.",
  },
  {
    id: "sq-3",
    prompt: "What is the main trade-off described by the CAP theorem?",
    options: [
      "Cost vs. performance",
      "Consistency, availability, partition tolerance",
      "Cache vs. database",
      "Latency vs. bandwidth",
    ],
    correctIndex: 1,
    explanation:
      "CAP states that during a network partition you must choose between consistency and availability.",
  },
  {
    id: "sq-4",
    prompt: "Which database type is best suited for flexible, schema-less documents?",
    options: ["Relational (SQL)", "Document (NoSQL)", "Graph", "Columnar"],
    correctIndex: 1,
    explanation:
      "Document databases like MongoDB store flexible JSON-like documents without a fixed schema.",
  },
  {
    id: "sq-5",
    prompt: "What is the purpose of database sharding?",
    options: [
      "Encrypt data at rest",
      "Distribute data across multiple machines",
      "Compress old records",
      "Back up the database",
    ],
    correctIndex: 1,
    explanation:
      "Sharding partitions data horizontally across nodes to scale beyond a single machine.",
  },
  {
    id: "sq-6",
    prompt: "A load balancer using 'round robin' distributes requests by:",
    options: [
      "Server CPU usage",
      "Geographic location",
      "Cycling through servers in order",
      "Random selection weighted by latency",
    ],
    correctIndex: 2,
    explanation:
      "Round robin sends each new request to the next server in sequence, cycling back to the start.",
  },
];

export const quizzes: Quiz[] = [
  {
    id: "quiz-1",
    slug: "javascript-fundamentals",
    title: "JavaScript Fundamentals",
    description:
      "Core JavaScript concepts every engineer should know — types, closures, async, and array methods.",
    category: "Web & Frontend",
    difficulty: "Easy",
    questionCount: jsQuestions.length,
    durationMin: 10,
    attempts: 14820,
    rating: 4.8,
    tags: ["JavaScript", "Fundamentals", "ES6"],
    questions: jsQuestions,
  },
  {
    id: "quiz-2",
    slug: "data-structures-deep-dive",
    title: "Data Structures Deep Dive",
    description:
      "Complexity analysis, trees, heaps, hashing, and the structures that power efficient code.",
    category: "Data Structures",
    difficulty: "Medium",
    questionCount: dsaQuestions.length,
    durationMin: 12,
    attempts: 9740,
    rating: 4.9,
    tags: ["Big-O", "Trees", "Hashing"],
    questions: dsaQuestions,
  },
  {
    id: "quiz-3",
    slug: "system-design-basics",
    title: "System Design Basics",
    description:
      "Scalability building blocks — caching, sharding, load balancing, and the CAP theorem.",
    category: "System Design",
    difficulty: "Hard",
    questionCount: systemQuestions.length,
    durationMin: 15,
    attempts: 6120,
    rating: 4.7,
    tags: ["Scalability", "Caching", "Databases"],
    questions: systemQuestions,
  },
  {
    id: "quiz-4",
    slug: "algorithms-essentials",
    title: "Algorithms Essentials",
    description:
      "Sorting, searching, recursion, and dynamic programming patterns interviewers love.",
    category: "Algorithms",
    difficulty: "Medium",
    questionCount: dsaQuestions.length,
    durationMin: 14,
    attempts: 8310,
    rating: 4.6,
    tags: ["Sorting", "DP", "Greedy"],
    questions: dsaQuestions,
  },
  {
    id: "quiz-5",
    slug: "sql-and-databases",
    title: "SQL & Databases",
    description:
      "Joins, indexing, transactions, and normalization — the data layer interview essentials.",
    category: "Databases & SQL",
    difficulty: "Medium",
    questionCount: systemQuestions.length,
    durationMin: 12,
    attempts: 7050,
    rating: 4.5,
    tags: ["SQL", "Indexes", "ACID"],
    questions: systemQuestions,
  },
  {
    id: "quiz-6",
    slug: "react-internals",
    title: "React Internals",
    description:
      "Hooks, reconciliation, rendering, and performance patterns for modern React.",
    category: "Web & Frontend",
    difficulty: "Hard",
    questionCount: jsQuestions.length,
    durationMin: 13,
    attempts: 5680,
    rating: 4.8,
    tags: ["React", "Hooks", "Performance"],
    questions: jsQuestions,
  },
];

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === slug);
}
