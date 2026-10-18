"use client";

import { Autocomplete } from "@base-ui/react/autocomplete";
import { Field } from "@base-ui/react/field";
import { useMemo, useState } from "react";
import { loadTowns, searchTowns, type Town } from "../towns";

type Props = { defaultValue?: string; onPick: (town: Town) => void };

/**
 * "Town or area": free text, with suggestions from the town list. Picking one moves the pin there.
 * Anything can still be typed, for villages the list doesn't have.
 */
export function TownField({ defaultValue, onPick }: Props) {
  const [value, setValue] = useState(defaultValue ?? "");
  const [towns, setTowns] = useState<Town[]>([]);
  const items = useMemo(() => searchTowns(towns, value), [towns, value]);

  // The list loads on first focus, not with the page.
  const load = () => {
    if (!towns.length) loadTowns().then(setTowns, (err: unknown) => console.error(err));
  };

  return (
    <Field.Root className="field">
      <Field.Label>Town or area</Field.Label>
      <Autocomplete.Root
        name="place"
        items={items}
        filter={null}
        value={value}
        onValueChange={setValue}
        itemToStringValue={(t: Town) => t[0]}
      >
        <Autocomplete.Input placeholder="e.g. Munsiyari" required maxLength={80} autoComplete="off" onFocus={load} />
        <Autocomplete.Portal>
          <Autocomplete.Positioner className="select-positioner" sideOffset={6}>
            <Autocomplete.Popup className="select-popup town-popup">
              <Autocomplete.List>
                {(t: Town) => (
                  <Autocomplete.Item
                    key={`${t[0]}|${t[1]}`}
                    value={t}
                    className="select-item town-item"
                    onClick={() => onPick(t)}
                  >
                    <span>{t[0]}</span>
                    <small>{t[1]}</small>
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </Autocomplete.Root>
    </Field.Root>
  );
}
