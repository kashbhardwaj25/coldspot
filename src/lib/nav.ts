import { STORIES_ENABLED } from "./features";

type NavLink = {
  href: string;
  label: string;
  /** Only while People's stories are on. */ stories?: boolean;
  legal?: boolean;
};

/** The site's links, in footer order. The footer shows them all; the map's list sheet shows the legal ones. */
const LINKS: NavLink[] = [
  { href: "/", label: "The map" },
  { href: "/cases", label: "All famous cases" },
  { href: "/places", label: "Places" },
  { href: "/my-stories", label: "My stories", stories: true },
  { href: "/privacy", label: "Privacy", legal: true },
  { href: "/terms", label: "Terms", legal: true },
];

export const SITE_LINKS = LINKS.filter((l) => !l.stories || STORIES_ENABLED);
export const LEGAL_LINKS = SITE_LINKS.filter((l) => l.legal);
