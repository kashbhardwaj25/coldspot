import { CATEGORIES } from "@/lib/categories";
import { caseStatusLabel } from "@/lib/format";
import { itemName, type MapItem } from "@/lib/types";

/** Lower case, without accents, so "varginha" finds "Varginha" and "bendego" finds "Bendegó". */
const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

function haystack(i: MapItem) {
  const common = [itemName(i), i.region, CATEGORIES[i.category].label];
  const extra = i.kind === "case" ? [i.dateLabel, caseStatusLabel(i)] : [String(i.year ?? ""), i.hook];
  return fold([...common, ...extra].join(" "));
}

/** Items matching every word of the query, in their original order. An empty query matches everything. */
export function searchItems(items: MapItem[], query: string): MapItem[] {
  const words = fold(query).split(/\s+/).filter(Boolean);
  if (!words.length) return items;
  return items.filter((i) => {
    const text = haystack(i);
    return words.every((w) => text.includes(w));
  });
}
