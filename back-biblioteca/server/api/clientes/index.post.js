import { defineEventHandler } from 'h3';
import { prisma } from '../../db/prisma';
import { hashPassword } from '../../utils/hash';

export default defineEventHandler(async event => {
    const body = await readBody(event);

    const hashedPassword = await hashPassword(body.password)

    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: hashedPassword,
        }
    })

    return { id: user.id, email: user.email }
})
