import { fail, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';

import { db } from '$lib/mydatabase';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const username = data.get('username');
        const password = data.get('password');
        const rst = await db.select().from(user).where(eq(user.username, username)).limit(1);
        console.log('password', password);
    }
}