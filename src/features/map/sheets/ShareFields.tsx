import { Checkbox } from "@base-ui/react/checkbox";
import Link from "next/link";
import { Fragment } from "react";
import { SelectField } from "@/components/ui/SelectField";
import { TextArea, TextField } from "@/components/ui/TextField";
import type { ShareDraft } from "@/features/stories/draft";
import type { Town } from "../towns";
import { SHARE_FORM, type FieldConfig } from "./shareForm";
import { StoryPrompt } from "./StoryPrompt";
import { TownField } from "./TownField";
import { Icon } from "@/components/brand";

type Props = { draft?: ShareDraft; onPickTown: (town: Town) => void };

/** The share form's inputs, rendered from SHARE_FORM and filled from a saved draft after signing in. */
export function ShareFields({ draft, onPickTown }: Props) {
  const values = draft?.fields ?? {};
  const field = (f: FieldConfig) => {
    const value = values[f.name];
    switch (f.kind) {
      case "select":
        return <SelectField key={f.name} {...f} defaultValue={value ?? f.fallback} />;
      case "town":
        return <TownField key={f.name} defaultValue={value} onPick={onPickTown} />;
      case "textarea": {
        const { kind: _kind, prompts, ...props } = f;
        return (
          <Fragment key={f.name}>
            {prompts && <StoryPrompt />}
            <TextArea {...props} defaultValue={value} />
          </Fragment>
        );
      }
      case "text": {
        const { kind: _kind, prompts: _prompts, ...props } = f;
        return <TextField key={f.name} {...props} defaultValue={value} />;
      }
    }
  };
  return (
    <>
      {SHARE_FORM.map((row) =>
        row.length > 1 ? (
          <div className="f2" key={row.map((f) => f.name).join()}>
            {row.map(field)}
          </div>
        ) : (
          row.map(field)
        ),
      )}
      <label className="consent">
        <Checkbox.Root name="consent" className="checkbox">
          <Checkbox.Indicator className="checkbox-tick">{Icon.check}</Checkbox.Indicator>
        </Checkbox.Root>
        <span>
          I agree to the <Link href="/terms">terms of use</Link> and the <Link href="/privacy">privacy policy</Link>,
          and I&apos;m happy for Uncanny Map to publish my story.
        </span>
      </label>
    </>
  );
}
