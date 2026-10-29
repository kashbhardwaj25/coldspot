import Link from "next/link";
import { HEAVY_PAGE } from "@/lib/nav";
import { ArticleTitle } from "@/components/article";
import type { Place } from "@/lib/types";
import { MIN_PER_PLACE, placePath } from "./places";

/** Every country with encounters: the ones with their own page as links, the rest with a pointer to all cases. */
export function PlacesIndex({ places }: { places: Place[] }) {
  const pages = places.filter((p) => p.count >= MIN_PER_PLACE);
  const rest = places.length - pages.length;
  return (
    <article className="article">
      <ArticleTitle variant="page">Unexplained encounters around the world</ArticleTitle>
      <div className="prose">
        <p>
          Famous cases and people&apos;s stories by country, from strange lights over deserts to voices in old forts.
          Choose a place to see everything reported there.
        </p>
      </div>
      <div className="place-links">
        {pages.map((p) => (
          <Link key={p.key} href={placePath(p.key)}>
            {p.name} <b>{p.count}</b>
          </Link>
        ))}
      </div>
      {rest > 0 && (
        <div className="prose">
          <p>
            And encounters in {rest} more {rest === 1 ? "country" : "countries"}, listed with{" "}
            <Link href="/cases" prefetch={HEAVY_PAGE}>
              all famous cases
            </Link>
            .
          </p>
        </div>
      )}
    </article>
  );
}
