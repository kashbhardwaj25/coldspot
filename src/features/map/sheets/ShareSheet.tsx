"use client";

import Link from "next/link";
import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { signInWithGoogle, useSignedIn } from "@/features/accounts/client";
import { clearDraft, RESUME_QUERY, saveDraft, type ShareDraft } from "@/features/stories/draft";
import { submitStory, type SubmitState } from "@/features/stories/submit";
import { Turnstile } from "@/features/stories/Turnstile";
import { PinPicker } from "./PinPicker";
import { ShareFields } from "./ShareFields";

type Props = {
  center: { lat: number; lon: number };
  draft?: ShareDraft;
  /** Cloudflare Turnstile site key, or null when the spam check isn't set up. */
  turnstileSiteKey: string | null;
  onClose: () => void;
};

/** The share form. The pin starts where the ring is and can be moved on the picker; the server blurs it to ~5 km. */
export function ShareSheet({ center, draft, turnstileSiteKey, onClose }: Props) {
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
    // Keep the pin where the writer moved it on the picker.
    const data = new FormData(formRef.current);
    saveDraft(data, { lat: Number(data.get("lat")) || center.lat, lon: Number(data.get("lon")) || center.lon });
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
        <div className="hp" aria-hidden="true">
          <label htmlFor="fWebsite">Website</label>
          <input id="fWebsite" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <ShareFields draft={draft} />
        <PinPicker initial={center} />
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
          <div className="send">
            {signedIn && turnstileSiteKey && <Turnstile siteKey={turnstileSiteKey} resetKey={state} />}
            <button className="btn primary" type="submit" disabled={pending || signedIn === null}>
              {pending ? "Sending…" : "Send for review"}
            </button>
          </div>
        )}
      </form>
    </>
  );
}
