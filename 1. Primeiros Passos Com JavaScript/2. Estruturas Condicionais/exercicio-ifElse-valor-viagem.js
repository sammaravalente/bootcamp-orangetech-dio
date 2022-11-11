/*
    Incrementando o desafio1.js da aula 1.

    Faça um programa para calcular o valor de uma viagem.

    Você terá 5 variáveis. Sendo elas:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustível que está no seu carro; 
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem.

    Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 3.50;
const precoGasolina = 4.60;
const combustívelNoCarro = 'Gasolina';
const kmPorLitro = 10;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / kmPorLitro;

if (combustívelNoCarro == 'Etanol') {
    const gastoTotal = litrosConsumidos*precoEtanol;
    console.log(gastoTotal.toFixed(2));
} else {
    const gastoTotal = litrosConsumidos*precoGasolina;
    console.log(gastoTotal.toFixed(2));
}


// prestar atenção às variáveis.
// como estamos usando const nesse desafio, o console.log tem que estar nos dois blocos de código do if else


/*
cálculo: pegar a distancia em Km e dividir pelo gasto médio de combustível por KM, depois pega esse resultado e multiplica pelo preço do combustível.

to.Fixed() - arredonda as casas decimais

instalar node e fazer a prova no terminal
*/