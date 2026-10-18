"use client";

import Link from "next/link";
import { useMemo, useState, type CSSProperties, type KeyboardEvent } from "react";
import { catColor } from "@/lib/format";
import { itemKey, itemName, type MapItem, type Place } from "@/lib/types";
import { searchItems } from "../search";

type Props = {
  title: string;
  items: MapItem[];
  places: Place[];
  placeFilter: string | null;
  onPick: (item: MapItem) => void;
  onPickPlace: (place: Place) => void;
  onClearPlace: () => void;
};

/** Everything in the current mode as a searchable list. Picking one flies the globe to it. */
export function ListSheet({ title, items: all, places, placeFilter, onPick, onPickPlace, onClearPlace }: Props) {
  const [tab, setTab] = useState<"all" | "places">("all");
  const items = placeFilter
    ? all.filter((i) => (placeFilter.includes("/") ? i.stateKey : i.countryKey) === placeFilter)
    : all;
  const filterName = placeFilter
    ? places.flatMap((p) => [p, ...p.states]).find((p) => p.key === placeFilter)?.name
    : null;
  const [query, setQuery] = useState("");
  const shown = useMemo(() => searchItems(items, query), [items, query]);
  const searching = query.trim() !== "";

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Esc clears the search first; a second Esc closes the sheet.
    if (e.key === "Escape" && query) {
      e.preventDefault(); // tells Sheet the Esc was handled
      setQuery("");
    }
    if (e.key === "Enter" && shown[0]) onPick(shown[0]);
  };

  return (
    <div className="list-sheet">
      <h2 className="sr-only" id="sheetTitle">
        {title}
      </h2>
      <div className="list-tabs" role="group" aria-label="View">
        <button type="button" aria-pressed={tab === "all"} onClick={() => setTab("all")}>
          List
        </button>
        <button type="button" aria-pressed={tab === "places"} onClick={() => setTab("places")}>
          Places
        </button>
      </div>
      {tab === "places" ? (
        <div className="list">
          {places
            .flatMap((p) => [p, ...p.states])
            .map((p) => (
              <button
                type="button"
                key={p.key}
                className="item place-item"
                data-state={p.key.includes("/") || undefined}
                onClick={() => onPickPlace(p)}
              >
                <b>{p.name}</b>
                <em>{p.count}</em>
              </button>
            ))}
        </div>
      ) : (
        <>
          {filterName && (
            <button
              type="button"
              className="chip place-chip"
              onClick={onClearPlace}
              aria-label={`Show everywhere, not just ${filterName}`}
            >
              In {filterName} ✕
            </button>
          )}
          <div className="list-search">
            <label className="sr-only" htmlFor="list-search">
              Search {title.toLowerCase()}
            </label>
            <input
              id="list-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Search by name, place or category"
              autoComplete="off"
              enterKeyHint="search"
            />
          </div>
          <p className="sr-only" aria-live="polite">
            {searching ? `${shown.length} ${shown.length === 1 ? "match" : "matches"}` : ""}
          </p>
          {shown.length === 0 ? (
            <p className="list-empty">
              Nothing matches &ldquo;{query.trim()}&rdquo;. Try a place, a year or a category.
            </p>
          ) : (
            <div className="list">
              {shown.map((i) => (
                <button
                  type="button"
                  key={itemKey(i)}
                  className="item"
                  style={{ "--c": catColor(i.category) } as CSSProperties}
                  onClick={() => onPick(i)}
                >
                  <i />
                  <b>{itemName(i)}</b>
                  <em>{i.kind === "case" ? i.dateLabel : (i.year ?? "")}</em>
                  <small>{i.kind === "case" ? i.region : i.hook}</small>
                </button>
              ))}
            </div>
          )}
        </>
      )}
      <p className="list-foot">
        <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
      </p>
    </div>
  );
}
