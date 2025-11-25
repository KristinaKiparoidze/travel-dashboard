"use client";

type Props = {
  visitedFilter: "all" | "yes" | "no";
  setVisitedFilter: (v: "all" | "yes" | "no") => void;
  onSort: (v: "name-asc" | "name-desc") => void;
};

export default function FiltersBar({
  visitedFilter,
  setVisitedFilter,
  onSort,
}: Props) {
  return (
    <div className="flex gap-3 flex-wrap mb-6 items-center">
      <button
        onClick={() => onSort("name-asc")}
        className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 transition flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-slate-700 dark:text-white dark:border-slate-600"
        title="Sort by name ascending"
      >
        Name: A → Z
      </button>

      <button
        onClick={() => onSort("name-desc")}
        className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 transition flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-slate-700 dark:text-white dark:border-slate-600"
        title="Sort by name descending"
      >
        Name: Z → A
      </button>
      <div className="inline-flex rounded-lg border border-slate-200 overflow-hidden dark:border-slate-600 min-w-[220px]">
        <button
          onClick={() => setVisitedFilter("all")}
          aria-pressed={visitedFilter === "all"}
          className={
            "px-4 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 " +
            (visitedFilter === "all"
              ? "bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-white"
              : "bg-white text-slate-800 dark:bg-slate-700 dark:text-white")
          }
          title="Show all destinations"
        >
          All
        </button>

        <button
          onClick={() => setVisitedFilter("yes")}
          aria-pressed={visitedFilter === "yes"}
          className={
            "px-4 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 " +
            (visitedFilter === "yes"
              ? "bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-white"
              : "bg-white text-slate-800 dark:bg-slate-700 dark:text-white")
          }
          title="Show visited destinations"
        >
          Visited
        </button>

        <button
          onClick={() => setVisitedFilter("no")}
          aria-pressed={visitedFilter === "no"}
          className={
            "px-4 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 " +
            (visitedFilter === "no"
              ? "bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-white"
              : "bg-white text-slate-800 dark:bg-slate-700 dark:text-white")
          }
          title="Show not visited destinations"
        >
          Not visited
        </button>
      </div>
    </div>
  );
}
