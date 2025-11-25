import { VisitFilter } from "./constants";

export function filterVisited<T extends { visited: boolean }>(
  list: T[] = [],
  filter: VisitFilter
): T[] {
  switch (filter) {
    case VisitFilter.YES:
      return list.filter((d) => d.visited);
    case VisitFilter.NO:
      return list.filter((d) => !d.visited);
    default:
      return list;
  }
}
