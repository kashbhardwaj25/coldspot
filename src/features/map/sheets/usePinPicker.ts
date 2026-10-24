import { useEffect, useRef, useState } from "react";
import { GlobeEngine, type EngineItem } from "@/features/globe/engine";
import { loadLand } from "@/features/globe/land";
import { Radio } from "@/features/globe/radio";

type Point = { lat: number; lon: number };
type Args = { initial: Point; landmarks: EngineItem[]; target: Point | null };

const noop = () => {};

/**
 * Runs the pin picker's small globe: creates it on the canvases, shows the landmarks, flies to a picked town or
 * the reader's location, and writes the centre into the hidden lat/lon fields straight to the DOM, so dragging
 * never re-renders React. Returns the refs to attach and the actions for the buttons.
 */
export function usePinPicker({ initial, landmarks, target }: Args) {
  const baseRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<HTMLCanvasElement>(null);
  const latRef = useRef<HTMLInputElement>(null);
  const lonRef = useRef<HTMLInputElement>(null);
  const coordsRef = useRef<HTMLElement>(null);
  const engineRef = useRef<GlobeEngine | null>(null);
  const landmarksRef = useRef(landmarks);
  const [locating, setLocating] = useState<"idle" | "busy" | string>("idle");
  const { lat, lon } = initial;

  useEffect(() => {
    let cancelled = false;
    loadLand("low")
      .then((land) => {
        if (cancelled || !baseRef.current || !dotsRef.current) return;
        const engine: GlobeEngine = new GlobeEngine({
          base: baseRef.current,
          dots: dotsRef.current,
          land,
          view: { lat, lon, zoom: 6 },
          radio: new Radio(), // never switched on, so the picker stays silent
          layout: (w, h) => ({ cx: w / 2, cy: h / 2 }),
          snap: false, // the pin stays exactly where the writer puts it, never pulled to a landmark
          onCoords: (text) => {
            const c = engine.center();
            if (latRef.current) latRef.current.value = c.lat.toFixed(4);
            if (lonRef.current) lonRef.current.value = c.lon.toFixed(4);
            if (coordsRef.current) coordsRef.current.textContent = text;
          },
          onTune: noop,
          onNearest: noop,
          onInteract: noop,
          onOpenTuned: noop,
        });
        engine.setItems(landmarksRef.current, true);
        engineRef.current = engine;
        return loadLand("high").then((detail) => engine.setDetail(detail));
      })
      .catch((err: unknown) => console.error("Could not load the map", err));
    return () => {
      cancelled = true;
      engineRef.current?.destroy();
      engineRef.current = null;
    };
  }, [lat, lon]);

  useEffect(() => {
    landmarksRef.current = landmarks;
    engineRef.current?.setItems(landmarks, true);
  }, [landmarks]);

  useEffect(() => {
    if (target) engineRef.current?.flyTo(target.lon, target.lat, 10, 900);
  }, [target]);

  // Only on request, and the server still blurs the spot to about 5 km.
  const locate = () => {
    if (!("geolocation" in navigator)) return setLocating("This browser can't share your location.");
    setLocating("busy");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        engineRef.current?.flyTo(pos.coords.longitude, pos.coords.latitude, 10, 900);
        setLocating("idle");
      },
      () => setLocating("Couldn't get your location. Drag the map instead."),
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 },
    );
  };

  return {
    baseRef,
    dotsRef,
    latRef,
    lonRef,
    coordsRef,
    /** "idle", "busy", or an error message to show. */
    locating,
    locate,
    zoomIn: () => engineRef.current?.zoomBy(1.6),
    zoomOut: () => engineRef.current?.zoomBy(1 / 1.6),
  };
}
