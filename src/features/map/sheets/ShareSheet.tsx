"use client";

import Link from "next/link";
import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { signInWithGoogle, useSignedIn } from "@/features/accounts/client";
import { clearDraft, RESUME_QUERY, saveDraft, type ShareDraft } from "@/features/stories/draft";
import { submitStory, type SubmitState } from "@/features/stories/submit";
import { formatCoords } from "@/lib/geo";
import { ShareFields } from "./ShareFields";

type Props = { center: { lat: number; lon: number }; draft?: ShareDraft; onClose: () => void };

/** The share form. The story is pinned where the ring is; the server blurs it to ~5 km. Sending needs sign-in. */
export function ShareSheet({ center, draft, onClose }: Props) {
  const [state, action, pending] = useActionState<SubmitState, FormData>(submitStory, null);
  const signedIn = useSignedIn();
  const formRef = useRef<HTMLFormElement>(null);
  const [signInError, setSignInError] = useState<string | null>(null);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (state?.ok) clearDraft();
  }, [state]);

  // Submitting through a transition rather than `action={…}` keeps what was typed if the server rejects it:
  // React resets a form after a form action runs.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    startTransition(() => action(data));
  };

  // Google sign-in leaves the page, so keep the draft and reopen the form on the way back.
  const signIn = async () => {
    if (!formRef.current) return;
    saveDraft(new FormData(formRef.current), center);
    setLeaving(true);
    const error = await signInWithGoogle(`/?${RESUME_QUERY}`);
    if (error) {
      setSignInError(error);
      setLeaving(false);
    }
  };

  if (state?.ok) {
    return (
      <div className="done">
        <h2 className="s-title" id="sheetTitle">
          Your story is in the review queue
        </h2>
        <div className="prose" style={{ margin: 0 }}>
          <p>
            Once it&apos;s approved, it appears on the map near {state.place}, where others who&apos;ve seen something
            similar can echo it. You can follow it in <Link href="/my-stories">My stories</Link>.
          </p>
        </div>
        <button type="button" className="btn" onClick={onClose}>
          Back to the map
        </button>
      </div>
    );
  }

  const error = signInError ?? (state && !state.ok ? state.error : null);
  return (
    <>
      <div>
        <h2 className="s-title" id="sheetTitle">
          What did you see or hear?
        </h2>
        <div className="s-sub">
          <span>Stories are reviewed before they appear on the map.</span>
        </div>
      </div>
      <form className="form" ref={formRef} onSubmit={onSubmit} noValidate>
        <input type="hidden" name="lat" value={center.lat} />
        <input type="hidden" name="lon" value={center.lon} />
        <div className="hp" aria-hidden="true">
          <label htmlFor="fWebsite">Website</label>
          <input id="fWebsite" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <ShareFields draft={draft} />
        <p className="pin">
          Pinned where the ring is now: <b>{formatCoords(center.lat, center.lon)}</b>. The map shows only a ~5 km area.
          To move the pin, close this and drag the map.
        </p>
        <ul className="rules">
          <li>Leave out real names and exact addresses.</li>
          <li>Nothing about crime, violence or anyone getting hurt.</li>
          <li>No links, phone numbers, remedies, rituals or charms.</li>
        </ul>
        {error && (
          <p className="error" role="alert">
            {error}
          </p>
        )}
        {signedIn === false ? (
          <div className="signin-send">
            <button className="btn primary" type="button" onClick={signIn} disabled={leaving}>
              {leaving ? "Opening Google…" : "Sign in with Google to send"}
            </button>
            <small>
              Sign-in keeps out spam. Your story shows your pen name, never your name or email. What you&apos;ve written
              is kept while you sign in.
            </small>
          </div>
        ) : (
          <div>
            <button className="btn primary" type="submit" disabled={pending || signedIn === null}>
              {pending ? "Sending…" : "Send for review"}
            </button>
          </div>
        )}
      </form>
    </>
  );
}
