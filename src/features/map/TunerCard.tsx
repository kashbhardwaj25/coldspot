"use client";

import { useEffect, type CSSProperties } from "react";
import { Icon } from "@/components/brand";
import { CATEGORIES } from "@/lib/categories";
import { caseStatusLabel } from "@/lib/format";
import type { Signal } from "@/lib/signal";
import { itemName, type CaseSummary, type MapItem, type StoryItem } from "@/lib/types";
import { Freq } from "./parts";
import { loadCaseFile } from "./useCaseFile";

type Props = {
  item: MapItem | null;
  nearest: MapItem | null;
  coords: Signal<string>;
  /** Live echo count for a tuned story. */
  echoes?: number;
  /** Already opened in this browser. */
  read: boolean;
  /** The year a tuned case happened, when today is its anniversary. */
  onThisDay: number | null;
  onOpen: (item: MapItem) => void;
};

/** What's tuned in, under the ring: its title lit up, or unlit between stations. */
export function TunerCard({ item, nearest, coords, echoes, read, onThisDay, onOpen }: Props) {
  if (!item) return <Searching nearest={nearest} coords={coords} />;
  // Keyed, so the title charges up again each time something new tunes in.
  if (item.kind === "case") return <CaseCard key={item.slug} {...{ item, coords, read, onThisDay, onOpen }} />;
  return <StoryCard key={item.slug} {...{ item, coords, read, onOpen }} echoes={echoes ?? item.echoes} />;
}

/** Marks a case or story you've opened before. */
const ReadTag = () => <span className="read-tag">{Icon.check}Read</span>;

function Searching({ nearest, coords }: { nearest: MapItem | null; coords: Signal<string> }) {
  return (
    <div className="tuned idle" aria-live="polite">
      <h2 className="tuned-title">Between stations</h2>
      <p className="tuned-line">Keep dragging until a light sits inside the ring.</p>
      <div className="tuned-meta">
        <span>{nearest ? `Nearest: ${itemName(nearest)}` : "Nothing on this side of the globe"}</span>
        <Freq source={coords} />
      </div>
    </div>
  );
}

type CardProps<T> = { item: T; coords: Signal<string>; read: boolean; onOpen: (item: MapItem) => void };

function CaseCard({ item, coords, read, onThisDay, onOpen }: CardProps<CaseSummary> & { onThisDay: number | null }) {
  const cat = CATEGORIES[item.category];
  // Fetch the full case file as soon as a case tunes in, so it's usually ready before it's opened.
  useEffect(() => {
    loadCaseFile(item.slug).catch(() => {});
  }, [item.slug]);
  return (
    <div className="tuned" style={{ "--tc": cat.color } as CSSProperties} aria-live="polite">
      {onThisDay && <p className="on-this-day">On this day in {onThisDay}</p>}
      <h2 className="tuned-title">{item.title}</h2>
      <p className="tuned-line">{item.hook}</p>
      <div className="tuned-meta">
        <span className="tag">
          <i className="d" />
          {cat.label}
        </span>
        <span className={`pill ${item.status}`}>{caseStatusLabel(item)}</span>
        <span>{item.region}</span>
        <span>{item.dateLabel}</span>
        {read && <ReadTag />}
      </div>
      <div className="tuned-foot">
        <button type="button" className="read" onClick={() => onOpen(item)}>
          Open the case file {Icon.arrow}
        </button>
        <Freq source={coords} />
      </div>
    </div>
  );
}

const witnessLabel = (w: string | null) =>
  w && /^\d+\+?$/.test(w) ? `${w} ${w === "1" ? "witness" : "witnesses"}` : w;

function StoryCard({ item, coords, echoes, read, onOpen }: CardProps<StoryItem> & { echoes: number }) {
  const cat = CATEGORIES[item.category];
  const w = witnessLabel(item.witnesses);
  return (
    <div className="tuned" style={{ "--tc": cat.color } as CSSProperties} aria-live="polite">
      <h2 className="tuned-title">{item.place}</h2>
      <p className="tuned-line">{item.hook}</p>
      <div className="tuned-meta">
        <span className="tag">
          <i />
          {cat.label}
        </span>
        <span>{item.region}</span>
        {item.year && <span>{item.year}</span>}
        {item.timeLabel && <span>{item.timeLabel}</span>}
        {w && <span>{w}</span>}
        <span>
          {echoes} {echoes === 1 ? "echo" : "echoes"}
        </span>
        {read && <ReadTag />}
      </div>
      <div className="tuned-foot">
        <button type="button" className="read" onClick={() => onOpen(item)}>
          Read the story {Icon.arrow}
        </button>
        {item.isSample && <span className="sample">Sample story</span>}
        <Freq source={coords} />
      </div>
    </div>
  );
}
