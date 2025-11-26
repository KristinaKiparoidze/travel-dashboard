"use client";

import DestinationCard from "@/components/DestinationCard";
import DestinationCardSkeleton from "@/components/DestinationCardSkeleton";
import type { Destination } from "@/stores/useTravelStore";

type Props = {
  list: Destination[];
  onToggle: (id: number) => void;
  isLoading?: boolean;
};

export default function DestinationList({
  list,
  onToggle,
  isLoading = false,
}: Props) {
  if (isLoading) {
    return (
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <DestinationCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (list.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        No destinations found.
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {list.map((dest) => (
        <DestinationCard key={dest.id} destination={dest} onToggle={onToggle} />
      ))}
    </div>
  );
}
