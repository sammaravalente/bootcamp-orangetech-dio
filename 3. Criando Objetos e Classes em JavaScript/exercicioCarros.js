/*
    Bootcamp Orange Tech+ 
    Curso Criando Objetos e Classes em JavaScript
    Aula: Praticando com Objetos e Classes

    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
    Crie um método que dado a quantidade de KM e o preço do combustível, nos dê o valor gasto em reais para realizar este percurso. 
*/

class Carros {
    marca;
    cor;
    gastoCombustivelKM;

    constructor(marca, cor, gastoCombustivelKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustivelKM = gastoCombustivelKM;
    }

    calcularGastoViagem(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoCombustivelKM * precoCombustivel;
    }
}

const celta = new Carros('Chevrolet', 'Vermelho', 1/10);
const palio = new Carros('Fiat', 'Branco', 1/15);

console.log(palio.calcularGastoViagem(733, 5.30));