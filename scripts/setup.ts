/**
 * Creates or migrates the SQLite database, syncs the famous cases from
 * seed-cases.ts (with their regions; cases removed from the file are deleted), syncs the sample stories from
 * seed-stories.ts the same way, and fills in missing story regions.
 * Safe to run more than once.
 *   npm run db:setup
 */
import { and, eq, isNull, notInArray } from "drizzle-orm";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { db, schema, sqlite } from "../src/db/client";
import { seedCases } from "../src/data/seed-cases";
import { seedStories } from "../src/data/seed-stories";
import { regionFor } from "../src/features/regions/lookup";

migrate(db, { migrationsFolder: "drizzle" });
console.log("✓ Database schema is up to date");

// Famous cases are curated in seed-cases.ts, so sync them by slug: new cases are added, edits are applied, and
// cases removed from the file are removed from the database (nothing else references them).
const removed = db.transaction((tx) => {
  for (const seed of seedCases) {
    // Cases in orbit or on the Moon belong to no country.
    const region =
      (seed.body ?? "earth") === "earth" ? regionFor(seed.lat, seed.lon) : { countryKey: null, stateKey: null };
    const c = { featured: false, body: "earth" as const, ...seed, ...region };
    tx.insert(schema.cases).values(c).onConflictDoUpdate({ target: schema.cases.slug, set: c }).run();
  }
  const slugs = seedCases.map((c) => c.slug);
  return tx.delete(schema.cases).where(notInArray(schema.cases.slug, slugs)).run().changes;
});
console.log(`✓ Synced ${seedCases.length} famous cases${removed ? `, removed ${removed}` : ""}`);

// Sample stories are synced by slug too, touching only rows marked isSample. A sample's status is kept, so one
// hidden at /admin stays hidden.
const samplesRemoved = db.transaction((tx) => {
  const slugs: string[] = [];
  for (const sample of seedStories) {
    const slug = sample.slug;
    if (!slug) throw new Error(`A sample story has no slug: ${sample.hook}`);
    slugs.push(slug);
    const seed = { ...sample, ...regionFor(sample.lat, sample.lon) };
    const existing = tx
      .select({ isSample: schema.stories.isSample, status: schema.stories.status })
      .from(schema.stories)
      .where(eq(schema.stories.slug, slug))
      .get();
    if (!existing) tx.insert(schema.stories).values(seed).run();
    else if (existing.isSample) {
      const edit = { ...seed, status: existing.status };
      tx.update(schema.stories).set(edit).where(eq(schema.stories.slug, slug)).run();
    }
  }
  const stale = and(eq(schema.stories.isSample, true), notInArray(schema.stories.slug, slugs));
  return tx.delete(schema.stories).where(stale).run().changes;
});
console.log(`✓ Synced ${seedStories.length} sample stories${samplesRemoved ? `, removed ${samplesRemoved}` : ""}`);

// Stories get their region when they're submitted; this fills in older ones and the samples.
const missing = db
  .select({ id: schema.stories.id, lat: schema.stories.lat, lon: schema.stories.lon })
  .from(schema.stories)
  .where(isNull(schema.stories.countryKey))
  .all();
db.transaction((tx) => {
  for (const s of missing) {
    tx.update(schema.stories).set(regionFor(s.lat, s.lon)).where(eq(schema.stories.id, s.id)).run();
  }
});
if (missing.length) console.log(`✓ Added regions to ${missing.length} stories`);

sqlite.close();
