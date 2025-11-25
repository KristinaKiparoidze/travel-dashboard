"use client";

import { Destination, useTravelStore } from "@/stores/useTravelStore";
import DestinationCard from "./DestinationCard";

export default function DestinationList({ list }: { list: Destination[] }) {
  const { toggleVisited } = useTravelStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {list.map((d) => (
        <DestinationCard
          key={d.id}
          dest={d}
          onToggle={() => toggleVisited(d.id)}
        />
      ))}
    </div>
  );
}
