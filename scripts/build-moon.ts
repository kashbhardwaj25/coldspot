/**
 * Builds public/moon.json: the outlines of the Moon's maria (its dark "seas"), drawn on the Moon globe the way
 * coastlines are drawn on Earth's. Source: NASA's LROC global mare map (Nelson et al., 2014), between 65°N and
 * 65°S, from https://data.lroc.im-ldi.com/lroc/view_rdr/SHAPEFILE_LROC_GLOBAL_MARE. Download and unzip
 * LROC_GLOBAL_MARE_180.ZIP, then:
 *   npx tsx scripts/build-moon.ts path/to/LROC_GLOBAL_MARE_180.SHP
 */
import { readFileSync, writeFileSync } from "node:fs";
import type { MultiPolygon, Position } from "geojson";
import { topology } from "topojson-server";
import type { Topology } from "topojson-specification";

/** Twice the planar signed area in square degrees: positive for clockwise rings (outer rings, as d3 expects). */
function area(ring: Position[]) {
  let sum = 0;
  for (let i = 0; i < ring.length - 1; i++) {
    const [x1 = 0, y1 = 0] = ring[i] ?? [];
    const [x2 = 0, y2 = 0] = ring[i + 1] ?? [];
    sum += (x2 - x1) * (y2 + y1);
  }
  return sum;
}

/** Douglas–Peucker: drops points closer than `tol` degrees to the line through their neighbours. */
function thin(ring: Position[], tol: number): Position[] {
  const keep = new Uint8Array(ring.length);
  keep[0] = keep[ring.length - 1] = 1;
  const stack: [number, number][] = [[0, ring.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop() ?? [0, 0];
    const [ax = 0, ay = 0] = ring[a] ?? [];
    const [bx = 0, by = 0] = ring[b] ?? [];
    const len = Math.hypot(bx - ax, by - ay);
    let far = -1;
    let max = tol;
    for (let i = a + 1; i < b; i++) {
      const [px = 0, py = 0] = ring[i] ?? [];
      // A closed ring starts and ends on the same point; measure from that point instead of a line.
      const d = len ? Math.abs((bx - ax) * (ay - py) - (ax - px) * (by - ay)) / len : Math.hypot(px - ax, py - ay);
      if (d > max) [far, max] = [i, d];
    }
    if (far < 0) continue;
    keep[far] = 1;
    stack.push([a, far], [far, b]);
  }
  return ring.filter((_, i) => keep[i]);
}

/** How far a simplified outline may stray, in degrees (about 4.5 km on the Moon): smooth at the closest zoom. */
const TOLERANCE = 0.15;

/** Patches smaller than this (in square degrees) can't be seen even at the closest zoom, so they're dropped. */
const MIN_AREA = 1;

/** Every polygon in an ESRI shapefile's polygon records (shape type 5): rings of [lon, lat], outer ring first. */
function readPolygons(buf: Buffer): Position[][][] {
  const out: Position[][][] = [];
  let at = 100; // after the file header
  while (at < buf.length) {
    const words = buf.readInt32BE(at + 4);
    const rec = at + 8;
    at = rec + words * 2;
    if (buf.readInt32LE(rec) !== 5) continue;
    const numParts = buf.readInt32LE(rec + 36);
    const numPoints = buf.readInt32LE(rec + 40);
    const starts = Array.from({ length: numParts }, (_, i) => buf.readInt32LE(rec + 44 + i * 4));
    const pts = rec + 44 + numParts * 4;
    const polygons: Position[][][] = [];
    starts.forEach((start, i) => {
      const end = starts[i + 1] ?? numPoints;
      const raw: Position[] = [];
      for (let p = start; p < end; p++) raw.push([buf.readDoubleLE(pts + p * 16), buf.readDoubleLE(pts + p * 16 + 8)]);
      const ring = thin(raw, TOLERANCE);
      if (ring.length < 4) return;
      // An outer ring starts a polygon; a hole belongs to the polygon before it.
      const a = area(ring);
      if (Math.abs(a) / 2 < MIN_AREA) return;
      if (a > 0 || polygons.length === 0) polygons.push([ring]);
      else polygons[polygons.length - 1]?.push(ring);
    });
    out.push(...polygons);
  }
  return out;
}

const file = process.argv[2];
if (!file) throw new Error("Pass the path to LROC_GLOBAL_MARE_180.SHP");

const coordinates = readPolygons(readFileSync(file));
const maria: MultiPolygon = { type: "MultiPolygon", coordinates };
const topo = topology({ land: maria }, 1e5) as Topology;
const points = topo.arcs.reduce((n, arc) => n + arc.length, 0);
const json = JSON.stringify(topo);
writeFileSync("public/moon.json", json);
console.log(
  `✓ public/moon.json: ${coordinates.length} polygons, ${points} points, ${(json.length / 1024).toFixed(0)} KB`,
);
