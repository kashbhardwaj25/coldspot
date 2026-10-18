"use client";

import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup } from "@base-ui/react/toggle-group";
import Link from "next/link";
import { useMemo, type CSSProperties, type Ref } from "react";
import { CATEGORIES, CATEGORY_KEYS, type Category } from "@/lib/categories";
import type { MapItem, Mode } from "@/lib/types";
import { Icon } from "@/components/brand";
import { STORIES_ENABLED } from "@/lib/features";
import { Logo } from "@/components/Logo";
import { AccountButton } from "@/features/accounts/AccountButton";

const NOTES: Record<Mode, string> = {
  famous: "Real, well-known cases, with the explanations offered.",
  people: "Encounters shared by people, reviewed before they appear.",
};

type Props = {
  ref: Ref<HTMLElement>;
  mode: Mode;
  /** Items in the current mode, counted per category. Categories with none are hidden. */
  items: MapItem[];
  active: Set<Category>;
  soundOn: boolean;
  onMode: (mode: Mode) => void;
  onToggleCategory: (category: Category) => void;
  onShare: () => void;
  onSound: () => void;
  onRandom: () => void;
  onList: () => void;
};

/** Brand, actions, the mode switch and category chips. */
export function MapHeader({ ref, items, ...p }: Props) {
  const counts = useMemo(() => {
    const out: Partial<Record<Category, number>> = {};
    for (const i of items) out[i.category] = (out[i.category] ?? 0) + 1;
    return out;
  }, [items]);

  return (
    <header className="top" ref={ref}>
      <div className="bar">
        <div className="brand">
          <b>
            <Logo />
            COLDSPOT
          </b>
          <span>Something happened here</span>
        </div>
        <div className="actions">
          {p.mode === "people" && (
            <button type="button" className="btn primary" onClick={p.onShare} aria-label="Share a story">
              {Icon.plus}
              <span>Share a story</span>
            </button>
          )}
          {STORIES_ENABLED && <AccountButton />}
          <button
            type="button"
            className="btn"
            onClick={p.onSound}
            aria-pressed={p.soundOn}
            aria-label="Sound"
            title="Static and ambient sound"
          >
            {Icon.sound}
            <span>{p.soundOn ? "Sound on" : "Sound off"}</span>
          </button>
          <button type="button" className="btn" onClick={p.onRandom} aria-label="Random" title="Fly somewhere random">
            {Icon.shuffle}
            <span>Random</span>
          </button>
          <button type="button" className="btn" onClick={p.onList} aria-label="List" title="Everything as a list">
            {Icon.list}
            <span>List</span>
          </button>
        </div>
      </div>
      <div className="band">
        <h1 className="sr-only">Coldspot: a globe of unexplained encounters</h1>
        {STORIES_ENABLED && (
          <ToggleGroup
            className="seg"
            aria-label="Choose what to tune in to"
            value={[p.mode]}
            // Pressing the active mode again would empty the group; keep it selected instead.
            onValueChange={(v) => v[0] && p.onMode(v[0] as Mode)}
          >
            <Toggle value="famous">Famous cases</Toggle>
            <Toggle value="people">People&apos;s stories</Toggle>
          </ToggleGroup>
        )}
        <p>{NOTES[p.mode]}</p>
        <Link className="all-cases" href="/cases">
          Browse all famous cases →
        </Link>
      </div>
      <div className="chips" role="group" aria-label="Show categories">
        {CATEGORY_KEYS.filter((k) => counts[k]).map((k) => (
          <Toggle
            key={k}
            className="chip"
            style={{ "--c": CATEGORIES[k].color } as CSSProperties}
            pressed={p.active.has(k)}
            onPressedChange={() => p.onToggleCategory(k)}
          >
            <i />
            {CATEGORIES[k].label} <em>{counts[k]}</em>
          </Toggle>
        ))}
      </div>
    </header>
  );
}
