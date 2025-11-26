"use client";

import Image from "next/image";
import type { Destination } from "@/stores/useTravelStore";

type Props = {
  destination: Destination;
  onToggle: (id: number) => void;
};

export default function DestinationCard({ destination, onToggle }: Props) {
  return (
    <article className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-200">
      <div className="h-48 w-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 relative">
        {destination.image ? (
          <Image
            src={destination.image}
            alt={destination.name}
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <h2 className="text-4xl font-bold text-slate-700 dark:text-slate-200 text-center px-4">
              {destination.name}
            </h2>
          </div>
        )}
      </div>
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-xl text-gray-900 dark:text-white">
            {destination.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {destination.country}
          </p>
        </div>
        <button
          className={`w-full px-4 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            destination.visited
              ? "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 dark:bg-green-700 dark:hover:bg-green-800"
              : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800"
          }`}
          onClick={() => onToggle(destination.id)}
          aria-pressed={destination.visited}
          aria-label={`Toggle visited status for ${destination.name}`}
        >
          {destination.visited ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Visited
            </span>
          ) : (
            <span>Mark as visited</span>
          )}
        </button>
      </div>
    </article>
  );
}
