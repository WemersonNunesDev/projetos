import { defineEventHandler } from "h3";
import { requireAuth } from "../../utils/requireAuth";

export default defineEventHandler(event => {
    requireAuth(event);
    return { livros: [] }
})
