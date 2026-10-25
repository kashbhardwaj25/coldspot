/**
 * Creates or migrates the SQLite database, syncs the famous cases from
 * seed-cases.ts (with their regions; cases removed from the file are deleted), seeds sample stories if there are none, and fills in missing story regions.
 * Safe to run more than once.
 *   npm run db:setup
 */
import { count, eq, isNull, notInArray } from "drizzle-orm";
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
    const c = { featured: false, ...seed, ...regionFor(seed.lat, seed.lon) };
    tx.insert(schema.cases).values(c).onConflictDoUpdate({ target: schema.cases.slug, set: c }).run();
  }
  const slugs = seedCases.map((c) => c.slug);
  return tx.delete(schema.cases).where(notInArray(schema.cases.slug, slugs)).run().changes;
});
console.log(`✓ Synced ${seedCases.length} famous cases${removed ? `, removed ${removed}` : ""}`);

const storyCount = db.select({ n: count() }).from(schema.stories).get()?.n ?? 0;
if (storyCount === 0) {
  db.insert(schema.stories).values(seedStories).run();
  console.log(`✓ Seeded ${seedStories.length} sample stories`);
}

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
