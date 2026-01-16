import { dice } from './dices.js';

export class SistemaRolagens {
    rolarDados(numDados, lados) {
        const resultados = [];
        for (let i = 0; i < numDados; i++) {
            resultados.push(dice(lados));
        }
        return resultados;
    }

    rolarAtributo(numDados, lados, qtdRolagens) {
        const resultados = [];
        
        for (let i = 0; i < qtdRolagens; i++) {
            const rolagens = this.rolarDados(numDados, lados);
            resultados.push(rolagens);
        }

        return resultados;
    }

    somaDeAtributos(dados) {
        const resultado = [];

        for (let i = 0; i < dados[0].length; i++) {
            const valores = [];

            for (let j = 0; j < dados.length; j++) {
                valores.push(dados[j][i]);
            }

            const menor = Math.min(...valores);
            const soma = valores.reduce((acc, v) => acc + v, 0) - menor;

            resultado.push(soma);
        }

        return resultado;
    }

}