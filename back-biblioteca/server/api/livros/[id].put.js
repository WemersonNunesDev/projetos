import { defineEventHandler, getRouterParam } from "h3";

export default defineEventHandler(event => {
    const id = getRouterParam(event, 'id');
    return {
        id,
        titulo: 'O senhor dos Anéis',
    }
})
