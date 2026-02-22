import { eventHandler } from "h3"

// Learn more: https://nitro.build/guide/routing
export default eventHandler(async (event) => {
  const produtos = await $fetch('http://localhost:3000/api/produtos');
  
  const lista = produtos
    .map((p: any) => `
      <div>
        <h3>${p.title}</h3>
        <img src="${p.image}" width="100"  />
        <p>Preço: R$ ${p.price}</p>
      </div>
    `)
    .join('');
  
  return `
      <meta charset="utf-8">
      <h1>Produtos - Electronics</h1>
      <h2>Total: ${produtos.length} produtos</h2>
      ${lista}
    `;
});
