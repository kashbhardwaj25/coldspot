"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Category } from "@/lib/categories";
import { catColor } from "@/lib/format";
import { signal } from "@/lib/signal";
import { itemKey, type MapItem, type Mode } from "@/lib/types";
import { MapHeader } from "./MapHeader";
import { MapStage } from "./MapStage";
import { ZoomControls } from "./parts";
import type { MapData, SheetState } from "./state";
import { TunerCard } from "./TunerCard";
import { useEchoes } from "./useEchoes";
import { allCategories, toMarkers, useGlobe } from "./useGlobe";
import { useMapActions } from "./useMapActions";
import { useSound } from "./useSound";

// Sheets (Base UI Drawer, forms) load after the page, off the critical path: nobody needs one before the globe.
const Sheet = dynamic(() => import("./sheets/Sheet").then((m) => m.Sheet), { ssr: false });

type Props = { data: MapData };

export default function ColdspotApp({ data }: Props) {
  const { cases, stories } = data;
  const [mode, setMode] = useState<Mode>("famous");
  const [active, setActive] = useState<Set<Category>>(allCategories);
  const [tunedKey, setTunedKey] = useState<string | null>(null);
  const [nearestKey, setNearestKey] = useState<string | null>(null);
  const [sheet, setSheet] = useState<SheetState | null>(null);
  const [placeFilter, setPlaceFilter] = useState<string | null>(null);
  const [hintHidden, setHintHidden] = useState(false);
  const [coords] = useState(() => signal(""));
  const [echoState, setEchoState] = useEchoes(stories);
  const { radio, soundOn, toggleSound } = useSound();

  const byKey = useMemo(
    () => new Map<string, MapItem>([...cases, ...stories].map((i) => [itemKey(i), i])),
    [cases, stories],
  );
  const itemsFor = useCallback((m: Mode): MapItem[] => (m === "famous" ? cases : stories), [cases, stories]);
  const tuned = tunedKey ? (byKey.get(tunedKey) ?? null) : null;
  const nearest = nearestKey ? (byKey.get(nearestKey) ?? null) : null;

  const { engine, baseRef, dotsRef, ringRef, hintRef, zoomRef, topRef } = useGlobe(
    radio,
    { cases, stories },
    {
      onReady: (e, m) => {
        e.setItems(toMarkers(itemsFor(m), allCategories()), m === "famous");
        setMode(m);
        resumeShare();
        openPlaceFromUrl();
      },
      onTune: setTunedKey,
      onNearest: setNearestKey,
      onCoords: coords.set,
      onInteract: () => setHintHidden(true),
      onOpenTuned: (key) => {
        const item = byKey.get(key);
        if (item) setSheet({ type: "item", item });
      },
    },
  );

  // Keep the globe's dots in sync with mode and filters.
  useEffect(() => {
    engine.current?.setItems(toMarkers(itemsFor(mode), active), mode === "famous");
  }, [engine, mode, active, itemsFor]);

  // The header height changes between modes, which moves the ring.
  useEffect(() => {
    const id = requestAnimationFrame(() => engine.current?.resize());
    return () => cancelAnimationFrame(id);
  }, [engine, mode]);

  const { switchMode, random, pickFromList, openShare, resumeShare, goToPlace, openPlaceFromUrl } = useMapActions({
    engine,
    mode,
    active,
    tunedKey,
    itemsFor,
    setMode,
    setActive,
    setSheet,
    places: data.places,
    setPlaceFilter,
  });

  const toggleCategory = (c: Category) =>
    setActive((prev) => {
      const next = new Set(prev);
      if (!next.has(c)) next.add(c);
      else if (next.size > 1) next.delete(c);
      return next;
    });

  const closeSheet = useCallback(() => setSheet(null), []);

  return (
    <div className="cs-map" data-mode={mode}>
      <MapStage
        {...{ baseRef, dotsRef, ringRef, hintRef, hintHidden }}
        color={tuned ? catColor(tuned.category) : null}
      />

      <MapHeader
        ref={topRef}
        mode={mode}
        items={itemsFor(mode)}
        active={active}
        soundOn={soundOn}
        onMode={(m) => {
          if (m === mode) return;
          setPlaceFilter(null); // a place in one mode may have nothing in the other
          switchMode(m);
        }}
        onToggleCategory={toggleCategory}
        onShare={openShare}
        onSound={() => toggleSound(!!tunedKey)}
        onRandom={random}
        onList={() => setSheet({ type: "list" })}
      />

      <ZoomControls ref={zoomRef} onZoom={(f) => engine.current?.zoomBy(f)} />

      <div className="tuner">
        <TunerCard
          item={tuned}
          nearest={nearest}
          coords={coords}
          echoes={tuned?.kind === "story" ? echoState[tuned.slug]?.echoes : undefined}
          onOpen={(item) => setSheet({ type: "item", item })}
        />
      </div>

      <Sheet
        sheet={sheet}
        mode={mode}
        data={data}
        placeFilter={placeFilter}
        echoState={echoState}
        setEchoState={setEchoState}
        onClose={closeSheet}
        onPick={pickFromList}
        onPickPlace={goToPlace}
        onClearPlace={() => setPlaceFilter(null)}
        onNearbyStories={(c) => {
          setSheet(null);
          switchMode("people", { lon: c.lon, lat: c.lat, zoom: 3.2 });
        }}
      />
    </div>
  );
}
