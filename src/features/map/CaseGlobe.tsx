"use client";

import Link from "next/link";
import type { EngineItem } from "@/features/globe/engine";
import { formatCoords } from "@/lib/geo";
import { Ring } from "./parts";
import { useCaseGlobe } from "./useCaseGlobe";

type Props = {
  slug: string;
  title: string;
  lat: number;
  lon: number;
  /** This case first, then the cases around it. */
  markers: EngineItem[];
  total: number;
};

/**
 * A small globe at the top of a case page, turned to where the case happened, so visitors from search see what
 * the site is. It's a picture, not a control: the whole thing links to the case on the map.
 */
export function CaseGlobe({ slug, title, lat, lon, markers, total }: Props) {
  const globe = useCaseGlobe({ lat, lon, markers });
  // Refs stay standalone variables, as the React Compiler rules require.
  const { baseRef, dotsRef } = globe;
  return (
    <Link className="case-globe" href={`/?case=${slug}`} aria-label={`Tune in to ${title} on the map`}>
      <div className="case-globe-view">
        <canvas ref={baseRef} aria-hidden="true" />
        <canvas ref={dotsRef} aria-hidden="true" />
        <Ring ref={null} on={globe.tuned} />
      </div>
      <span className="case-globe-bar">
        <span aria-hidden="true">{formatCoords(lat, lon)}</span>
        <span className="case-globe-cta">
          Tune in on the map <span aria-hidden="true">→</span>
        </span>
      </span>
      <span className="case-globe-count">
        One of {total.toLocaleString("en")} strange cases on a globe you can drag
      </span>
    </Link>
  );
}
