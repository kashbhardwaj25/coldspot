import type { Icon } from "@/components/brand";
import { STORIES_ENABLED } from "@/lib/features";
import type { World } from "@/lib/bodies";
import type { Mode } from "@/lib/types";

/** A header button: an icon with a label that hides at phone width, or the account button (its own component). */
export type HeaderAction =
  | {
      id: string;
      icon: keyof typeof Icon;
      /** Read out, and shown beside the icon on wider screens. */
      label: string;
      text: string;
      title?: string;
      pressed?: boolean;
      primary?: boolean;
      onClick: () => void;
    }
  | { id: "account" };

type Input = {
  mode: Mode;
  world: World;
  soundOn: boolean;
  onShare: () => void;
  onSound: () => void;
  onRandom: () => void;
  onList: () => void;
  onWorld: () => void;
};

/** The header's buttons, in order, for the current mode. MapHeader only renders this list. */
export function headerActions(p: Input): HeaderAction[] {
  const actions: (HeaderAction | false)[] = [
    p.mode === "people" && {
      id: "share",
      icon: "plus",
      label: "Share a story",
      text: "Share a story",
      primary: true,
      onClick: p.onShare,
    },
    STORIES_ENABLED && { id: "account" },
    {
      id: "sound",
      icon: "sound",
      label: "Sound",
      text: p.soundOn ? "Sound on" : "Sound off",
      title: "Static and ambient sound",
      pressed: p.soundOn,
      onClick: p.onSound,
    },
    p.mode === "famous" && {
      id: "world",
      icon: p.world === "earth" ? "moon" : "earth",
      label: p.world === "earth" ? "Visit the Moon" : "Back to Earth",
      text: p.world === "earth" ? "Moon" : "Earth",
      title: p.world === "earth" ? "Cases on the Moon" : "Back to Earth",
      onClick: p.onWorld,
    },
    {
      id: "random",
      icon: "shuffle",
      label: "Random",
      text: "Random",
      title: "Fly somewhere random",
      onClick: p.onRandom,
    },
    { id: "list", icon: "list", label: "List", text: "List", title: "Everything as a list", onClick: p.onList },
  ];
  return actions.filter((a): a is HeaderAction => a !== false);
}
