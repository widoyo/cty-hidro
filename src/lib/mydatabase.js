import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
  
import * as schema from "../schema";
  
const sqlite = new Database("../backend/hidro_citanduy.db");
  
export const db = drizzle(sqlite, {schema,});
