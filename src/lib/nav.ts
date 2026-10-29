import { STORIES_ENABLED } from "./features";

type NavLink = {
  href: string;
  label: string;
  /** Only while People's stories are on. */ stories?: boolean;
  legal?: boolean;
  /** Lists every case, so it isn't prefetched: it loads when clicked (see HEAVY_PAGE). */ heavy?: boolean;
};

/** The site's links, in footer order. The footer shows them all; the map's list sheet shows the legal ones. */
const LINKS: NavLink[] = [
  { href: "/", label: "The map", heavy: true },
  { href: "/cases", label: "All famous cases", heavy: true },
  { href: "/places", label: "Places" },
  { href: "/my-stories", label: "My stories", stories: true },
  { href: "/privacy", label: "Privacy", legal: true },
  { href: "/terms", label: "Terms", legal: true },
];

export const SITE_LINKS = LINKS.filter((l) => !l.stories || STORIES_ENABLED);
export const LEGAL_LINKS = SITE_LINKS.filter((l) => l.legal);

/**
 * The map and the list of all cases each carry every famous case (hundreds of kilobytes). Next.js prefetches links
 * as they scroll into view, which would download them on every page that links there, so links to them pass
 * `prefetch={HEAVY_PAGE}` and load only when clicked.
 */
export const HEAVY_PAGE = false;
