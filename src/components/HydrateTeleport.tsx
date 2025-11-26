"use client";

import { useEffect, useState } from "react";
import { useTravelStore } from "@/stores/useTravelStore";
import StatsBar from "@/components/StatsBar";
import FiltersBar from "@/components/FiltersBar";
import DestinationList from "@/components/DestinationList";
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "@/components/ThemeToggle";
import { SortOrder, VisitFilter } from "@/lib/constants";

export default function HydrateTeleport({ initial }: { initial: any[] }) {
  const { destinations, setDestinations, toggleVisited } = useTravelStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (Array.isArray(initial)) {
      setDestinations(initial);
      // Artificial delay to showcase loading skeleton UX (remove in production)
      setTimeout(() => setIsLoading(false), 1000);
    } else {
      console.error("Initial data is not an array:", initial);
      setDestinations([]);
      setIsLoading(false);
    }
  }, [initial, setDestinations]);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOrder | null>(null);
  const [visitedFilter, setVisitedFilter] = useState<VisitFilter>(
    VisitFilter.ALL
  );

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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Travel Bucket List
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">
                Track your dream destinations • Powered by Unsplash & Zustand
              </p>
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
    </main>
  );
}
