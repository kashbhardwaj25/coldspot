import { useSyncExternalStore } from "react";
import { markRead, readKeys, serverReadKeys, subscribeRead } from "./logbook";

/** The keys of every case and story opened in this browser, and a way to add one. */
export function useLogbook() {
  const read = useSyncExternalStore(subscribeRead, readKeys, serverReadKeys);
  return { read, markRead };
}
