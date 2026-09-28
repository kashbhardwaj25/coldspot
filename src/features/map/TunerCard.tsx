"use client";

import type { CSSProperties } from "react";
import { CATEGORIES } from "@/lib/categories";
import { caseStatusLabel } from "@/lib/format";
import type { Signal } from "@/lib/signal";
import { itemName, type CaseItem, type MapItem, type StoryItem } from "@/lib/types";
import { Freq, ScrambleText } from "./parts";

type Props = {
  item: MapItem | null;
  nearest: MapItem | null;
  coords: Signal<string>;
  /** Live echo count for a tuned story. */
  echoes?: number;
  onOpen: (item: MapItem) => void;
};

/** The card under the ring: static between stations, or whatever is tuned in. */
export function TunerCard({ item, nearest, coords, echoes, onOpen }: Props) {
  if (!item) return <Searching nearest={nearest} coords={coords} />;
  if (item.kind === "case") return <CaseCard item={item} coords={coords} onOpen={onOpen} />;
  return <StoryCard item={item} echoes={echoes ?? item.echoes} onOpen={onOpen} coords={coords} />;
}

function Searching({ nearest, coords }: { nearest: MapItem | null; coords: Signal<string> }) {
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
        <Freq source={coords} />
      </div>
      <p className="hook">Static. Keep dragging until a light sits inside the ring.</p>
      <div className="meta">
        <span>{nearest ? `Nearest: ${itemName(nearest)}` : "Nothing on this side of the globe"}</span>
      </div>
    </div>
  );
}

type CardProps<T> = { item: T; coords: Signal<string>; onOpen: (item: MapItem) => void };

function CaseCard({ item, coords, onOpen }: CardProps<CaseItem>) {
  const cat = CATEGORIES[item.category];
  return (
    <div className="card case" style={{ "--tc": cat.color } as CSSProperties} aria-live="polite">
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
        <button type="button" className="read" onClick={() => onOpen(item)}>
          Open case file <span aria-hidden="true">→</span>
        </button>
        <Freq source={coords} />
      </div>
    </div>
  );
}

const witnessLabel = (w: string | null) => (w && /^\d+$/.test(w) ? `${w} ${w === "1" ? "witness" : "witnesses"}` : w);

function StoryCard({ item, coords, echoes, onOpen }: CardProps<StoryItem> & { echoes: number }) {
  const cat = CATEGORIES[item.category];
  const w = witnessLabel(item.witnesses);
  return (
    <div className="card" style={{ "--tc": cat.color } as CSSProperties} aria-live="polite">
      <div className="row">
        <span className="tag">
          <i />
          {cat.label}
        </span>
        <Freq source={coords} />
      </div>
      <div className="place">
        <b>{item.place}</b> · {item.region}
        {item.year ? ` · ${item.year}` : ""}
      </div>
      <ScrambleText className="hook" text={item.hook} />
      <div className="meta">
        {item.timeLabel && <span>{item.timeLabel}</span>}
        {w && <span>{w}</span>}
        <span>{echoes} echoes nearby</span>
        {item.narrated && <span style={{ color: cat.color }}>▶ Narrated · {item.narrationLength}</span>}
      </div>
      <div className="open">
        <button type="button" className="read" onClick={() => onOpen(item)}>
          Read the story <span aria-hidden="true">→</span>
        </button>
        {item.isSample && <span className="sample">Sample story</span>}
      </div>
    </div>
  );
}
