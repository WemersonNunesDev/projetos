export async function createLoan(bookId, clientId) {
    const book = await prisma.livro.findUnique({ where: { id: bookId } })

    if (!book || book.quantity === 0) {
        throw createError({
            statusCode: 400,
            messgae: 'Livro indisponível',
        })
    }

    await prisma.livro.update({
        where: { id: bookId },
        data: { quantity: { decrement: 1 } }
    })

    return prisma.loan.create({
        data: { bookId, clientId }
    })
}