import { createError } from 'h3';

export function unauthorized(textUnauthorized = 'Não autorizado') {
    return createError({
        statusCode: 401,
        message: textUnauthorized,
    })
}