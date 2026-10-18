"use client";

import { startTransition, useActionState, type CSSProperties, type FormEvent } from "react";
import { SelectField } from "@/components/ui/SelectField";
import { TextArea, TextField } from "@/components/ui/TextField";
import { CATEGORIES, CATEGORY_KEYS } from "@/lib/categories";
import { approve, reject, type ReviewState } from "./actions";
import type { AdminStory } from "./queries";
import { StoryMeta } from "./StoryMeta";

const CATEGORY_OPTIONS = CATEGORY_KEYS.map((k) => ({ value: k, label: CATEGORIES[k].label }));

/** A waiting story with everything a reviewer can fix before publishing: category, place, text and pen name. */
export function ReviewCard({ story: s }: { story: AdminStory }) {
  const [state, action, pending] = useActionState<ReviewState, FormData>(approve, null);

  // Through a transition, so the reviewer's edits stay in the form if the server finds a problem.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    startTransition(() => action(data));
  };

  return (
    <article className="review" style={{ "--tc": CATEGORIES[s.category].color } as CSSProperties}>
      <StoryMeta story={s} />
      <form id={`review-${s.id}`} onSubmit={onSubmit} className="form">
        <input type="hidden" name="id" value={s.id} />
        <div className="f2">
          <SelectField label="Category" name="category" options={CATEGORY_OPTIONS} defaultValue={s.category} />
          <TextField label="Place" name="place" defaultValue={s.place} required maxLength={80} />
          <TextField label="Region" name="region" defaultValue={s.region} maxLength={80} />
        </div>
        <TextArea
          label="Opening line (shown in the tuner card)"
          name="hook"
          defaultValue={s.hook}
          style={{ minHeight: 70 }}
          maxLength={240}
          required
        />
        <TextArea
          label="Story"
          name="story"
          defaultValue={s.body.join("\n\n")}
          maxLength={6000}
          required
          description="Fix typos and remove anything that breaks the rules. Blank lines separate paragraphs."
        />
        <TextField
          label="Pen name"
          name="penName"
          defaultValue={s.penName ?? ""}
          placeholder="Anonymous"
          maxLength={40}
          description="Clear it if it looks like a real name."
        />
        {state?.error && (
          <p className="error" role="alert">
            {state.error}
          </p>
        )}
      </form>
      {/* Reject is its own form, so the edit form's submit handler only ever approves. */}
      <form action={reject} className="review-actions">
        <input type="hidden" name="id" value={s.id} />
        <button className="btn primary" type="submit" form={`review-${s.id}`} disabled={pending}>
          {pending ? "Publishing…" : "Approve and publish"}
        </button>
        <button className="btn danger" type="submit" disabled={pending}>
          Reject
        </button>
      </form>
    </article>
  );
}
