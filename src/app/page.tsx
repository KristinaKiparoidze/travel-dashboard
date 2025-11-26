"use client";

import { useEffect, useState } from "react";
import { useTravelStore } from "@/stores/useTravelStore";
import HydrateTeleport from "@/components/HydrateTeleport";

export default function Page() {
  const { destinations, loadDestinationsWithImages } = useTravelStore();
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    // Wait for persist middleware to rehydrate from localStorage
    const timer = setTimeout(() => {
      // Only load initial data if localStorage is empty (first visit)
      if (destinations.length === 0) {
        loadDestinationsWithImages();
      }
      setHasInitialized(true);
    }, 0);

    return () => clearTimeout(timer);
  }, [loadDestinationsWithImages, destinations.length]);

  // Wait for hydration before rendering to prevent data conflicts
  if (!hasInitialized) {
    return null;
  }

  return <HydrateTeleport initial={destinations} />;
}
