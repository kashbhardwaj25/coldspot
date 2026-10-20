"use client";

import { Drawer } from "@base-ui/react/drawer";
import { useState, type CSSProperties } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { catColor } from "@/lib/format";
import type { SheetState } from "../state";
import { renderSheet, type SheetContext } from "./registry";

type Props = SheetContext & {
  /** The sheet to show, or null to close it. */
  sheet: SheetState | null;
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
  const body = current ? renderSheet({ ...props, sheet: current }) : null;

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
                <span className="grab" aria-hidden="true" />
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
