export class Calcular {
    constructor(alturaTijolo, compTijolo, precoTijolo, alturaParede, frente, profundidade) {
        this.alturaTijolo = alturaTijolo;
        this.compTijolo = compTijolo;
        this.precoTijolo = precoTijolo;
        this.alturaParede = alturaParede;
        this.frente = frente;
        this.profundidade = profundidade;
    }

    area = (valorX, valorY) => (valorX * valorY);

    perimetro = (valorX, valorY) => 2 * (valorX + valorY);

    areaTotalParede(alturaParede=this.alturaParede, valorX=this.frente, valorY=this.profundidade) {
        const per = this.perimetro(valorX, valorY);
        const result = alturaParede * per;
        return Math.floor(result);
    }

    totalTijolos() {
        const alt = this.alturaTijolo/100;
        const comp = this.compTijolo/100;

        const areaTijolo = this.area(alt, comp);
        const qtdTjMetroQuad = 1/areaTijolo;
        const result = this.areaTotalParede() * qtdTjMetroQuad;
        return Math.ceil(result);
    }

    precoTotal(preco=this.precoTijolo) {
        const totalTijolos = this.totalTijolos();
        const result = preco * totalTijolos;
        const res =  result.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        });
        return res;
    } 
}
