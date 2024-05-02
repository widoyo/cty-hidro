import type { Config } from "drizzle-kit";
/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
  driver: 'better-sqlite',
  dbCredentials: {
    url: '../backend/hidro_citanduy.db',
  },
  verbose: true,
  strict: true
};