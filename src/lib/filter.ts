import { VisitFilter } from "./constants";

export function filterVisited<T extends { visited: boolean }>(
  list: T[] = [],
  filter: VisitFilter
): T[] {
  switch (filter) {
    case VisitFilter.VISITED:
      return list.filter((d) => d.visited);
    case VisitFilter.NOT_VISITED:
      return list.filter((d) => !d.visited);
    default:
      return list;
  }
}
