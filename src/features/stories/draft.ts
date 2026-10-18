/**
 * Keeps a half-written story while the writer signs in with Google, which leaves the page.
 * Stored in this browser only, and cleared once the story is sent or after a day.
 */

const KEY = "cs_share_draft";
const MAX_AGE = 24 * 60 * 60 * 1000;
/** The query string the sign-in returns to, so the map reopens the share form. */
export const RESUME_QUERY = "share=resume";
const FIELDS = ["category", "place", "region", "year", "timeLabel", "witnesses", "penName", "story"] as const;

type Field = (typeof FIELDS)[number];
export type ShareDraft = { lat: number; lon: number; fields: Partial<Record<Field, string>> };

export function saveDraft(form: FormData, center: { lat: number; lon: number }) {
  const fields: ShareDraft["fields"] = {};
  for (const f of FIELDS) {
    const v = form.get(f);
    if (typeof v === "string" && v) fields[f] = v;
  }
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...center, fields, savedAt: Date.now() }));
  } catch {
    // Storage can be blocked (private windows); the writer just starts again after signing in.
  }
}

/** The saved draft, if there is a recent one. */
export function loadDraft(): ShareDraft | null {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(KEY) ?? "null");
    if (!raw || typeof raw !== "object") return null;
    const d = raw as Record<string, unknown>;
    if (typeof d.lat !== "number" || typeof d.lon !== "number" || typeof d.savedAt !== "number") return null;
    if (Date.now() - d.savedAt > MAX_AGE || !d.fields || typeof d.fields !== "object") return null;
    const src = d.fields as Record<string, unknown>;
    const fields: ShareDraft["fields"] = {};
    for (const f of FIELDS) if (typeof src[f] === "string") fields[f] = src[f];
    return { lat: d.lat, lon: d.lon, fields };
  } catch {
    return null;
  }
}

export function clearDraft() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // Nothing to clear if storage is blocked.
  }
}
