import type { ReactNode } from "react";
import type { ShareDraft } from "@/features/stories/draft";
import { CATEGORIES, CATEGORY_KEYS } from "@/lib/categories";

type Props = { draft?: ShareDraft };

/** The share form's inputs, filled from a saved draft when the writer comes back from signing in. */
export function ShareFields({ draft }: Props) {
  const v = draft?.fields ?? {};
  return (
    <>
      <div className="f2">
        <Field id="fCat" label="Category">
          <select id="fCat" name="category" defaultValue={v.category ?? "sky"}>
            {CATEGORY_KEYS.map((k) => (
              <option key={k} value={k}>
                {CATEGORIES[k].label}
              </option>
            ))}
          </select>
        </Field>
        <Field id="fWhere" label="Town or area">
          <input id="fWhere" name="place" placeholder="e.g. Munsiyari" required maxLength={80} defaultValue={v.place} />
        </Field>
        <Field id="fRegion" label="State and country">
          <input
            id="fRegion"
            name="region"
            placeholder="e.g. Uttarakhand, India"
            maxLength={80}
            defaultValue={v.region}
          />
        </Field>
      </div>
      <div className="f2">
        <Field id="fYear" label="Year">
          <input
            id="fYear"
            name="year"
            inputMode="numeric"
            placeholder="e.g. 2014"
            maxLength={4}
            defaultValue={v.year}
          />
        </Field>
        <Field id="fTime" label="Time of day">
          <input id="fTime" name="timeLabel" placeholder="e.g. around 2 am" maxLength={40} defaultValue={v.timeLabel} />
        </Field>
        <Field id="fWit" label="Who else saw it?">
          <input
            id="fWit"
            name="witnesses"
            placeholder="e.g. my brother and I"
            maxLength={80}
            defaultValue={v.witnesses}
          />
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
          defaultValue={v.story}
        />
        <small id="fStoryHint">Leave a blank line between paragraphs.</small>
      </Field>
      <Field id="fPen" label="Pen name (optional)">
        <input
          id="fPen"
          name="penName"
          placeholder="Anonymous"
          maxLength={40}
          aria-describedby="fPenHint"
          defaultValue={v.penName}
        />
        <small id="fPenHint">Shown with your story. Leave it blank to appear as Anonymous.</small>
      </Field>
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
