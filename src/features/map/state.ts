import type { MapItem } from "@/lib/types";

/** Which bottom sheet is open. */
export type SheetState =
  { type: "item"; item: MapItem } | { type: "list" } | { type: "share"; center: { lat: number; lon: number } };

/** Echo count per story slug, and whether this visitor has echoed it. */
export type EchoState = Record<string, { echoes: number; mine: boolean }>;
export type SetEchoState = (fn: (prev: EchoState) => EchoState) => void;
