import StatsBar from "@/components/StatsBar";
import FiltersBar from "@/components/FiltersBar";
import DestinationList from "@/components/DestinationList";

export default function Page() {
  return (
    <main className="min-h-screen py-8">
      <h1 className="text-3xl font-bold">Travel Bucket List</h1>
      <p className="text-sm text-gray-600 mt-1">
        Interactive dashboard built with Next.js + Zustand
      </p>
      <StatsBar />
      <FiltersBar />

      <DestinationList />
    </main>
  );
}
