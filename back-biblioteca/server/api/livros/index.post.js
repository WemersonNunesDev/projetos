import { defineEventHandler } from "h3";
import { createLivroSchema } from '../../schemas/livro.schema';
import { createLivro } from '../../services/livro.service';

export default defineEventHandler(async event => {
    const body = await readBody(event);
    const data = createLivroSchema.parse(body);

    return createLivro(data);
})
