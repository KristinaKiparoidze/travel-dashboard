"use client";

import { create } from "zustand";
import { DESTINATIONS } from "@/data/destinations";
import { fetchUnsplashImage } from "@/lib/unsplash";

export type Destination = {
  id: number;
  name: string;
  country: string;
  visited: boolean;
  image?: string | null;
  description?: string;
};

type DestinationsState = {
  destinations: Destination[];
  setDestinations: (d: Destination[]) => void;
  toggleVisited: (id: number) => void;
  visitedCount: () => number;
  loadDestinationsWithImages: () => Promise<void>;
};

export const useTravelStore = create<DestinationsState>((set, get) => ({
  destinations: [],
  filterVisited: "all",
  setDestinations: (d) => set({ destinations: d }),
  toggleVisited: (id: number) =>
    set((state) => ({
      destinations: state.destinations.map((dest) =>
        dest.id === id ? { ...dest, visited: !dest.visited } : dest
      ),
    })),
  visitedCount: () => get().destinations.filter((d) => d.visited).length,
  loadDestinationsWithImages: async () => {
    const destinationsWithImages = await Promise.all(
      DESTINATIONS.map(async (d) => ({
        ...d,
        visited: false,
        image: await fetchUnsplashImage(d.name),
      }))
    );
    set({ destinations: destinationsWithImages });
  },
}));
