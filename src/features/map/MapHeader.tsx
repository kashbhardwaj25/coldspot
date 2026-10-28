"use client";

import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup } from "@base-ui/react/toggle-group";
import Link from "next/link";
import type { CSSProperties, Ref } from "react";
import { CATEGORIES, CATEGORY_KEYS, type Category } from "@/lib/categories";
import type { World } from "@/lib/bodies";
import type { MapItem, Mode } from "@/lib/types";
import { Icon } from "@/components/brand";
import { STORIES_ENABLED } from "@/lib/features";
import { Wordmark } from "@/components/Wordmark";
import { headerActions } from "./headerActions";
import { AccountButton } from "@/features/accounts/AccountButton";

const NOTES: Record<Mode, string> = {
  famous: "Real, well-known cases, with the explanations offered.",
  people: "Encounters shared by people, reviewed before they appear.",
};

type Props = {
  ref: Ref<HTMLElement>;
  mode: Mode;
  world: World;
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
  onWorld: () => void;
};

/** Brand, actions, the mode switch and category chips. */
export function MapHeader({ ref, items, ...p }: Props) {
  const counts: Partial<Record<Category, number>> = {};
  for (const i of items) counts[i.category] = (counts[i.category] ?? 0) + 1;

  return (
    <header className="top" ref={ref}>
      <div className="bar">
        <div className="brand">
          <Wordmark tagline="Something happened here" />
        </div>
        <div className="actions">
          {headerActions(p).map((a) =>
            "icon" in a ? (
              <button
                key={a.id}
                type="button"
                className={a.primary ? "btn primary" : "btn"}
                onClick={a.onClick}
                aria-label={a.label}
                aria-pressed={a.pressed}
                title={a.title}
              >
                {Icon[a.icon]}
                <span>{a.text}</span>
              </button>
            ) : (
              <AccountButton key={a.id} />
            ),
          )}
        </div>
      </div>
      <div className="band">
        <h1 className="sr-only">Uncanny Map: a globe of unexplained encounters</h1>
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
        {p.mode === "famous" ? (
          <Link className="all-cases" href="/cases">
            Browse all famous cases {Icon.arrow}
          </Link>
        ) : (
          <Link className="all-cases" href="/places">
            Browse by place {Icon.arrow}
          </Link>
        )}
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
