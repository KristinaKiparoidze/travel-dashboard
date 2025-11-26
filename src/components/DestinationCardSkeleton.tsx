"use client";

export default function DestinationCardSkeleton() {
  return (
    <article className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md bg-white dark:bg-slate-800 animate-pulse">
      <div className="h-48 w-full bg-gray-200 dark:bg-slate-700" />
      <div className="p-4 space-y-3">
        <div className="space-y-2">
          <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded w-3/4" />
          <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/2" />
        </div>
        <div className="h-10 bg-gray-200 dark:bg-slate-700 rounded" />
      </div>
    </article>
  );
}
