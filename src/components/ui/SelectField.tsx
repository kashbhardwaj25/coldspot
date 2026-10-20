"use client";

import { Select } from "@base-ui/react/select";
import { Icon } from "@/components/brand";

type Option = { value: string; label: string };
type Props = { label: string; name: string; options: Option[]; defaultValue: string };

/** A labelled dropdown styled like the rest of the site. Submits with forms through a hidden input. */
export function SelectField({ label, name, options, defaultValue }: Props) {
  return (
    <Select.Root name={name} items={options} defaultValue={defaultValue}>
      <div className="field">
        <Select.Label className="label">{label}</Select.Label>
        <Select.Trigger className="select-trigger">
          <Select.Value />
          <Select.Icon className="select-icon">
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <path d="M3 4.5 6 7.5 9 4.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </Select.Icon>
        </Select.Trigger>
      </div>
      <Select.Portal>
        <Select.Positioner className="select-positioner" sideOffset={6}>
          <Select.Popup className="select-popup">
            <Select.List>
              {options.map((o) => (
                <Select.Item key={o.value} value={o.value} className="select-item">
                  <Select.ItemText>{o.label}</Select.ItemText>
                  <Select.ItemIndicator className="select-check">{Icon.check}</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
