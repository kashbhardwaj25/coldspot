"use client";

import Link from "next/link";
import { useTransition } from "react";
import { toggleEcho } from "@/features/stories/echoes";
import { StoryArticle } from "@/features/stories/StoryArticle";
import type { StoryItem } from "@/lib/types";
import type { EchoState, SetEchoState } from "../state";

type Props = { s: StoryItem; echoState: EchoState; setEchoState: SetEchoState };

/** A person's story in a sheet, with the echo button. */
export function StorySheet({ s, echoState, setEchoState }: Props) {
  const [pending, start] = useTransition();
  const e = echoState[s.slug] ?? { echoes: s.echoes, mine: false };
  const onEcho = () =>
    start(async () => {
      const r = await toggleEcho(s.slug);
      if (r) setEchoState((prev) => ({ ...prev, [s.slug]: r }));
    });

  return (
    <StoryArticle s={s} variant="sheet" lastField={["Location shown", "Area only, about 5 km"]}>
      {s.narrated && (
        <div className="narr">
          <span className="play" aria-hidden="true">
            ▶
          </span>
          <p>
            <strong>Narration · {s.narrationLength}</strong>
            Narrated stories are part of the season pass.
          </p>
        </div>
      )}
      <div className="same">
        <p>
          <b>{e.echoes} echoes</b> · people who reported something similar within 50 km.
        </p>
        <button type="button" className="btn" aria-pressed={e.mine} onClick={onEcho} disabled={pending}>
          {e.mine ? "Echoed" : "Echo this, I’ve seen something similar"}
        </button>
      </div>
      <div className="links">
        <Link className="btn" href={`/story/${s.slug}`}>
          Full page
        </Link>
      </div>
    </StoryArticle>
  );
}
