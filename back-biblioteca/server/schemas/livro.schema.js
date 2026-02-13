import { z } from 'zod';

export const createBookSchema = z.object({
    title: z.string().min(1, 'O título é obrigatório'),
    author: z.string(),
    isbn: z.string(),
    category: z.string(),
    year: z.number(),
    quantity: z.number().min(1)
})