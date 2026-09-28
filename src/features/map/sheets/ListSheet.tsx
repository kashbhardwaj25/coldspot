"use client";

import type { CSSProperties } from "react";
import { catColor } from "@/lib/format";
import { itemKey, itemName, type MapItem } from "@/lib/types";

/** Everything in the current mode as a list. Picking one flies the globe to it. */
export function ListSheet({ items, onPick }: { items: MapItem[]; onPick: (item: MapItem) => void }) {
  return (
    <div className="list" id="sheetTitle">
      {items.map((i) => (
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
  );
}
