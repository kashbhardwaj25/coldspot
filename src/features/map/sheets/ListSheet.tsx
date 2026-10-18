"use client";

import { useMemo, useState, type CSSProperties, type KeyboardEvent } from "react";
import { catColor } from "@/lib/format";
import { itemKey, itemName, type MapItem } from "@/lib/types";
import { searchItems } from "../search";

type Props = { title: string; items: MapItem[]; onPick: (item: MapItem) => void };

/** Everything in the current mode as a searchable list. Picking one flies the globe to it. */
export function ListSheet({ title, items, onPick }: Props) {
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
        <p className="list-empty">Nothing matches &ldquo;{query.trim()}&rdquo;. Try a place, a year or a category.</p>
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
    </div>
  );
}
