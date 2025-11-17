"use client";

import Image from "next/image";
import { Destination } from "@/stores/useTravelStore";

export default function DestinationCard({
  dest,
  onToggle,
}: {
  dest: Destination;
  onToggle: () => void;
}) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-md bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
      <div className="relative w-full h-48">
        <Image
          src={dest.image}
          alt={dest.name}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-xl">{dest.name}</h3>
        <p className="text-sm text-gray-600">{dest.country}</p>

        <button
          onClick={onToggle}
          className={`mt-3 px-3 py-1 rounded text-sm ${
            dest.visited
              ? "bg-green-200 text-green-800"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {dest.visited ? "Visited ✅" : "Mark as visited"}
        </button>
      </div>
    </div>
  );
}
