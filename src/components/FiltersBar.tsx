"use client";

import { SortOrder, VisitFilter } from "@/lib/constants";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  onSort: (order: SortOrder | null) => void;
  visitedFilter: VisitFilter;
  setVisitedFilter: Dispatch<SetStateAction<VisitFilter>>;
};

export default function FiltersBar({
  onSort,
  visitedFilter,
  setVisitedFilter,
}: Props) {
  return (
    <div className="flex gap-3 items-center">
      <div className="flex items-center gap-2">
        <label
          htmlFor="sort-select"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Sort by:
        </label>
        <select
          id="sort-select"
          className="px-4 py-2.5 pr-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 dark:text-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat"
          onChange={(e) => onSort(e.target.value as SortOrder | null)}
        >
          <option value="">Default</option>
          <option value={SortOrder.NAME_ASC}>Name (A → Z)</option>
          <option value={SortOrder.NAME_DESC}>Name (Z → A)</option>
        </select>
      </div>

      <div className="h-6 w-px bg-gray-300 dark:bg-gray-600" />

      <div className="flex items-center gap-2">
        <label
          htmlFor="filter-select"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Show:
        </label>
        <select
          id="filter-select"
          className="px-4 py-2.5 pr-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 dark:text-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat"
          value={visitedFilter}
          onChange={(e) => setVisitedFilter(e.target.value as VisitFilter)}
        >
          <option value={VisitFilter.ALL}>All destinations</option>
          <option value={VisitFilter.VISITED}>Visited</option>
          <option value={VisitFilter.NOT_VISITED}>Not visited</option>
        </select>
      </div>
    </div>
  );
}
