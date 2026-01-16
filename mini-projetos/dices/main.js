import { SistemaRolagens } from "./SistemaRolagens.js";

const sisRolagens = new SistemaRolagens();

const rolar = sisRolagens.rolarDados(3, 6);
console.log(`Resultado da rolagem: ${rolar}\n`);

const rolarAtributo = sisRolagens.rolarAtributo(4, 6, 6);

console.log(resultado);


const resultado = rolarAtributo.map((rolagem, index) => {
    const soma = sisRolagens.somaDeAtributos([rolagem])
    return `Rolagem: ${index + 1} - Resultados: ${rolagem.join(',')} - Soma dos maiores: ${soma}`;
})

console.log(resultado)
