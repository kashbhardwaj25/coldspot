"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { CATEGORIES } from "@/lib/categories";
import { catColor } from "@/lib/format";
import type { CaseItem, MapItem, Mode, StoryItem } from "@/lib/types";
import type { EchoState, SetEchoState, SheetState } from "../state";
import { CaseSheet } from "./CaseSheet";
import { ListSheet } from "./ListSheet";
import { ShareSheet } from "./ShareSheet";
import { StorySheet } from "./StorySheet";

type Props = {
  sheet: SheetState;
  mode: Mode;
  cases: CaseItem[];
  stories: StoryItem[];
  echoState: EchoState;
  setEchoState: SetEchoState;
  onClose: () => void;
  onPick: (item: MapItem) => void;
  onNearbyStories: (c: CaseItem) => void;
};

/** Bottom sheet: focuses the close button on open, closes on Esc, and returns focus when it closes. */
export function Sheet(props: Props) {
  const { sheet, onClose } = props;
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      prev?.focus?.();
    };
  }, [onClose]);

  const tc = sheet.type === "item" ? ({ "--tc": catColor(sheet.item.category) } as CSSProperties) : undefined;
  const [head, body] = content(props);

  return (
    <>
      {/* Pointer shortcut only; keyboard users close with Esc or the close button. */}
      <div className="scrim show" onClick={onClose} aria-hidden="true" />
      <section className="sheet" role="dialog" aria-modal="true" aria-labelledby="sheetTitle" style={tc}>
        <div className="sheet-head">
          <span style={tc}>{head}</span>
          <button type="button" className="x" ref={closeRef} onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="sheet-body">{body}</div>
      </section>
    </>
  );
}

function content(p: Props): [ReactNode, ReactNode] {
  const { sheet } = p;
  switch (sheet.type) {
    case "item": {
      const { item } = sheet;
      const label = CATEGORIES[item.category].label;
      if (item.kind === "case") {
        return [
          <span key="h" className="tag">
            <i className="d" />
            {label} · Case file
          </span>,
          <CaseSheet key="b" c={item} stories={p.stories} onNearby={p.onNearbyStories} />,
        ];
      }
      return [
        <span key="h" className="tag">
          <i />
          {label}
          {item.isSample ? " · Sample story" : ""}
        </span>,
        <StorySheet key="b" s={item} echoState={p.echoState} setEchoState={p.setEchoState} />,
      ];
    }
    case "list": {
      const items: MapItem[] = p.mode === "famous" ? p.cases : p.stories;
      const title = p.mode === "famous" ? "Famous cases" : "People's stories";
      return [
        <span key="h" className="tag">
          {title} · {items.length}
        </span>,
        <ListSheet key="b" items={items} onPick={p.onPick} />,
      ];
    }
    case "share":
      return [
        <span key="h" className="tag">
          Share a story
        </span>,
        <ShareSheet key="b" center={sheet.center} onClose={p.onClose} />,
      ];
  }
}
