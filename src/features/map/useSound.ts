import { useEffect, useState } from "react";
import { Radio } from "@/features/globe/radio";

/** Static and hum. Off until the visitor turns it on, because browsers only allow audio after a click. */
export function useSound() {
  const [radio] = useState(() => new Radio());
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => () => radio.close(), [radio]);

  const toggleSound = async (tuned: boolean) => {
    const on = await radio.toggle();
    setSoundOn(on);
    if (on && tuned) radio.burst();
  };

  return { radio, soundOn, toggleSound };
}
