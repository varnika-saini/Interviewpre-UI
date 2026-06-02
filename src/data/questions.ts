import type { Question, StarterCode } from "@/types";

function starter(fnName: string, args: string): StarterCode[] {
  return [
    {
      language: "JavaScript",
      code: `/**\n * @param ${args}\n */\nvar ${fnName} = function(${args
        .split(",")
        .map((a) => a.trim().split(" ").pop())
        .join(", ")}) {\n  // Write your solution here\n  \n};`,
    },
    {
      language: "TypeScript",
      code: `function ${fnName}(${args}): number {\n  // Write your solution here\n  \n}`,
    },
    {
      language: "Python",
      code: `class Solution:\n    def ${fnName}(self, ${args}) -> int:\n        # Write your solution here\n        pass`,
    },
    {
      language: "Java",
      code: `class Solution {\n    public int ${fnName}(${args}) {\n        // Write your solution here\n        \n    }\n}`,
    },
    {
      language: "C++",
      code: `class Solution {\npublic:\n    int ${fnName}(${args}) {\n        // Write your solution here\n        \n    }\n};`,
    },
    {
      language: "Go",
      code: `func ${fnName}(${args}) int {\n    // Write your solution here\n    \n}`,
    },
  ];
}

export const questions: Question[] = [
  {
    id: "q-1",
    slug: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays & Hashing",
    tags: ["Array", "Hash Table"],
    companies: ["Google", "Amazon", "Apple"],
    acceptance: 52.3,
    likes: 48210,
    dislikes: 1520,
    status: "solved",
    isPremium: false,
    description:
      "Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists.",
    ],
    hints: [
      "A brute force approach checks every pair — can you do better?",
      "Use a hash map to store the value you've seen and its index.",
      "For each number, check if target - num exists in the map.",
    ],
    starterCode: starter("twoSum", "nums, target"),
  },
  {
    id: "q-2",
    slug: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    tags: ["String", "Stack"],
    companies: ["Meta", "Microsoft", "Bloomberg"],
    acceptance: 40.7,
    likes: 21450,
    dislikes: 980,
    status: "solved",
    isPremium: false,
    description:
      "Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.\n\nAn input string is valid if open brackets are closed by the same type of brackets and in the correct order.",
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: [
      "1 <= s.length <= 10^4",
      "s consists of parentheses only '()[]{}'.",
    ],
    hints: [
      "Think about which data structure naturally reverses order.",
      "Push opening brackets onto a stack and match closing ones.",
    ],
    starterCode: starter("isValid", "s"),
  },
  {
    id: "q-3",
    slug: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List",
    tags: ["Linked List", "Recursion"],
    companies: ["Amazon", "Apple", "Adobe"],
    acceptance: 63.1,
    likes: 18920,
    dislikes: 420,
    status: "attempted",
    isPremium: false,
    description:
      "You are given the heads of two sorted linked lists `list1` and `list2`.\n\nMerge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.",
    examples: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
      },
      { input: "list1 = [], list2 = []", output: "[]" },
    ],
    constraints: [
      "The number of nodes in both lists is in the range [0, 50].",
      "-100 <= Node.val <= 100",
      "Both list1 and list2 are sorted in non-decreasing order.",
    ],
    hints: [
      "Use a dummy head node to simplify edge cases.",
      "Compare the heads of both lists and advance the smaller one.",
    ],
    starterCode: starter("mergeTwoLists", "list1, list2"),
  },
  {
    id: "q-4",
    slug: "longest-substring-without-repeating",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "Sliding Window",
    tags: ["Hash Table", "String", "Sliding Window"],
    companies: ["Amazon", "Bloomberg", "Adobe"],
    acceptance: 34.5,
    likes: 39820,
    dislikes: 1700,
    status: "todo",
    isPremium: false,
    description:
      "Given a string `s`, find the length of the longest substring without repeating characters.",
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with the length of 1.',
      },
    ],
    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces.",
    ],
    hints: [
      "Use a sliding window with two pointers.",
      "Track characters in the current window with a set.",
    ],
    starterCode: starter("lengthOfLongestSubstring", "s"),
  },
  {
    id: "q-5",
    slug: "add-two-numbers",
    title: "Add Two Numbers",
    difficulty: "Medium",
    category: "Linked List",
    tags: ["Linked List", "Math", "Recursion"],
    companies: ["Microsoft", "Amazon", "Adobe"],
    acceptance: 39.2,
    likes: 28940,
    dislikes: 5600,
    status: "todo",
    isPremium: false,
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    examples: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
        explanation: "342 + 465 = 807.",
      },
    ],
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 <= Node.val <= 9",
    ],
    hints: [
      "Track a carry as you traverse both lists.",
      "Don't forget a final carry after the loop.",
    ],
    starterCode: starter("addTwoNumbers", "l1, l2"),
  },
  {
    id: "q-6",
    slug: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    category: "Graphs",
    tags: ["DFS", "BFS", "Graph", "Topological Sort"],
    companies: ["Google", "Amazon", "Uber"],
    acceptance: 46.0,
    likes: 16230,
    dislikes: 640,
    status: "solved",
    isPremium: false,
    description:
      "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a, b]` indicates that you must take course `b` first if you want to take course `a`.\n\nReturn `true` if you can finish all courses. Otherwise, return `false`.",
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
      },
      {
        input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        output: "false",
      },
    ],
    constraints: [
      "1 <= numCourses <= 2000",
      "0 <= prerequisites.length <= 5000",
    ],
    hints: [
      "This is a cycle detection problem on a directed graph.",
      "Use topological sort (Kahn's algorithm) or DFS with coloring.",
    ],
    starterCode: starter("canFinish", "numCourses, prerequisites"),
  },
  {
    id: "q-7",
    slug: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Dynamic Programming",
    tags: ["Array", "Dynamic Programming", "BFS"],
    companies: ["Amazon", "Google", "Goldman Sachs"],
    acceptance: 42.8,
    likes: 17840,
    dislikes: 410,
    status: "attempted",
    isPremium: false,
    description:
      "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.\n\nReturn the fewest number of coins that you need to make up that amount. If that amount cannot be made up, return `-1`.",
    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
        explanation: "11 = 5 + 5 + 1",
      },
      { input: "coins = [2], amount = 3", output: "-1" },
    ],
    constraints: [
      "1 <= coins.length <= 12",
      "1 <= coins[i] <= 2^31 - 1",
      "0 <= amount <= 10^4",
    ],
    hints: [
      "Define dp[x] = fewest coins to make amount x.",
      "dp[x] = min(dp[x - coin] + 1) over all coins.",
    ],
    starterCode: starter("coinChange", "coins, amount"),
  },
  {
    id: "q-8",
    slug: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Two Pointers",
    tags: ["Array", "Two Pointers", "Stack", "Dynamic Programming"],
    companies: ["Amazon", "Google", "Goldman Sachs"],
    acceptance: 60.4,
    likes: 30210,
    dislikes: 380,
    status: "todo",
    isPremium: false,
    description:
      "Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.",
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
      },
      { input: "height = [4,2,0,3,2,5]", output: "9" },
    ],
    constraints: [
      "n == height.length",
      "1 <= n <= 2 * 10^4",
      "0 <= height[i] <= 10^5",
    ],
    hints: [
      "Water above a bar is min(maxLeft, maxRight) - height.",
      "Use two pointers moving inward from both ends.",
    ],
    starterCode: starter("trap", "height"),
  },
  {
    id: "q-9",
    slug: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Binary Search",
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    companies: ["Google", "Amazon", "Adobe"],
    acceptance: 38.1,
    likes: 26110,
    dislikes: 2900,
    status: "todo",
    isPremium: true,
    description:
      "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays. The overall run time complexity should be `O(log (m+n))`.",
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.00000",
        explanation: "merged array = [1,2,3], median is 2.",
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.50000",
      },
    ],
    constraints: [
      "nums1.length == m",
      "nums2.length == n",
      "0 <= m <= 1000, 0 <= n <= 1000",
    ],
    hints: [
      "A linear merge is O(m+n) — the log requirement means binary search.",
      "Binary search the partition point on the smaller array.",
    ],
    starterCode: starter("findMedianSortedArrays", "nums1, nums2"),
  },
  {
    id: "q-10",
    slug: "lru-cache",
    title: "LRU Cache",
    difficulty: "Medium",
    category: "Design",
    tags: ["Hash Table", "Linked List", "Design"],
    companies: ["Amazon", "Microsoft", "Bloomberg"],
    acceptance: 41.6,
    likes: 19340,
    dislikes: 820,
    status: "todo",
    isPremium: false,
    description:
      "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement `get` and `put` operations in `O(1)` average time complexity.",
    examples: [
      {
        input:
          'LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2); get(3)',
        output: "1, -1, 3",
        explanation: "Adding key 3 evicts the least recently used key 2.",
      },
    ],
    constraints: [
      "1 <= capacity <= 3000",
      "At most 2 * 10^5 calls to get and put.",
    ],
    hints: [
      "Combine a hash map with a doubly linked list.",
      "The list keeps recency order; the map gives O(1) lookup.",
    ],
    starterCode: starter("LRUCache", "capacity"),
  },
  {
    id: "q-11",
    slug: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Graphs",
    tags: ["Array", "DFS", "BFS", "Matrix", "Union Find"],
    companies: ["Amazon", "Google", "Meta"],
    acceptance: 57.2,
    likes: 22010,
    dislikes: 510,
    status: "solved",
    isPremium: false,
    description:
      "Given an `m x n` 2D binary grid which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
    examples: [
      {
        input:
          'grid = [["1","1","0"],["1","0","0"],["0","0","1"]]',
        output: "2",
      },
    ],
    constraints: [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m, n <= 300",
    ],
    hints: [
      "Each unvisited land cell starts a new island.",
      "Flood fill with DFS/BFS to mark the whole island visited.",
    ],
    starterCode: starter("numIslands", "grid"),
  },
  {
    id: "q-12",
    slug: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    category: "Graphs",
    tags: ["Hash Table", "String", "BFS"],
    companies: ["Amazon", "Google", "LinkedIn"],
    acceptance: 39.9,
    likes: 11230,
    dislikes: 1800,
    status: "todo",
    isPremium: true,
    description:
      "A transformation sequence from word `beginWord` to `endWord` using a dictionary `wordList` is a sequence where each adjacent pair differs by a single letter and every intermediate word is in `wordList`. Return the number of words in the shortest transformation sequence, or `0` if none exists.",
    examples: [
      {
        input:
          'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: "5",
        explanation: '"hit" -> "hot" -> "dot" -> "dog" -> "cog".',
      },
    ],
    constraints: [
      "1 <= beginWord.length <= 10",
      "endWord.length == beginWord.length",
      "1 <= wordList.length <= 5000",
    ],
    hints: [
      "Model words as nodes; edges connect words one letter apart.",
      "BFS gives the shortest path length.",
    ],
    starterCode: starter("ladderLength", "beginWord, endWord, wordList"),
  },
];

export const allTags = Array.from(
  new Set(questions.flatMap((q) => q.tags))
).sort();

export const allCategories = Array.from(
  new Set(questions.map((q) => q.category))
).sort();

export function getQuestionBySlug(slug: string): Question | undefined {
  return questions.find((q) => q.slug === slug);
}
