import type { RefObject } from "react";
import type { GlobeEngine, View } from "@/features/globe/engine";
import { loadDraft, RESUME_QUERY } from "@/features/stories/draft";
import type { Category } from "@/lib/categories";
import { itemKey, type MapItem, type Mode } from "@/lib/types";
import type { SheetState } from "./state";
import { allCategories, VIEWS } from "./useGlobe";

type Args = {
  engine: RefObject<GlobeEngine | null>;
  mode: Mode;
  active: Set<Category>;
  tunedKey: string | null;
  itemsFor: (m: Mode) => MapItem[];
  setMode: (m: Mode) => void;
  setActive: (s: Set<Category> | ((prev: Set<Category>) => Set<Category>)) => void;
  setSheet: (s: SheetState | null) => void;
};

/** What the header, list and share flow do to the globe: switch modes, fly somewhere, open the share form. */
export function useMapActions({ engine, mode, active, tunedKey, itemsFor, setMode, setActive, setSheet }: Args) {
  const switchMode = (m: Mode, target?: View) => {
    setMode(m);
    setActive(allCategories());
    const e = engine.current;
    if (!e) return;
    e.clearTune();
    const v = target ?? VIEWS[m];
    e.flyTo(v.lon, v.lat, v.zoom, 1300);
  };

  const random = () => {
    const pool = itemsFor(mode).filter((i) => active.has(i.category) && itemKey(i) !== tunedKey);
    const pick = pool[Math.floor(Math.random() * pool.length)];
    if (!pick) return;
    const zoom = mode === "famous" ? 2.2 + Math.random() : 3.6 + Math.random() * 1.5;
    engine.current?.pin(itemKey(pick));
    engine.current?.flyTo(pick.lon, pick.lat, zoom);
  };

  const pickFromList = (item: MapItem) => {
    setSheet(null);
    setActive((prev) => new Set(prev).add(item.category));
    engine.current?.pin(itemKey(item));
    engine.current?.flyTo(item.lon, item.lat, item.kind === "case" ? 2.4 : 4);
  };

  const openShare = () => {
    const center = engine.current?.center() ?? { lat: VIEWS.people.lat, lon: VIEWS.people.lon };
    setSheet({ type: "share", center });
  };

  /** Back from signing in to share: reopen the form with what was written, where it was pinned. */
  const resumeShare = () => {
    if (!window.location.search.includes(RESUME_QUERY)) return;
    window.history.replaceState(null, "", "/");
    const draft = loadDraft();
    if (!draft) return;
    switchMode("people", { lon: draft.lon, lat: draft.lat, zoom: 3.6 });
    setSheet({ type: "share", center: { lat: draft.lat, lon: draft.lon }, draft });
  };

  return { switchMode, random, pickFromList, openShare, resumeShare };
}
