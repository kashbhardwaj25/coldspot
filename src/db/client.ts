import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import * as schema from "./schema";

const file = process.env.DATABASE_PATH ?? "data/coldspot.db";

// Reuse one connection across hot reloads in development.
const g = globalThis as unknown as { __coldspotSqlite?: Database.Database };

function open() {
  mkdirSync(dirname(file), { recursive: true });
  const conn = new Database(file);
  conn.pragma("journal_mode = WAL"); // readers don't block the writer
  conn.pragma("busy_timeout = 5000");
  conn.pragma("foreign_keys = ON");
  conn.pragma("synchronous = NORMAL");
  return conn;
}

export const sqlite = g.__coldspotSqlite ?? open();
if (process.env.NODE_ENV !== "production") g.__coldspotSqlite = sqlite;

export const db = drizzle(sqlite, { schema });
export { schema };
