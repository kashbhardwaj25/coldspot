"use client";

import { Field } from "@base-ui/react/field";
import type { ComponentProps, ReactNode } from "react";

type Common = { label: ReactNode; description?: ReactNode };

/** A labelled text input, with an optional hint linked to it for screen readers. */
export function TextField({ label, description, ...input }: Common & Omit<ComponentProps<"input">, "children">) {
  return (
    <Field.Root className="field">
      <Field.Label>{label}</Field.Label>
      <Field.Control {...input} />
      {description && <Field.Description className="field-hint">{description}</Field.Description>}
    </Field.Root>
  );
}

/** A labelled multi-line text box, with an optional hint. */
export function TextArea({ label, description, ...textarea }: Common & Omit<ComponentProps<"textarea">, "children">) {
  return (
    <Field.Root className="field">
      <Field.Label>{label}</Field.Label>
      <Field.Control render={<textarea {...textarea} />} />
      {description && <Field.Description className="field-hint">{description}</Field.Description>}
    </Field.Root>
  );
}
