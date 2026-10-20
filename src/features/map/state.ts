import type { ShareDraft } from "@/features/stories/draft";
import type { CaseSummary, MapItem, Mode, Place, StoryItem } from "@/lib/types";

/** Which bottom sheet is open. */
export type SheetState =
  | { type: "item"; item: MapItem }
  | { type: "list" }
  | { type: "share"; center: { lat: number; lon: number }; draft?: ShareDraft };

/** Echo count per story slug, and whether this visitor has echoed it. */
export type EchoState = Record<string, { echoes: number; mine: boolean }>;
export type SetEchoState = (fn: (prev: EchoState) => EchoState) => void;

/** Everything the map screen gets from the server, built once per page render. */
export type MapData = {
  cases: CaseSummary[];
  stories: StoryItem[];
  /** Places with items, per mode, for the Places view in the List sheet. */
  places: Record<Mode, Place[]>;
  /** Cloudflare Turnstile site key, or null when the spam check isn't set up. */
  turnstileSiteKey: string | null;
};
