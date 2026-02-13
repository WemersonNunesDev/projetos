import { prisma } from '../db/prisma';

export async function createLivro(data) {
    return prisma.livro.create({ data })
}
