/**
 * Creates or migrates the SQLite database, then seeds the famous cases and
 * sample stories if the tables are empty. Safe to run more than once.
 *   npm run db:setup
 */
import { count } from "drizzle-orm";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { db, schema, sqlite } from "../src/db/client";
import { seedCases } from "../src/data/seed-cases";
import { seedStories } from "../src/data/seed-stories";

migrate(db, { migrationsFolder: "drizzle" });
console.log("✓ Database schema is up to date");

const caseCount = db.select({ n: count() }).from(schema.cases).get()?.n ?? 0;
if (caseCount === 0) {
  db.insert(schema.cases).values(seedCases).run();
  console.log(`✓ Seeded ${seedCases.length} famous cases`);
}

const storyCount = db.select({ n: count() }).from(schema.stories).get()?.n ?? 0;
if (storyCount === 0) {
  db.insert(schema.stories).values(seedStories).run();
  console.log(`✓ Seeded ${seedStories.length} sample stories`);
}

sqlite.close();
