import { useEffect, useRef, useState } from "react";
import { GlobeEngine, type EngineItem } from "@/features/globe/engine";
import { loadLand } from "@/features/globe/land";
import { Radio } from "@/features/globe/radio";
import type { World } from "@/lib/bodies";

type Args = { lat: number; lon: number; markers: EngineItem[]; world: World };

/** How close the preview ends up (the whole Moon shows, so it reads as the Moon), and where it starts gliding in from. */
const ZOOM = { earth: 3.4, moon: 1.25 };
const START = { dLat: -14, dLon: 38, zoom: 1.6 };

const noop = () => {};

/**
 * Runs the small globe on a case page: it starts a little way off, then glides in until the case sits in the ring,
 * with the cases around it as markers. It takes no input; the whole preview is a link to the map.
 * Returns the canvas refs and whether the case has tuned in, to light the ring.
 */
export function useCaseGlobe({ lat, lon, markers, world }: Args) {
  const baseRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<HTMLCanvasElement>(null);
  const markersRef = useRef(markers);
  const [tuned, setTuned] = useState(false);

  useEffect(() => {
    let engine: GlobeEngine | null = null;
    let cancelled = false;
    const start = { lat: lat + START.dLat, lon: lon + START.dLon, zoom: START.zoom };
    loadLand(world === "moon" ? "moon" : "low")
      .then((land) => {
        if (cancelled || !baseRef.current || !dotsRef.current) return;
        engine = new GlobeEngine({
          base: baseRef.current,
          dots: dotsRef.current,
          land,
          view: start,
          radio: new Radio(), // never switched on, so the page stays silent
          layout: (w, h) => ({ cx: w / 2, cy: h / 2 }),
          snap: false,
          onTune: (key) => setTuned(key !== null),
          onNearest: noop,
          onCoords: noop,
          onInteract: noop,
          onOpenTuned: noop,
        });
        if (world === "moon") engine.setWorld("moon", land, null, start);
        engine.setItems(markersRef.current, true);
        engine.pin(markersRef.current[0]?.key ?? null);
        engine.flyTo(lon, lat, ZOOM[world], 2400);
        // The Moon has one set of outlines; Earth's detailed coastlines follow.
        return world === "earth" ? loadLand("high").then((detail) => engine?.setDetail(detail)) : undefined;
      })
      .catch((err: unknown) => console.error("Could not load the globe", err));
    return () => {
      cancelled = true;
      engine?.destroy();
    };
  }, [lat, lon, world]);

  return { baseRef, dotsRef, tuned };
}
