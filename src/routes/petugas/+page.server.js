import { db } from '$lib/mydatabase.js';
import { petugas } from '../../schema';

export async function load() {
    const result = await db.select().from(petugas).orderBy(petugas.nama);
    return {
        petugas: result
    }
}