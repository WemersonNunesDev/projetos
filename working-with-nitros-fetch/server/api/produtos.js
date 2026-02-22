import { defineEventHandler } from "h3";

export default defineEventHandler(async event => {
    const caminho = 'https://fakestoreapi.com/';
    const categoria = 'electronics';

    const data = await $fetch(`${caminho}products/category/${encodeURIComponent(categoria)}`);

    return data;
})