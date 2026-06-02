import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function StatCardSkeleton() {
  return (
    <Card className="gap-0 p-5">
      <div className="flex items-center justify-between">
        <Skeleton className="size-10 rounded-xl" />
        <Skeleton className="h-5 w-12 rounded-full" />
      </div>
      <Skeleton className="mt-4 h-7 w-24" />
      <Skeleton className="mt-2 h-4 w-32" />
    </Card>
  );
}

export function CardSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <Card size="sm" className="p-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-5 w-14 rounded-full" />
      </div>
      <div className="mt-3 space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton key={i} className="h-3.5 w-full" style={{ width: `${100 - i * 12}%` }} />
        ))}
      </div>
    </Card>
  );
}

export function ListSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} lines={2} />
      ))}
    </div>
  );
}

export function ChartSkeleton({ height = 260 }: { height?: number }) {
  return <Skeleton className="w-full rounded-xl" style={{ height }} />;
}
