"use client";

import { useTravelStore } from "@/stores/useTravelStore";

export default function StatsBar() {
  const { destinations } = useTravelStore();

  const total = destinations.length;
  const visited = destinations.filter((d) => d.visited).length;
  const percent = total > 0 ? Math.round((visited / total) * 100) : 0;

  return (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow mb-6">
      <h2 className="text-xl font-semibold mb-2">Your Travel Progress</h2>

      <div className="flex items-center justify-between text-sm mb-2">
        <span>Total: {total}</span>
        <span>Visited: {visited}</span>
        <span>{percent}% done</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-slate-700">
        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
