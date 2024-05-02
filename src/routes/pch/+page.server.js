import { eq } from "drizzle-orm";
import { db } from '$lib/mydatabase.js';
import { pos } from '../../schema';

export async function load() {
    const result = await db.select().from(pos).where(eq(pos.tipe,'1')).orderBy(pos.nama);
    return {
        pos: result
    }
}