import { CATEGORIES } from "@/lib/categories";
import type { CaseItem } from "@/lib/types";

/** Shown in search results and on the home page's structured data. */
export const SITE_DESCRIPTION =
  "Famous unexplained cases from around the world on one globe: strange lights, visitors, creatures, sounds and places, with the explanations offered.";

/** Structured data for a case page: an article about a place, plus breadcrumbs. */
export function caseJsonLd(c: CaseItem, base: string) {
  const url = `${base}/case/${c.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: c.title,
      description: c.hook,
      url,
      mainEntityOfPage: url,
      inLanguage: "en",
      articleSection: CATEGORIES[c.category].label,
      // Coordinates on the Moon, or under an orbit, would read as a place on Earth, so only Earth cases get them.
      about: {
        "@type": "Place",
        name: c.region,
        ...(c.body === "earth" && { geo: { "@type": "GeoCoordinates", latitude: c.lat, longitude: c.lon } }),
      },
      publisher: { "@type": "Organization", name: "Uncanny Map", url: base },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Uncanny Map", item: base },
        { "@type": "ListItem", position: 2, name: "All cases", item: `${base}/cases` },
        { "@type": "ListItem", position: 3, name: c.title, item: url },
      ],
    },
  ];
}

/** Structured data for the site as a whole, on the home page. */
export function siteJsonLd(base: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Uncanny Map",
    alternateName: "Uncanny Map: something happened here",
    url: base,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
  };
}
