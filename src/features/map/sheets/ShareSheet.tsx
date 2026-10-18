"use client";

import Link from "next/link";
import type { ShareDraft } from "@/features/stories/draft";
import { Turnstile } from "@/features/stories/Turnstile";
import type { CaseSummary } from "@/lib/types";
import { PinPicker } from "./PinPicker";
import { ShareFields } from "./ShareFields";
import { useShareForm } from "./useShareForm";

type Props = {
  center: { lat: number; lon: number };
  draft?: ShareDraft;
  /** Famous cases, shown as landmarks on the pin picker. */
  cases: CaseSummary[];
  /** Cloudflare Turnstile site key, or null when the spam check isn't set up. */
  turnstileSiteKey: string | null;
  onClose: () => void;
};

/** The share form. The pin starts where the ring is and can be moved on the picker; the server blurs it to ~5 km. */
export function ShareSheet({ center, draft, cases, turnstileSiteKey, onClose }: Props) {
  const form = useShareForm({ center, cases });
  const { formRef, signedIn } = form;

  if (form.sent) {
    return (
      <div className="done">
        <h2 className="s-title" id="sheetTitle">
          Your story is in the review queue
        </h2>
        <div className="prose">
          <p>
            Once it&apos;s approved, it appears on the map near {form.sent}, where others who&apos;ve seen something
            similar can echo it. You can follow it in <Link href="/my-stories">My stories</Link>.
          </p>
        </div>
        <button type="button" className="btn" onClick={onClose}>
          Back to the map
        </button>
      </div>
    );
  }

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
      <form className="form" ref={formRef} onSubmit={form.onSubmit} noValidate>
        <div className="hp" aria-hidden="true">
          <label htmlFor="fWebsite">Website</label>
          <input id="fWebsite" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <ShareFields draft={draft} onPickTown={form.pickTown} />
        <PinPicker initial={center} landmarks={form.landmarks} target={form.target} />
        <ul className="rules">
          <li>Leave out real names and exact addresses.</li>
          <li>Nothing about crime, violence or anyone getting hurt.</li>
          <li>No links, phone numbers, remedies, rituals or charms.</li>
        </ul>
        {form.error && (
          <p className="error" role="alert">
            {form.error}
          </p>
        )}
        {signedIn === false ? (
          <div className="signin-send">
            <button className="btn primary" type="button" onClick={form.signIn} disabled={form.leaving}>
              {form.leaving ? "Opening Google…" : "Sign in with Google to send"}
            </button>
            <small>
              Sign-in keeps out spam. Your story shows your pen name, never your name or email. What you&apos;ve written
              is kept while you sign in.
            </small>
          </div>
        ) : (
          <div className="send">
            {signedIn && turnstileSiteKey && <Turnstile siteKey={turnstileSiteKey} resetKey={form.resetKey} />}
            <button className="btn primary" type="submit" disabled={form.pending || signedIn === null}>
              {form.pending ? "Sending…" : "Send for review"}
            </button>
          </div>
        )}
      </form>
    </>
  );
}
