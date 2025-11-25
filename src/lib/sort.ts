import { SortOrder } from "@/lib/constants";
import type { Destination } from "@/stores/useTravelStore";

export function sortDestinations(
  list: Destination[],
  sort: SortOrder
): Destination[] {
  const sorted = [...list];

  return sorted.sort((a, b) => {
    const direction = sort === SortOrder.ASC ? 1 : -1;
    return direction * a.name.localeCompare(b.name);
  });
}
