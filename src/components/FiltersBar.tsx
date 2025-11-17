"use client";

import { useTravelStore } from "@/stores/useTravelStore";

export default function FiltersBar() {
  const { destinations, setDestinations, filterVisited, setFilterVisited } =
    useTravelStore();

  const sortAZ = () => {
    setDestinations(
      [...destinations].sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  const sortZA = () => {
    setDestinations(
      [...destinations].sort((a, b) => b.name.localeCompare(a.name))
    );
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow mb-6 flex gap-4 flex-wrap items-center">
      <button
        onClick={sortAZ}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
      >
        Sort A → Z
      </button>

      <button
        onClick={sortZA}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
      >
        Sort Z → A
      </button>

      <select
        className="px-3 py-1 border rounded"
        value={filterVisited}
        onChange={(e) => setFilterVisited(e.target.value as any)}
      >
        <option value="all">All</option>
        <option value="yes">Visited</option>
        <option value="no">Not visited</option>
      </select>
    </div>
  );
}
