import type { CSSProperties } from "react";
import { CATEGORIES } from "@/lib/categories";
import { approve, reject } from "./actions";
import type { PendingStory } from "./queries";

/** One pending story in the review queue, with the fields a reviewer can fix before publishing. */
export function ReviewCard({ story: s }: { story: PendingStory }) {
  return (
    <article className="review" style={{ "--tc": CATEGORIES[s.category].color } as CSSProperties}>
      <div className="row">
        <span className="tag">
          <i />
          {CATEGORIES[s.category].label}
        </span>
        <span className="freq">
          #{s.id} · {s.createdAt.toLocaleString("en-IN")} · {s.lat.toFixed(2)}, {s.lon.toFixed(2)}
        </span>
      </div>
      <div className="prose">
        {s.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="meta">
        {s.year && <span>Year: {s.year}</span>}
        {s.timeLabel && <span>Time: {s.timeLabel}</span>}
        {s.witnesses && <span>Witnesses: {s.witnesses}</span>}
      </div>
      <form action={approve} className="form">
        <input type="hidden" name="id" value={s.id} />
        <div className="f2">
          <div className="field">
            <label htmlFor={`place-${s.id}`}>Place</label>
            <input id={`place-${s.id}`} name="place" defaultValue={s.place} required />
          </div>
          <div className="field">
            <label htmlFor={`region-${s.id}`}>Region</label>
            <input id={`region-${s.id}`} name="region" defaultValue={s.region} />
          </div>
        </div>
        <div className="field">
          <label htmlFor={`hook-${s.id}`}>Opening line (shown in the tuner card)</label>
          <textarea id={`hook-${s.id}`} name="hook" defaultValue={s.hook} style={{ minHeight: 70 }} required />
        </div>
        <div className="review-actions">
          <button className="btn primary" type="submit">
            Approve and publish
          </button>
          <button className="btn danger" type="submit" formAction={reject} formNoValidate>
            Reject
          </button>
        </div>
      </form>
    </article>
  );
}
