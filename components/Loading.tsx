import { Skeleton } from "./ui/skeleton";

export default function LoadingCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <Skeleton className="aspect-3/2 w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}
