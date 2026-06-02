import { Skeleton } from "@/components/ui/skeleton";
import { ListSkeleton } from "@/components/common/loaders";

export default function QuestionsLoading() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-8 w-56" />
        <Skeleton className="h-4 w-80" />
      </div>
      <Skeleton className="h-28 w-full rounded-xl" />
      <ListSkeleton count={6} />
    </div>
  );
}
