import { eq } from "drizzle-orm";
import { db } from '$lib/mydatabase.js';
import { opos } from '../../schema';

export async function load() {
    const result = await db.select().from(opos).orderBy(opos.nama);
    return {
        pos: result
    }
}