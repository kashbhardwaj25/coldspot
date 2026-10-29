import Link from "next/link";
import { HEAVY_PAGE } from "@/lib/nav";

type Props = { slug: string; title: string; total: number };

/** The end of a case page: an invitation to the globe for readers who arrived from search. */
export function MapInvite({ slug, title, total }: Props) {
  return (
    <aside className="map-invite" aria-labelledby="mapInviteTitle">
      <p className="map-invite-kicker">Uncanny Map</p>
      <h2 id="mapInviteTitle">
        {title} is one of {total.toLocaleString("en")} strange cases on the map.
      </h2>
      <p>
        Drag the globe, and whatever reaches the ring tunes in: lights in the sky, creatures, voices and places where
        something keeps happening, from every corner of the world.
      </p>
      <div className="links">
        <Link className="btn primary" href={`/?case=${slug}`} prefetch={HEAVY_PAGE}>
          Explore the map from here
        </Link>
        <Link className="btn" href="/cases" prefetch={HEAVY_PAGE}>
          Browse all cases
        </Link>
      </div>
    </aside>
  );
}
