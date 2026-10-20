import type { ReactNode } from "react";
import type { CaseSummary, MapItem, Mode, Place } from "@/lib/types";
import type { EchoState, MapData, SetEchoState, SheetState } from "../state";
import { CaseSheet } from "./CaseSheet";
import { ListSheet } from "./ListSheet";
import { ShareSheet } from "./ShareSheet";
import { StorySheet } from "./StorySheet";

/** What every sheet can draw on: the map's data and the actions it may call. */
export type SheetContext = {
  mode: Mode;
  data: MapData;
  placeFilter: string | null;
  echoState: EchoState;
  setEchoState: SetEchoState;
  onClose: () => void;
  onPick: (item: MapItem) => void;
  onPickPlace: (place: Place) => void;
  onClearPlace: () => void;
  onNearbyStories: (c: CaseSummary) => void;
};

type Type = SheetState["type"];
type Ctx<T extends Type> = SheetContext & { sheet: Extract<SheetState, { type: T }> };
type Entry<T extends Type> = { body: (c: Ctx<T>) => ReactNode };

const listTitle = (mode: Mode) => (mode === "famous" ? "Famous cases" : "People's stories");

/** Each kind of sheet and its body. Add a sheet type here and in SheetState. */
const SHEETS: { [T in Type]: Entry<T> } = {
  item: {
    body: ({ sheet: { item }, ...c }) =>
      item.kind === "case" ? (
        <CaseSheet c={item} stories={c.data.stories} onNearby={c.onNearbyStories} />
      ) : (
        <StorySheet s={item} echoState={c.echoState} setEchoState={c.setEchoState} />
      ),
  },
  list: {
    body: (c) => (
      <ListSheet
        title={listTitle(c.mode)}
        items={c.mode === "famous" ? c.data.cases : c.data.stories}
        places={c.data.places[c.mode]}
        placeFilter={c.placeFilter}
        onPick={c.onPick}
        onPickPlace={c.onPickPlace}
        onClearPlace={c.onClearPlace}
      />
    ),
  },
  share: {
    body: ({ sheet, ...c }) => (
      <ShareSheet
        center={sheet.center}
        draft={sheet.draft}
        cases={c.data.cases}
        turnstileSiteKey={c.data.turnstileSiteKey}
        onClose={c.onClose}
      />
    ),
  },
};

/** The body of whichever sheet is open. */
export function renderSheet<T extends Type>(c: Ctx<T>): ReactNode {
  const entry = SHEETS[c.sheet.type] as Entry<T>;
  return entry.body(c);
}
