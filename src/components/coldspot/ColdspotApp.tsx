"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { feature } from "topojson-client";
import type { GeoPermissibleObjects } from "d3-geo";
import { myEchoes } from "@/app/actions";
import { CATEGORIES, CATEGORY_KEYS, type Category } from "@/lib/categories";
import { itemKey, itemName, type CaseItem, type MapItem, type Mode, type StoryItem } from "@/lib/types";
import { GlobeEngine, type EngineItem, type View } from "../globe/engine";
import { Radio } from "../globe/radio";
import { caseStatusLabel, catColor } from "@/lib/format";
import { Icon, Logo } from "../brand";
import { ScrambleText } from "./parts";
import { Sheet, type EchoState, type SheetState } from "./Sheets";

const VIEWS: Record<Mode, View> = {
  famous: { lon: 69.85, lat: 23.72, zoom: 1.15 },
  people: { lon: 77.36, lat: 23.25, zoom: 3.4 },
};
const NOTES: Record<Mode, string> = {
  famous: "Real, well-known cases, with the explanations offered.",
  people: "Encounters shared by people, reviewed before they appear.",
};
const cardReserve = (w: number) => (w < 760 ? 250 : 230);
const allCats = () => new Set<Category>(CATEGORY_KEYS);

type Props = { cases: CaseItem[]; stories: StoryItem[] };

export default function ColdspotApp({ cases, stories }: Props) {
  const [mode, setMode] = useState<Mode>("famous");
  const [active, setActive] = useState<Set<Category>>(allCats);
  const [tunedKey, setTunedKey] = useState<string | null>(null);
  const [nearestKey, setNearestKey] = useState<string | null>(null);
  const [sheet, setSheet] = useState<SheetState | null>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [hintHidden, setHintHidden] = useState(false);
  const [echoState, setEchoState] = useState<EchoState>(() =>
    Object.fromEntries(stories.map((s) => [s.slug, { echoes: s.echoes, mine: false }])),
  );

  const rootRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<HTMLCanvasElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLElement>(null);
  const engineRef = useRef<GlobeEngine | null>(null);
  const radioRef = useRef<Radio | null>(null);
  const coordsRef = useRef("");
  const tunedRef = useRef<string | null>(null);

  const byKey = useMemo(() => new Map<string, MapItem>([...cases, ...stories].map((i) => [itemKey(i), i])), [cases, stories]);
  const tuned = tunedKey ? (byKey.get(tunedKey) ?? null) : null;
  const nearest = nearestKey ? (byKey.get(nearestKey) ?? null) : null;
  const itemsFor = useCallback((m: Mode): MapItem[] => (m === "famous" ? cases : stories), [cases, stories]);

  const toEngine = useCallback(
    (m: Mode, act: Set<Category>): EngineItem[] =>
      itemsFor(m)
        .filter((i) => act.has(i.category))
        .map((i) => ({
          key: itemKey(i),
          category: i.category,
          lat: i.lat,
          lon: i.lon,
          label: itemName(i),
          narrated: i.kind === "story" && i.narrated,
        })),
    [itemsFor],
  );

  const openItem = useCallback((item: MapItem) => setSheet({ type: "item", item }), []);
  const closeSheet = useCallback(() => setSheet(null), []);

  /* ----- create the globe once the coastline data has loaded ----- */
  useEffect(() => {
    let cancelled = false;
    let engine: GlobeEngine | null = null;
    const radio = (radioRef.current ??= new Radio());

    fetch("/land-50m.json")
      .then((r) => r.json())
      .then((topo) => {
        if (cancelled || !baseRef.current || !dotsRef.current) return;
        const land = feature(topo, topo.objects.land) as unknown as GeoPermissibleObjects;

        // Deep links: /?case=roswell or /?story=upper-lake-12
        const q = new URLSearchParams(window.location.search);
        const slug = q.get("case") ?? q.get("story");
        const target = q.get("case")
          ? cases.find((c) => c.slug === slug)
          : q.get("story")
            ? stories.find((s) => s.slug === slug)
            : undefined;
        const startMode: Mode = target?.kind === "story" ? "people" : "famous";
        const view: View = target
          ? { lon: target.lon, lat: target.lat, zoom: startMode === "famous" ? 2.4 : 3.6 }
          : VIEWS[startMode];
        if (startMode !== "famous") setMode(startMode);

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
            tunedRef.current = key;
            setTunedKey(key);
          },
          onNearest: setNearestKey,
          onCoords: (text) => {
            coordsRef.current = text;
            rootRef.current?.querySelectorAll<HTMLElement>("[data-freq]").forEach((el) => (el.textContent = text));
          },
          onInteract: () => setHintHidden(true),
          onOpenTuned: () => {
            const item = tunedRef.current ? byKey.get(tunedRef.current) : null;
            if (item) setSheet({ type: "item", item });
          },
        });
        engine.setItems(toEngine(startMode, allCats()), startMode === "famous");
        engineRef.current = engine;
      });

    return () => {
      cancelled = true;
      engine?.destroy();
      engineRef.current = null;
    };
    // The engine is created once; later changes flow through setItems/flyTo.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => () => radioRef.current?.close(), []);

  /* ----- keep the globe's dots in sync with mode and filters ----- */
  useEffect(() => {
    engineRef.current?.setItems(toEngine(mode, active), mode === "famous");
  }, [mode, active, toEngine]);

  /* ----- the header height changes between modes ----- */
  useEffect(() => {
    const id = requestAnimationFrame(() => engineRef.current?.resize());
    return () => cancelAnimationFrame(id);
  }, [mode]);

  /* ----- which stories has this visitor echoed? ----- */
  useEffect(() => {
    myEchoes().then((slugs) => {
      if (!slugs.length) return;
      setEchoState((prev) => {
        const next = { ...prev };
        for (const s of slugs) if (next[s]) next[s] = { ...next[s], mine: true };
        return next;
      });
    });
  }, []);

  const switchMode = useCallback((m: Mode, target?: View) => {
    setMode(m);
    setActive(allCats());
    const e = engineRef.current;
    if (!e) return;
    e.clearTune();
    const v = target ?? VIEWS[m];
    e.flyTo(v.lon, v.lat, v.zoom, 1300);
  }, []);

  const toggleCat = (c: Category) =>
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(c)) {
        if (next.size > 1) next.delete(c);
      } else next.add(c);
      return next;
    });

  const random = () => {
    const pool = itemsFor(mode).filter((i) => active.has(i.category) && itemKey(i) !== tunedKey);
    if (!pool.length) return;
    const pick = pool[(Math.random() * pool.length) | 0];
    engineRef.current?.flyTo(pick.lon, pick.lat, mode === "famous" ? 2.2 + Math.random() : 3.6 + Math.random() * 1.5);
  };

  const pickFromList = (item: MapItem) => {
    setSheet(null);
    setActive((prev) => new Set(prev).add(item.category));
    engineRef.current?.flyTo(item.lon, item.lat, item.kind === "case" ? 2.4 : 4);
  };

  const toggleSound = async () => {
    const r = (radioRef.current ??= new Radio());
    const on = await r.toggle();
    setSoundOn(on);
    if (on && tunedKey) r.burst();
  };

  const openShare = () => {
    const c = engineRef.current?.center() ?? { lat: VIEWS.people.lat, lon: VIEWS.people.lon };
    setSheet({ type: "share", center: c });
  };

  const counts = useMemo(() => {
    const out: Partial<Record<Category, number>> = {};
    for (const i of itemsFor(mode)) out[i.category] = (out[i.category] ?? 0) + 1;
    return out;
  }, [mode, itemsFor]);

  return (
    <div className="cs-map" data-mode={mode} ref={rootRef}>
      <canvas className="globe-base" ref={baseRef} aria-hidden="true" />
      <canvas
        className="globe-dots"
        ref={dotsRef}
        tabIndex={0}
        aria-label="Coldspot map. Drag or use arrow keys to move. Anything that reaches the centre ring tunes in. Press Enter to open it."
      />

      <div className={`ring${tuned ? " on" : ""}`} ref={ringRef} aria-hidden="true"
        style={tuned ? ({ "--tune": catColor(tuned.category) } as React.CSSProperties) : undefined}>
        <svg viewBox="0 0 64 64">
          <circle className="r" cx="32" cy="32" r="22" />
          <g className="spin">
            <circle className="r" cx="32" cy="32" r="29" strokeDasharray="3 7" />
          </g>
          <line className="t" x1="32" y1="0" x2="32" y2="6" />
          <line className="t" x1="32" y1="58" x2="32" y2="64" />
          <line className="t" x1="0" y1="32" x2="6" y2="32" />
          <line className="t" x1="58" y1="32" x2="64" y2="32" />
        </svg>
      </div>
      <div className="hint" ref={hintRef} style={{ opacity: hintHidden ? 0 : 1 }}>
        Drag the map · anything in the ring tunes in
      </div>

      <header className="top" ref={topRef}>
        <div className="bar">
          <div className="brand">
            <b>
              <Logo />
              COLDSPOT
            </b>
            <span>Something happened here</span>
          </div>
          <div className="actions">
            {mode === "people" && (
              <button className="btn primary" onClick={openShare} aria-label="Share a story">
                {Icon.plus}
                <span>Share a story</span>
              </button>
            )}
            <button className="btn" onClick={toggleSound} aria-pressed={soundOn} aria-label="Sound" title="Static and ambient sound">
              {Icon.sound}
              <span>{soundOn ? "Sound on" : "Sound off"}</span>
            </button>
            <button className="btn" onClick={random} aria-label="Random" title="Fly somewhere random">
              {Icon.shuffle}
              <span>Random</span>
            </button>
            <button className="btn" onClick={() => setSheet({ type: "list" })} aria-label="List" title="Everything as a list">
              {Icon.list}
              <span>List</span>
            </button>
          </div>
        </div>
        <div className="band">
          <div className="seg" role="group" aria-label="Choose what to tune in to">
            <button aria-pressed={mode === "famous"} onClick={() => mode !== "famous" && switchMode("famous")}>
              Famous cases <em>{cases.length}</em>
            </button>
            <button aria-pressed={mode === "people"} onClick={() => mode !== "people" && switchMode("people")}>
              People&apos;s stories <em>{stories.length}</em>
            </button>
          </div>
          <p>{NOTES[mode]}</p>
        </div>
        <div className="chips" role="group" aria-label="Show categories">
          {CATEGORY_KEYS.filter((k) => counts[k]).map((k) => (
            <button
              key={k}
              className="chip"
              style={{ "--c": CATEGORIES[k].color } as React.CSSProperties}
              aria-pressed={active.has(k)}
              onClick={() => toggleCat(k)}
            >
              <i />
              {CATEGORIES[k].label} <em>{counts[k]}</em>
            </button>
          ))}
        </div>
      </header>

      <div className="zoom" ref={zoomRef}>
        <button className="btn" onClick={() => engineRef.current?.zoomBy(1.6)} aria-label="Zoom in">
          +
        </button>
        <button className="btn" onClick={() => engineRef.current?.zoomBy(1 / 1.6)} aria-label="Zoom out">
          −
        </button>
      </div>

      <div className="tuner">
        <TunerCard
          item={tuned}
          nearest={nearest}
          coords={coordsRef.current}
          echoes={tuned?.kind === "story" ? echoState[tuned.slug]?.echoes : undefined}
          onOpen={openItem}
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

function TunerCard({
  item,
  nearest,
  coords,
  echoes,
  onOpen,
}: {
  item: MapItem | null;
  nearest: MapItem | null;
  coords: string;
  echoes?: number;
  onOpen: (i: MapItem) => void;
}) {
  if (!item) {
    return (
      <div className="card search" aria-live="polite">
        <div className="row">
          <span className="tag">
            <span className="bars" aria-hidden="true">
              <s />
              <s />
              <s />
              <s />
            </span>{" "}
            Between stations
          </span>
          <span className="freq" data-freq>
            {coords}
          </span>
        </div>
        <p className="hook">Static. Keep dragging until a light sits inside the ring.</p>
        <div className="meta">
          <span>{nearest ? `Nearest: ${itemName(nearest)}` : "Nothing on this side of the globe"}</span>
        </div>
      </div>
    );
  }

  const cat = CATEGORIES[item.category];
  const style = { "--tc": cat.color } as React.CSSProperties;

  if (item.kind === "case") {
    return (
      <div className="card case" style={style} aria-live="polite">
        <div className="row">
          <span className="tag">
            <i className="d" />
            {cat.label}
          </span>
          <span className={`pill ${item.status}`}>{caseStatusLabel(item)}</span>
        </div>
        <h2 className="ctitle">{item.title}</h2>
        <div className="place">
          {item.region} · {item.dateLabel}
        </div>
        <ScrambleText className="hook" text={item.hook} />
        <div className="meta">
          <span>{item.witnesses}</span>
        </div>
        <div className="open">
          <button className="read" onClick={() => onOpen(item)}>
            Open case file <span aria-hidden="true">→</span>
          </button>
          <span className="freq" data-freq>
            {coords}
          </span>
        </div>
      </div>
    );
  }

  const w = item.witnesses && /^\d+$/.test(item.witnesses)
    ? `${item.witnesses} ${item.witnesses === "1" ? "witness" : "witnesses"}`
    : item.witnesses;
  return (
    <div className="card" style={style} aria-live="polite">
      <div className="row">
        <span className="tag">
          <i />
          {cat.label}
        </span>
        <span className="freq" data-freq>
          {coords}
        </span>
      </div>
      <div className="place">
        <b>{item.place}</b> · {item.region}
        {item.year ? ` · ${item.year}` : ""}
      </div>
      <ScrambleText className="hook" text={item.hook} />
      <div className="meta">
        {item.timeLabel && <span>{item.timeLabel}</span>}
        {w && <span>{w}</span>}
        <span>{echoes ?? item.echoes} echoes nearby</span>
        {item.narrated && <span style={{ color: cat.color }}>▶ Narrated · {item.narrationLength}</span>}
      </div>
      <div className="open">
        <button className="read" onClick={() => onOpen(item)}>
          Read the story <span aria-hidden="true">→</span>
        </button>
        {item.isSample && <span className="sample">Sample story</span>}
      </div>
    </div>
  );
}
