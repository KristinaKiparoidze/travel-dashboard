"use client";

import { useState } from "react";
import StatsBar from "@/components/StatsBar";
import DestinationList from "@/components/DestinationList";
import FiltersBar from "@/components/FiltersBar";
import { useTravelStore } from "@/stores/useTravelStore";
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "@/components/ThemeToggle";

export default function Page() {
  const { destinations } = useTravelStore();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"name-asc" | "name-desc" | null>(null);
  const [visitedFilter, setVisitedFilter] = useState<"all" | "yes" | "no">(
    "all"
  );

  const sortedDestinations = [...destinations].sort((a, b) => {
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    if (sort === "name-desc") return b.name.localeCompare(a.name);
    return 0;
  });

  const visitedFilteredDestinations = sortedDestinations.filter((d) => {
    if (visitedFilter === "yes") return d.visited;
    if (visitedFilter === "no") return !d.visited;
    return true;
  });

  const finalList = visitedFilteredDestinations.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <h1 className="text-3xl font-bold">Travel Bucket List</h1>
      <p className="text-sm text-gray-600 mt-1">
        Interactive dashboard built with Next.js + Zustand
      </p>
      <StatsBar />
      <div className="bg-white/10 backdrop-blur p-4 rounded-xl shadow mb-6 flex gap-4 flex-wrap items-center">
        <FiltersBar
          onSort={setSort}
          visitedFilter={visitedFilter}
          setVisitedFilter={setVisitedFilter}
        />
        <div className="flex gap-3 flex-wrap mb-6">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>
      <DestinationList list={finalList} />
    </main>
  );
}
