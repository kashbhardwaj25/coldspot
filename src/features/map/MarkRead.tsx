"use client";

import { useEffect } from "react";
import { markRead } from "./logbook";

/** Marks a case or story read when its page is opened, as opening it on the map does. Renders nothing. */
export function MarkRead({ kind, slug }: { kind: "case" | "story"; slug: string }) {
  useEffect(() => markRead(`${kind}:${slug}`), [kind, slug]);
  return null;
}
