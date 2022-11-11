/*
    Bootcamp Orange Tech+ 
    Curso Conhecendo Funções JavaScript
    Aula 4: Praticando Com Funções


3) Fazer o exercício 3 da lista passada, dessa vez, usando funções.

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, o preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.

*/

function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const condicaoPagamento = 4;

if (condicaoPagamento === 1) { 
    console.log(aplicarDesconto(precoEtiqueta, 10)); 
 } else if (condicaoPagamento === 2) {
     console.log(aplicarDesconto(precoEtiqueta, 15)); 
 } else if (condicaoPagamento === 3) {
     console.log(precoEtiqueta); 
 } else {
     console.log(aplicarJuros(precoEtiqueta, 10));
 }
