"use client";

import { useEffect, useState } from "react";
import { useTravelStore } from "@/stores/useTravelStore";
import StatsBar from "@/components/StatsBar";
import FiltersBar from "@/components/FiltersBar";
import DestinationList from "@/components/DestinationList";
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "@/components/ThemeToggle";
import AddDestinationModal from "@/components/AddDestinationModal";
import { SortOrder, VisitFilter } from "@/lib/constants";

export default function HydrateTeleport({ initial }: { initial: any[] }) {
  const { destinations, toggleVisited, addDestination } = useTravelStore();
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOrder | null>(null);
  const [visitedFilter, setVisitedFilter] = useState<VisitFilter>(
    VisitFilter.ALL
  );

  useEffect(() => {
    // Artificial delay for loading skeleton demonstration
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const sorted = Array.isArray(destinations)
    ? [...destinations].sort((a, b) => {
        if (sort === SortOrder.NAME_ASC) return a.name.localeCompare(b.name);
        if (sort === SortOrder.NAME_DESC) return b.name.localeCompare(a.name);
        return 0;
      })
    : [];

  const filteredVisited = sorted.filter((d) => {
    if (visitedFilter === VisitFilter.VISITED) return d.visited;
    if (visitedFilter === VisitFilter.NOT_VISITED) return !d.visited;
    return true;
  });

  const finalList = filteredVisited.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-8 lg:py-10">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Travel Bucket List
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Track your dream destinations • Powered by Unsplash &
                    Zustand
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium whitespace-nowrap"
                  aria-label="Add new destination"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="hidden sm:inline">Add Destination</span>
                  <span className="sm:hidden">Add</span>
                </button>
              </div>
            </div>
            <ThemeToggle />
          </div>

          <StatsBar />

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <FiltersBar
                onSort={setSort}
                visitedFilter={visitedFilter}
                setVisitedFilter={setVisitedFilter}
              />
              <SearchBar search={search} setSearch={setSearch} />
            </div>
          </div>

          <DestinationList
            list={finalList}
            onToggle={toggleVisited}
            isLoading={isLoading}
          />
        </div>
      </div>

      <AddDestinationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addDestination}
      />
    </main>
  );
}
