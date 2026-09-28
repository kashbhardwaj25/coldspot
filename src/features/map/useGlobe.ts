import { useEffect, useRef } from "react";
import type { GeoPermissibleObjects } from "d3-geo";
import { feature } from "topojson-client";
import { CATEGORY_KEYS, type Category } from "@/lib/categories";
import { itemKey, itemName, type CaseItem, type MapItem, type Mode, type StoryItem } from "@/lib/types";
import { GlobeEngine, type EngineItem, type View } from "@/features/globe/engine";
import type { Radio } from "@/features/globe/radio";

export const VIEWS: Record<Mode, View> = {
  famous: { lon: 69.85, lat: 23.72, zoom: 1.15 },
  people: { lon: 77.36, lat: 23.25, zoom: 3.4 },
};

export const allCategories = () => new Set<Category>(CATEGORY_KEYS);

/** Map items in the active categories, as markers for the globe. */
export function toMarkers(items: MapItem[], active: Set<Category>): EngineItem[] {
  return items
    .filter((i) => active.has(i.category))
    .map((i) => ({
      key: itemKey(i),
      category: i.category,
      lat: i.lat,
      lon: i.lon,
      label: itemName(i),
      narrated: i.kind === "story" && i.narrated,
    }));
}

/** Height kept free for the tuner card below the ring. */
const cardReserve = (w: number) => (w < 760 ? 250 : 230);

type Callbacks = {
  /** The globe is ready, opening in `mode` (a deep link to a story opens people's stories). */
  onReady: (engine: GlobeEngine, mode: Mode) => void;
  onTune: (key: string | null) => void;
  onNearest: (key: string | null) => void;
  onCoords: (text: string) => void;
  onInteract: () => void;
  onOpenTuned: (key: string) => void;
};

/** Deep links: /?case=roswell or /?story=upper-lake-12 */
function deepLinkTarget(cases: CaseItem[], stories: StoryItem[]): MapItem | undefined {
  const q = new URLSearchParams(window.location.search);
  const c = q.get("case");
  if (c) return cases.find((i) => i.slug === c);
  const s = q.get("story");
  return s ? stories.find((i) => i.slug === s) : undefined;
}

/**
 * Creates the globe once the coastline data has loaded and places the ring, hint and zoom buttons.
 * Returns the engine and the refs to attach to the canvases and overlays.
 * Callbacks are read through a ref, so they can change between renders without recreating the globe.
 */
export function useGlobe(radio: Radio, data: { cases: CaseItem[]; stories: StoryItem[] }, callbacks: Callbacks) {
  const engineRef = useRef<GlobeEngine | null>(null);
  const baseRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<HTMLCanvasElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLElement>(null);
  const cb = useRef(callbacks);
  useEffect(() => {
    cb.current = callbacks;
  });

  useEffect(() => {
    let cancelled = false;
    let engine: GlobeEngine | null = null;
    let tuned: string | null = null;

    fetch("/land-50m.json")
      .then((r) => r.json())
      .then((topo) => {
        if (cancelled || !baseRef.current || !dotsRef.current) return;
        const land = feature(topo, topo.objects.land) as unknown as GeoPermissibleObjects;
        const target = deepLinkTarget(data.cases, data.stories);
        const mode: Mode = target?.kind === "story" ? "people" : "famous";
        const view = target ? { lon: target.lon, lat: target.lat, zoom: mode === "famous" ? 2.4 : 3.6 } : VIEWS[mode];

        engine = new GlobeEngine({
          base: baseRef.current,
          dots: dotsRef.current,
          land,
          view,
          radio,
          layout: (w, h) => {
            const topH = topRef.current?.getBoundingClientRect().height ?? 120;
            const cy = Math.round(topH + (h - topH - cardReserve(w) - 16) / 2);
            const cx = w / 2;
            if (ringRef.current) Object.assign(ringRef.current.style, { left: `${cx}px`, top: `${cy}px` });
            if (hintRef.current) hintRef.current.style.top = `${cy + 44}px`;
            if (zoomRef.current) zoomRef.current.style.top = `${cy - 40}px`;
            return { cx, cy };
          },
          onTune: (key) => {
            tuned = key;
            cb.current.onTune(key);
          },
          onNearest: (key) => cb.current.onNearest(key),
          onCoords: (text) => cb.current.onCoords(text),
          onInteract: () => cb.current.onInteract(),
          onOpenTuned: () => tuned && cb.current.onOpenTuned(tuned),
        });
        engineRef.current = engine;
        cb.current.onReady(engine, mode);
      })
      .catch((err: unknown) => console.error("Could not load the map", err));

    return () => {
      cancelled = true;
      engine?.destroy();
      engineRef.current = null;
    };
    // Created once; later changes flow through the engine's methods. Elements and radio are stable.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { engine: engineRef, baseRef, dotsRef, ringRef, hintRef, zoomRef, topRef };
}
