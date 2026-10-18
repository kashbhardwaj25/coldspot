"use client";

import { Drawer } from "@base-ui/react/drawer";
import { useState, type CSSProperties, type ReactNode } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { CATEGORIES } from "@/lib/categories";
import { catColor } from "@/lib/format";
import type { CaseSummary, MapItem, Mode, Place } from "@/lib/types";
import type { EchoState, MapData, SetEchoState, SheetState } from "../state";
import { CaseSheet } from "./CaseSheet";
import { ListSheet } from "./ListSheet";
import { ShareSheet } from "./ShareSheet";
import { StorySheet } from "./StorySheet";

type Props = {
  /** The sheet to show, or null to close it. */
  sheet: SheetState | null;
  mode: Mode;
  data: MapData;
  /** The place the list is narrowed to, if any. */
  placeFilter: string | null;
  echoState: EchoState;
  setEchoState: SetEchoState;
  onClose: () => void;
  onPick: (item: MapItem) => void;
  onPickPlace: (place: Place) => void;
  onClearPlace: () => void;
  onNearbyStories: (c: CaseSummary) => void;
};

/**
 * Bottom sheet (Base UI Drawer): traps focus, closes on Esc, a tap outside or a swipe down, and returns focus
 * when it closes. Each sheet's own heading has the id `sheetTitle`, which labels the dialog.
 */
export function Sheet(props: Props) {
  const { sheet, onClose } = props;
  // Keep showing the last sheet while it slides away.
  const [shown, setShown] = useState(sheet);
  if (sheet && sheet !== shown) setShown(sheet);
  const current = sheet ?? shown;

  const tc = current?.type === "item" ? ({ "--tc": catColor(current.item.category) } as CSSProperties) : undefined;
  const [head, body] = current ? content({ ...props, sheet: current }) : [null, null];

  return (
    <Drawer.Root
      open={!!sheet}
      onOpenChange={(open, details) => {
        if (open) return;
        // Leave an Esc something inside already handled, like clearing a search box.
        if (details.reason === "escape-key" && details.event.defaultPrevented) return details.cancel();
        onClose();
      }}
      onOpenChangeComplete={(open) => !open && setShown(null)}
    >
      <Drawer.VirtualKeyboardProvider>
        <Drawer.Portal>
          <Drawer.Backdrop className="scrim" />
          <Drawer.Viewport className="sheet-viewport">
            <Drawer.Popup className="sheet" aria-labelledby="sheetTitle" style={tc}>
              <div className="sheet-head">
                <span style={tc}>{head}</span>
                <Drawer.Close render={<IconButton icon="close" label="Close" />} />
              </div>
              <Drawer.Content className="sheet-body">{body}</Drawer.Content>
            </Drawer.Popup>
          </Drawer.Viewport>
        </Drawer.Portal>
      </Drawer.VirtualKeyboardProvider>
    </Drawer.Root>
  );
}

function content(p: Props & { sheet: SheetState }): [ReactNode, ReactNode] {
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
          <CaseSheet key="b" c={item} stories={p.data.stories} onNearby={p.onNearbyStories} />,
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
      const items: MapItem[] = p.mode === "famous" ? p.data.cases : p.data.stories;
      const title = p.mode === "famous" ? "Famous cases" : "People's stories";
      return [
        <span key="h" className="tag">
          {title}
        </span>,
        <ListSheet
          key="b"
          title={title}
          items={items}
          places={p.data.places[p.mode]}
          placeFilter={p.placeFilter}
          onPick={p.onPick}
          onPickPlace={p.onPickPlace}
          onClearPlace={p.onClearPlace}
        />,
      ];
    }
    case "share":
      return [
        <span key="h" className="tag">
          Share a story
        </span>,
        <ShareSheet
          key="b"
          center={sheet.center}
          draft={sheet.draft}
          cases={p.data.cases}
          turnstileSiteKey={p.data.turnstileSiteKey}
          onClose={p.onClose}
        />,
      ];
  }
}
