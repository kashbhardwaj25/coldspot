/**
 * Creates or migrates the SQLite database, syncs the famous cases from
 * seed-cases.ts, and seeds sample stories if there are none. Safe to run more than once.
 *   npm run db:setup
 */
import { count } from "drizzle-orm";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { db, schema, sqlite } from "../src/db/client";
import { seedCases } from "../src/data/seed-cases";
import { seedStories } from "../src/data/seed-stories";

migrate(db, { migrationsFolder: "drizzle" });
console.log("✓ Database schema is up to date");

// Famous cases are curated in seed-cases.ts, so sync them by slug: new cases are added and edits are applied.
db.transaction((tx) => {
  for (const c of seedCases) {
    tx.insert(schema.cases).values(c).onConflictDoUpdate({ target: schema.cases.slug, set: c }).run();
  }
});
console.log(`✓ Synced ${seedCases.length} famous cases`);

const storyCount = db.select({ n: count() }).from(schema.stories).get()?.n ?? 0;
if (storyCount === 0) {
  db.insert(schema.stories).values(seedStories).run();
  console.log(`✓ Seeded ${seedStories.length} sample stories`);
}

sqlite.close();
