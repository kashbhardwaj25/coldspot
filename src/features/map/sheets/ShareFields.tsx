import { Checkbox } from "@base-ui/react/checkbox";
import Link from "next/link";
import { SelectField } from "@/components/ui/SelectField";
import { TextArea, TextField } from "@/components/ui/TextField";
import type { ShareDraft } from "@/features/stories/draft";
import { CATEGORIES, CATEGORY_KEYS } from "@/lib/categories";
import type { Town } from "../towns";
import { TownField } from "./TownField";

const CATEGORY_OPTIONS = CATEGORY_KEYS.map((k) => ({ value: k, label: CATEGORIES[k].label }));

type Props = { draft?: ShareDraft; onPickTown: (town: Town) => void };

/** The share form's inputs, filled from a saved draft when the writer comes back from signing in. */
export function ShareFields({ draft, onPickTown }: Props) {
  const v = draft?.fields ?? {};
  return (
    <>
      <div className="f2">
        <SelectField label="Category" name="category" options={CATEGORY_OPTIONS} defaultValue={v.category ?? "sky"} />
        <TownField defaultValue={v.place} onPick={onPickTown} />
        <TextField
          label="State and country"
          name="region"
          placeholder="e.g. Kerala, India"
          maxLength={80}
          defaultValue={v.region}
          description="Leave it blank to fill it in from the pin."
        />
      </div>
      <div className="f2">
        <TextField
          label="Year"
          name="year"
          inputMode="numeric"
          placeholder="e.g. 2014"
          maxLength={4}
          defaultValue={v.year}
        />
        <TextField
          label="Time of day"
          name="timeLabel"
          placeholder="e.g. around 2 am"
          maxLength={40}
          defaultValue={v.timeLabel}
        />
        <TextField
          label="Who else saw it?"
          name="witnesses"
          placeholder="e.g. my brother and I"
          maxLength={80}
          defaultValue={v.witnesses}
        />
      </div>
      <TextArea
        label="Your story"
        name="story"
        placeholder="Start with the moment you noticed something was wrong."
        required
        maxLength={6000}
        defaultValue={v.story}
        description="Leave a blank line between paragraphs."
      />
      <TextField
        label="Pen name (optional)"
        name="penName"
        placeholder="Anonymous"
        maxLength={40}
        defaultValue={v.penName}
        description="Shown with your story. Leave it blank to appear as Anonymous."
      />
      <label className="consent">
        <Checkbox.Root name="consent" className="checkbox">
          <Checkbox.Indicator className="checkbox-tick">✓</Checkbox.Indicator>
        </Checkbox.Root>
        <span>
          I agree to the <Link href="/terms">terms of use</Link> and the <Link href="/privacy">privacy policy</Link>,
          and I&apos;m happy for Coldspot to publish my story.
        </span>
      </label>
    </>
  );
}
