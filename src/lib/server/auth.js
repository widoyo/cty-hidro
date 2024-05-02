import { Lucia } from 'lucia';
import { dev } from "$app/environment";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import { user, sessionTable } from "../../schema";
import { db } from "$lib/mydatabase";

const adapter = new DrizzleSQLiteAdapter(db, sessionTable, user);

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            // set to `true` when using HTTPS
            secure: !dev
        }
    }
});

