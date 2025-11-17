"use client";

import { useTravelStore } from "@/stores/useTravelStore";
import DestinationCard from "./DestinationCard";

export default function DestinationList() {
  const { destinations, filterVisited, toggleVisited } = useTravelStore();

  const visibleDestinations = destinations.filter((d) => {
    if (filterVisited === "yes") return d.visited;
    if (filterVisited === "no") return !d.visited;
    return true;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {visibleDestinations.map((d) => (
        <DestinationCard
          key={d.id}
          dest={d}
          onToggle={() => toggleVisited(d.id)}
        />
      ))}
    </div>
  );
}
