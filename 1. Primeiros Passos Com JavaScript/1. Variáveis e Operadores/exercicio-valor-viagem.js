/*

Exercício 01:
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1- Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem.

*/

const precoCombustivel = 7.13;
const combustivelPorKm = 10;
const distanciaKm = 100;

// pegar a distancia em Km e dividir pelo gasto médio de combustível por KM. Depois pega esse resultado e multiplica pelo preço do combustível.

const litrosConsumidos = distanciaKm / combustivelPorKm;
const gastoTotal = litrosConsumidos * precoCombustivel;

console.log(gastoTotal.toFixed(2));

//to.Fixed() - arredonda as casas decimais

// instalar node e fazer a prova no terminal