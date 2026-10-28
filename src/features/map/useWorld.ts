import { useState, type RefObject } from "react";
import type { GlobeEngine, View } from "@/features/globe/engine";
import { loadLand } from "@/features/globe/land";
import { worldOf, type World } from "@/lib/bodies";
import { itemKey, type CaseSummary, type MapItem } from "@/lib/types";
import { VIEWS } from "./useGlobe";

/** Where each globe opens without a case in mind: Earth's default, and on the Moon, the glowing crater Aristarchus. */
const OPENING: Record<World, View> = { earth: VIEWS.famous, moon: { lon: -47.4, lat: 23.7, zoom: 1.15 } };
/** How close to come in when crossing to the other globe to show a case. */
const CASE_ZOOM = 2.4;

/**
 * Which globe the map shows, Earth or the Moon, its famous cases, and going between them. The new globe's
 * outlines load first (the Moon's only on the first visit), then the engine switches over in one step.
 */
export function useWorld(engine: RefObject<GlobeEngine | null>, cases: CaseSummary[]) {
  const [world, setWorld] = useState<World>("earth");
  // Split once: the arrays stay the same between renders, so effects that depend on them don't rerun.
  const [byWorld] = useState(() => ({
    earth: cases.filter((c) => worldOf(c.body) === "earth"),
    moon: cases.filter((c) => worldOf(c.body) === "moon"),
  }));

  const go = (next: World, view: View = OPENING[next]): Promise<void> => {
    if (next === world) {
      engine.current?.flyTo(view.lon, view.lat, view.zoom, 1300);
      return Promise.resolve();
    }
    const files = next === "moon" ? [loadLand("moon")] : [loadLand("low"), loadLand("high")];
    return Promise.all(files)
      .then(([land, detail]) => {
        const e = engine.current;
        if (!e || !land) return;
        // Clear the old globe's markers first; the map's effect sets the new ones once `world` changes.
        e.setItems([], true);
        e.setWorld(next, land, detail ?? null, view);
        setWorld(next);
      })
      .catch((err: unknown) => console.error("Could not load the globe", err));
  };

  /** Fly to an item, crossing to its globe first if it's on the other one. */
  const show = (item: MapItem, zoom?: number) => {
    const key = itemKey(item);
    const target = item.kind === "case" ? worldOf(item.body) : "earth";
    if (target === world) {
      engine.current?.pin(key);
      engine.current?.flyTo(item.lon, item.lat, zoom);
      return;
    }
    void go(target, { lon: item.lon, lat: item.lat, zoom: zoom ?? CASE_ZOOM }).then(() => engine.current?.pin(key));
  };

  return {
    world,
    /** Famous cases on the globe being shown. */
    cases: byWorld[world],
    go,
    show,
    toggle: () => void go(world === "earth" ? "moon" : "earth"),
  };
}
