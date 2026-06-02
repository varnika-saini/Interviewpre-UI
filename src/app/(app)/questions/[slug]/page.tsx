import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getQuestionBySlug, questions } from "@/data";
import { QuestionDetail } from "@/features/questions/question-detail";

export function generateStaticParams() {
  return questions.map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const question = getQuestionBySlug(slug);
  return { title: question ? question.title : "Question" };
}

export default async function QuestionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const question = getQuestionBySlug(slug);
  if (!question) notFound();
  return <QuestionDetail question={question} />;
}
