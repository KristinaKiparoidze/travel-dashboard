"use client";

import { useEffect } from "react";
import { useTravelStore } from "@/stores/useTravelStore";
import HydrateTeleport from "@/components/HydrateTeleport";

export default function Page() {
  const { destinations, loadDestinationsWithImages } = useTravelStore();

  useEffect(() => {
    loadDestinationsWithImages();
  }, [loadDestinationsWithImages]);

  return <HydrateTeleport initial={destinations} />;
}
