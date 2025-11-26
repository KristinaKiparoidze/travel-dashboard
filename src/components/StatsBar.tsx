"use client";

import { useTravelStore } from "@/stores/useTravelStore";

export default function StatsBar() {
  const { destinations } = useTravelStore();

  const total = destinations.length;
  const visited = destinations.filter((d) => d.visited).length;
  const percent = total > 0 ? Math.round((visited / total) * 100) : 0;

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
        Your Travel Progress
      </h2>

      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-3">
        <span className="font-medium">
          <span className="text-gray-900 dark:text-white">{visited}</span> of{" "}
          {total} visited
        </span>
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {percent}%
        </span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-600 to-blue-500 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${visited} of ${total} destinations visited`}
        />
      </div>
    </div>
  );
}
