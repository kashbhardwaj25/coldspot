import { useEffect, useState } from "react";
import { myEchoes } from "@/features/stories/echoes";
import type { StoryItem } from "@/lib/types";
import type { EchoState } from "./state";

/** Echo counts for every story, marked with the ones this visitor has already echoed. */
export function useEchoes(stories: StoryItem[]) {
  const [echoState, setEchoState] = useState<EchoState>(() =>
    Object.fromEntries(stories.map((s) => [s.slug, { echoes: s.echoes, mine: false }])),
  );

  useEffect(() => {
    let cancelled = false;
    myEchoes().then((slugs) => {
      if (cancelled || !slugs.length) return;
      setEchoState((prev) => {
        const next = { ...prev };
        for (const s of slugs) {
          const cur = next[s];
          if (cur) next[s] = { ...cur, mine: true };
        }
        return next;
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return [echoState, setEchoState] as const;
}
