"use client";

import { useEffect, useRef, useState } from "react";
import { GlobeEngine } from "@/features/globe/engine";
import { loadLand } from "@/features/globe/land";
import { Radio } from "@/features/globe/radio";
import { formatCoords } from "@/lib/geo";

type Props = { initial: { lat: number; lon: number } };

const noop = () => {};

/**
 * A small globe inside the share form: drag it until the place sits under the pin. Its centre goes into the
 * hidden `lat` and `lon` fields, written straight to the DOM so dragging never re-renders React.
 * The server still blurs the spot to about 5 km.
 */
export function PinPicker({ initial }: Props) {
  const baseRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<HTMLCanvasElement>(null);
  const latRef = useRef<HTMLInputElement>(null);
  const lonRef = useRef<HTMLInputElement>(null);
  const coordsRef = useRef<HTMLElement>(null);
  const engineRef = useRef<GlobeEngine | null>(null);
  const [locating, setLocating] = useState<"idle" | "busy" | string>("idle");
  const { lat, lon } = initial;

  // Only on request, and the server still blurs the spot to about 5 km.
  const useMyLocation = () => {
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

  useEffect(() => {
    let cancelled = false;
    loadLand()
      .then((land) => {
        if (cancelled || !baseRef.current || !dotsRef.current) return;
        const engine: GlobeEngine = new GlobeEngine({
          base: baseRef.current,
          dots: dotsRef.current,
          land,
          view: { lat, lon, zoom: 6 },
          radio: new Radio(), // never switched on, so the picker stays silent
          layout: (w, h) => ({ cx: w / 2, cy: h / 2 }),
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
        engineRef.current = engine;
      })
      .catch((err: unknown) => console.error("Could not load the map", err));
    return () => {
      cancelled = true;
      engineRef.current?.destroy();
      engineRef.current = null;
    };
  }, [lat, lon]);

  return (
    <div className="picker-field">
      <span className="label" id="pickerLabel">
        Where it happened
      </span>
      {/* Swipes here move the map, not the sheet. */}
      <div className="picker" data-base-ui-swipe-ignore="">
        <canvas className="picker-base" ref={baseRef} aria-hidden="true" />
        <canvas
          className="picker-dots"
          ref={dotsRef}
          tabIndex={0}
          aria-labelledby="pickerLabel"
          aria-describedby="pickerHint"
        />
        <span className="picker-pin" aria-hidden="true" />
        <div className="picker-zoom">
          <button type="button" aria-label="Zoom in" onClick={() => engineRef.current?.zoomBy(1.6)}>
            +
          </button>
          <button type="button" aria-label="Zoom out" onClick={() => engineRef.current?.zoomBy(1 / 1.6)}>
            −
          </button>
        </div>
      </div>
      <input type="hidden" name="lat" ref={latRef} defaultValue={lat} />
      <input type="hidden" name="lon" ref={lonRef} defaultValue={lon} />
      <div className="picker-tools">
        <button type="button" className="btn" onClick={useMyLocation} disabled={locating === "busy"}>
          {locating === "busy" ? "Finding you…" : "Use my location"}
        </button>
        {locating !== "idle" && locating !== "busy" && (
          <span className="error" role="alert">
            {locating}
          </span>
        )}
      </div>
      <p className="pin" id="pickerHint">
        Drag the map, or use the arrow keys, until the place is under the pin:{" "}
        <b ref={coordsRef} aria-hidden="true">
          {formatCoords(lat, lon)}
        </b>
        . Only a ~5 km area is shown on the site.
      </p>
    </div>
  );
}
