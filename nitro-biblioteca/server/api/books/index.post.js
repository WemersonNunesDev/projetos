import { defineEventHandler, readBody } from "h3";
import { prisma } from "../../../lib/prisma";

export default defineEventHandler(async event => {
    const body = await readBody(event);

    const newBook = await prisma.bookook.create({
        data: {
            title: body.title,
            author: body.author,
            isbn: body.isbn,
            category: body.category,
            year: body.year,
            quantity: body.quantity,
        },
    })

    return {
        message: 'Livro criado com sucesso',
        data: newBook,
    };
})