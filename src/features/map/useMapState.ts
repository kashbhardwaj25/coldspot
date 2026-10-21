import { useEffect, useState } from "react";
import type { Category } from "@/lib/categories";
import { signal } from "@/lib/signal";
import { itemKey, type MapItem, type Mode } from "@/lib/types";
import type { MapData, SheetState } from "./state";
import { useEchoes } from "./useEchoes";
import { allCategories, toMarkers, useGlobe } from "./useGlobe";
import { useLogbook } from "./useLogbook";
import { useMapActions } from "./useMapActions";
import { useSound } from "./useSound";

/**
 * Everything the map screen knows and can do: the mode, filters, what's tuned in, the open sheet, the globe and
 * its refs, and the actions the header, list and sheets call. UncannyMapApp only renders what this returns.
 */
export function useMapState(data: MapData) {
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
  const sound = useSound();
  const logbook = useLogbook();

  const byKey = new Map<string, MapItem>([...cases, ...stories].map((i) => [itemKey(i), i]));
  const itemsFor = (m: Mode): MapItem[] => (m === "famous" ? cases : stories);
  const lookup = (key: string | null) => (key ? (byKey.get(key) ?? null) : null);
  /** Opening a case file or story marks it read, so the card can say so next time it tunes in. */
  const openItem = (item: MapItem) => {
    setSheet({ type: "item", item });
    logbook.markRead(itemKey(item));
  };

  const globe = useGlobe(
    sound.radio,
    { cases, stories },
    {
      onReady: (e, m) => {
        e.setItems(toMarkers(itemsFor(m), allCategories()), m === "famous");
        setMode(m);
        actions.resumeShare();
        actions.openPlaceFromUrl();
      },
      onTune: setTunedKey,
      onNearest: setNearestKey,
      onCoords: coords.set,
      onInteract: () => setHintHidden(true),
      onOpenTuned: (key) => {
        const item = byKey.get(key);
        if (item) openItem(item);
      },
    },
  );
  const { engine } = globe;

  // Keep the globe's dots in sync with mode and filters. `modeItems` is a prop array, so it only changes with the mode.
  const modeItems = itemsFor(mode);
  useEffect(() => {
    engine.current?.setItems(toMarkers(modeItems, active), mode === "famous");
  }, [engine, mode, active, modeItems]);

  // The header height changes between modes, which moves the ring.
  useEffect(() => {
    const id = requestAnimationFrame(() => engine.current?.resize());
    return () => cancelAnimationFrame(id);
  }, [engine, mode]);

  const actions = useMapActions({
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

  return {
    mode,
    active,
    items: modeItems,
    read: logbook.read,
    tuned: lookup(tunedKey),
    nearest: lookup(nearestKey),
    sheet,
    placeFilter,
    hintHidden,
    coords,
    echoState,
    setEchoState,
    sound: { on: sound.soundOn, toggle: () => sound.toggleSound(!!tunedKey) },
    globe,
    actions: {
      ...actions,
      /** Switching modes by hand clears the place filter: a place in one mode may have nothing in the other. */
      changeMode: (m: Mode) => {
        if (m === mode) return;
        setPlaceFilter(null);
        actions.switchMode(m);
      },
      toggleCategory: (c: Category) =>
        setActive((prev) => {
          const next = new Set(prev);
          if (!next.has(c)) next.add(c);
          else if (next.size > 1) next.delete(c);
          return next;
        }),
      openItem,
      openList: () => setSheet({ type: "list" }),
      closeSheet: () => setSheet(null),
      clearPlace: () => setPlaceFilter(null),
      zoom: (factor: number) => engine.current?.zoomBy(factor),
      nearbyStories: (c: { lat: number; lon: number }) => {
        setSheet(null);
        actions.switchMode("people", { lon: c.lon, lat: c.lat, zoom: 3.2 });
      },
    },
  };
}

export type MapState = ReturnType<typeof useMapState>;
