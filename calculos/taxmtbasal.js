function calcularTaxaBasal(genero, peso, altura, idade) {
    let valor = 0;

    if (genero === 'homem')  valor = 5;
    if (genero === 'mulher')  valor = 161;

    return (10 * peso) + (6.25 * altura) - (5*idade) + valor;

}


const resultado = calcularTaxaBasal('homem', 106, 1.84, 25);
console.log(`Seu calculo de taxa metabolica basal é de: ${resultado.toFixed(2)}`)
