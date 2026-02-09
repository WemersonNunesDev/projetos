import { getHeader } from "h3";
import { unauthorized } from "./errors";

export function requireAuth(event) {
    const token = getHeader(event, 'authorization')?.replace('Bearer ', '')

    if (!token) throw unauthorized();

    event.context.user = decodeToken(token);
}