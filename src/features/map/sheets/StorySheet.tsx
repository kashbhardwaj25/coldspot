"use client";

import Link from "next/link";
import { ShareButton } from "@/components/ui/ShareButton";
import { useState, useTransition } from "react";
import { signInWithGoogle, useSignedIn } from "@/features/accounts/client";
import { ReportButton } from "@/features/reports/ReportButton";
import { toggleEcho } from "@/features/stories/echoes";
import { StoryArticle } from "@/features/stories/StoryArticle";
import type { StoryItem } from "@/lib/types";
import type { EchoState, SetEchoState } from "../state";

type Props = { s: StoryItem; echoState: EchoState; setEchoState: SetEchoState };

/** A person's story in a sheet, with the echo button. Echoing needs sign-in, one echo per account. */
export function StorySheet({ s, echoState, setEchoState }: Props) {
  const [pending, start] = useTransition();
  const signedIn = useSignedIn();
  const [signInError, setSignInError] = useState<string | null>(null);
  const e = echoState[s.slug] ?? { echoes: s.echoes, mine: false };
  const onEcho = () =>
    start(async () => {
      // Signed out: sign in and come back to this story.
      if (!signedIn) return setSignInError(await signInWithGoogle(`/?story=${s.slug}`));
      const r = await toggleEcho(s.slug);
      if (r) setEchoState((prev) => ({ ...prev, [s.slug]: r }));
    });

  return (
    <StoryArticle s={s} variant="sheet" lastField={["Location shown", "Area only, about 5 km"]}>
      <div className="same">
        <p>
          <b>{e.echoes} echoes</b> · people who&apos;ve seen something similar.
        </p>
        <button
          type="button"
          className="btn"
          aria-pressed={e.mine}
          onClick={onEcho}
          disabled={pending || signedIn === null}
        >
          {e.mine ? "Echoed" : signedIn === false ? "Sign in to echo this" : "Echo this, I’ve seen something similar"}
        </button>
        {signInError && (
          <p className="error" role="alert">
            {signInError}
          </p>
        )}
      </div>
      <div className="links">
        <Link className="btn" href={`/story/${s.slug}`}>
          Full page
        </Link>
        <ShareButton path={`/story/${s.slug}`} title={`${s.place}: a story on Uncanny Map`} text={s.hook} />
        <ReportButton slug={s.slug} returnTo={`/?story=${s.slug}`} />
      </div>
    </StoryArticle>
  );
}
