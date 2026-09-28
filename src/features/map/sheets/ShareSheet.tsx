"use client";

import { useActionState, type ReactNode } from "react";
import { submitStory, type SubmitState } from "@/features/stories/submit";
import { CATEGORIES, CATEGORY_KEYS } from "@/lib/categories";
import { formatCoords } from "@/lib/geo";

type Props = { center: { lat: number; lon: number }; onClose: () => void };

/** The share form. The story is pinned where the ring is; the server blurs it to ~5 km. */
export function ShareSheet({ center, onClose }: Props) {
  const [state, action, pending] = useActionState<SubmitState, FormData>(submitStory, null);

  if (state?.ok) {
    return (
      <div className="done">
        <h2 className="s-title" id="sheetTitle">
          Your story is in the review queue
        </h2>
        <p className="prose" style={{ margin: 0 }}>
          Once it&apos;s approved, it appears on the map near {state.place}, and people nearby can echo it.
        </p>
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
      <form className="form" action={action} noValidate>
        <input type="hidden" name="lat" value={center.lat} />
        <input type="hidden" name="lon" value={center.lon} />
        <div className="hp" aria-hidden="true">
          <label htmlFor="fWebsite">Website</label>
          <input id="fWebsite" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="f2">
          <Field id="fCat" label="Category">
            <select id="fCat" name="category" defaultValue="sky">
              {CATEGORY_KEYS.map((k) => (
                <option key={k} value={k}>
                  {CATEGORIES[k].label}
                </option>
              ))}
            </select>
          </Field>
          <Field id="fWhere" label="Town or area">
            <input id="fWhere" name="place" placeholder="e.g. Munsiyari" required maxLength={80} />
          </Field>
          <Field id="fRegion" label="State and country">
            <input id="fRegion" name="region" placeholder="e.g. Uttarakhand, India" maxLength={80} />
          </Field>
        </div>
        <div className="f2">
          <Field id="fYear" label="Year">
            <input id="fYear" name="year" inputMode="numeric" placeholder="e.g. 2014" maxLength={4} />
          </Field>
          <Field id="fTime" label="Time of day">
            <input id="fTime" name="timeLabel" placeholder="e.g. around 2 am" maxLength={40} />
          </Field>
          <Field id="fWit" label="Who else saw it?">
            <input id="fWit" name="witnesses" placeholder="e.g. my brother and I" maxLength={80} />
          </Field>
        </div>
        <Field id="fStory" label="Your story">
          <textarea
            id="fStory"
            name="story"
            placeholder="Start with the moment you noticed something was wrong."
            required
            maxLength={6000}
            aria-describedby="fStoryHint"
          />
          <small id="fStoryHint">Leave a blank line between paragraphs.</small>
        </Field>
        <p className="pin">
          Pinned where the ring is now: <b>{formatCoords(center.lat, center.lon)}</b>. The map shows only a ~5 km area.
          To move the pin, close this and drag the map.
        </p>
        <ul className="rules">
          <li>Leave out real names and exact addresses.</li>
          <li>Nothing about crime, violence or anyone getting hurt.</li>
          <li>No links, phone numbers, remedies, rituals or charms.</li>
        </ul>
        {state && !state.ok && (
          <p className="error" role="alert">
            {state.error}
          </p>
        )}
        <div>
          <button className="btn primary" type="submit" disabled={pending}>
            {pending ? "Sending…" : "Send for review"}
          </button>
        </div>
      </form>
    </>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}
