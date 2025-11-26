import { SortOrder } from "@/lib/constants";
import type { Destination } from "@/stores/useTravelStore";

export function sortDestinations(
  list: Destination[],
  sort: SortOrder | null
): Destination[] {
  if (!sort) return list;

  const sorted = [...list];

  return sorted.sort((a, b) => {
    if (sort === SortOrder.NAME_ASC) return a.name.localeCompare(b.name);
    if (sort === SortOrder.NAME_DESC) return b.name.localeCompare(a.name);
    return 0;
  });
}
