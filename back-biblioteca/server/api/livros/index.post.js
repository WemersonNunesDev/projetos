import { defineEventHandler } from "h3";

export default defineEventHandler(async event => {
    const body = await readBody(event);

    return {
        message: 'Livro criado com sucesso',
        livro: body,
    }
})
