"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Category } from "@/lib/categories";
import { catColor } from "@/lib/format";
import { signal } from "@/lib/signal";
import { itemKey, type CaseItem, type MapItem, type Mode, type StoryItem } from "@/lib/types";
import type { View } from "@/features/globe/engine";
import { MapHeader } from "./MapHeader";
import { Ring, ZoomControls } from "./parts";
import { Sheet } from "./sheets/Sheet";
import type { SheetState } from "./state";
import { TunerCard } from "./TunerCard";
import { useEchoes } from "./useEchoes";
import { allCategories, toMarkers, useGlobe, VIEWS } from "./useGlobe";
import { useSound } from "./useSound";

type Props = { cases: CaseItem[]; stories: StoryItem[] };

export default function ColdspotApp({ cases, stories }: Props) {
  const [mode, setMode] = useState<Mode>("famous");
  const [active, setActive] = useState<Set<Category>>(allCategories);
  const [tunedKey, setTunedKey] = useState<string | null>(null);
  const [nearestKey, setNearestKey] = useState<string | null>(null);
  const [sheet, setSheet] = useState<SheetState | null>(null);
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

  const switchMode = (m: Mode, target?: View) => {
    setMode(m);
    setActive(allCategories());
    const e = engine.current;
    if (!e) return;
    e.clearTune();
    const v = target ?? VIEWS[m];
    e.flyTo(v.lon, v.lat, v.zoom, 1300);
  };

  const toggleCategory = (c: Category) =>
    setActive((prev) => {
      const next = new Set(prev);
      if (!next.has(c)) next.add(c);
      else if (next.size > 1) next.delete(c);
      return next;
    });

  const random = () => {
    const pool = itemsFor(mode).filter((i) => active.has(i.category) && itemKey(i) !== tunedKey);
    const pick = pool[Math.floor(Math.random() * pool.length)];
    if (!pick) return;
    const zoom = mode === "famous" ? 2.2 + Math.random() : 3.6 + Math.random() * 1.5;
    engine.current?.flyTo(pick.lon, pick.lat, zoom);
  };

  const pickFromList = (item: MapItem) => {
    setSheet(null);
    setActive((prev) => new Set(prev).add(item.category));
    engine.current?.flyTo(item.lon, item.lat, item.kind === "case" ? 2.4 : 4);
  };

  const openShare = () => {
    const center = engine.current?.center() ?? { lat: VIEWS.people.lat, lon: VIEWS.people.lon };
    setSheet({ type: "share", center });
  };

  const closeSheet = useCallback(() => setSheet(null), []);

  return (
    <div className="cs-map" data-mode={mode}>
      <canvas className="globe-base" ref={baseRef} aria-hidden="true" />
      <canvas
        className="globe-dots"
        ref={dotsRef}
        tabIndex={0}
        aria-label="Coldspot map. Drag or use arrow keys to move. Anything that reaches the centre ring tunes in. Press Enter to open it."
      />
      <Ring ref={ringRef} color={tuned ? catColor(tuned.category) : null} />
      <div className="hint" ref={hintRef} style={{ opacity: hintHidden ? 0 : 1 }}>
        Drag the map · anything in the ring tunes in
      </div>

      <MapHeader
        ref={topRef}
        mode={mode}
        totals={{ famous: cases.length, people: stories.length }}
        items={itemsFor(mode)}
        active={active}
        soundOn={soundOn}
        onMode={(m) => m !== mode && switchMode(m)}
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

      {sheet && (
        <Sheet
          sheet={sheet}
          mode={mode}
          cases={cases}
          stories={stories}
          echoState={echoState}
          setEchoState={setEchoState}
          onClose={closeSheet}
          onPick={pickFromList}
          onNearbyStories={(c) => {
            setSheet(null);
            switchMode("people", { lon: c.lon, lat: c.lat, zoom: 3.2 });
          }}
        />
      )}
    </div>
  );
}
