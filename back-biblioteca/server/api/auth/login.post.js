import { readBody } from 'h3';
import { prisma } from '../../db/prisma';
import { comparePassword } from '../../utils/hash';
import { unauthorized } from '../../utils/errors';

export default defineEventHandler(async event => {
    const body = await readBody(event);

    const user = await prisma.user.findUnique({
        where: { email: body.email }
    })

    if (!user) throw unauthorized('Email ou senha inválidos')

    const passwordMatch = await comparePassword(body.password, user.password)

    if (!passwordMatch) throw unauthorized('Email ou senha inválidos')

    const token = singToken({
        id: user.id,
        email: user.email,
    })

    return { token }
})