"use client";

import { create } from "zustand";
import { destinations as initialData } from "@/data/destinations";

export type Destination = {
  id: number;
  name: string;
  country: string;
  visited: boolean;
  image: string;
  description?: string;
};

type DestinationsState = {
  destinations: Destination[];
  filterVisited: "all" | "yes" | "no";
  setDestinations: (d: Destination[]) => void;
  setFilterVisited: (v: "all" | "yes" | "no") => void;
  toggleVisited: (id: number) => void;
  visitedCount: () => number;
};

export const useTravelStore = create<DestinationsState>((set, get) => ({
  destinations: initialData,
  filterVisited: "all",
  setDestinations: (d) => set({ destinations: d }),
  setFilterVisited: (v) => set({ filterVisited: v }),
  toggleVisited: (id: number) =>
    set({
      destinations: get().destinations.map((dest) =>
        dest.id === id ? { ...dest, visited: !dest.visited } : dest
      ),
    }),
  visitedCount: () => get().destinations.filter((d) => d.visited).length,
}));
