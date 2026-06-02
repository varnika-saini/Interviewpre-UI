import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getQuizBySlug, quizzes } from "@/data";
import { QuizAttempt } from "@/features/quizzes/quiz-attempt";

export function generateStaticParams() {
  return quizzes.map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);
  return { title: quiz ? quiz.title : "Quiz" };
}

export default async function QuizAttemptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);
  if (!quiz) notFound();
  return <QuizAttempt quiz={quiz} />;
}
