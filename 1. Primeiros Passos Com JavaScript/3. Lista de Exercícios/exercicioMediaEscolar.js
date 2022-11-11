/*
    Bootcamp Orange Tech+ 
    Curso Primeiros Passos Com JavaScript
    Aula 3: Praticando com Variáveis, Operadores e Estruturas Condicionais


1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- média menor que 5, reprovação;
- média entre 5 e 7, recuperação;
- média acima de 7, aprovado.

*/

const nota1 = 8
const nota2 = 4.8
const nota3 = 6.5
const mediaFinal = (nota1 + nota2 + nota3)/3;
console.log("A média do aluno é: " + mediaFinal);

if (mediaFinal < 5) {
    console.log('Situação: Reprovado');
} else if (mediaFinal >=5 && mediaFinal <=7) {
    console.log('Situação: Recuperação');
} else {
    console.log('Situação: Aprovado');
}

// Só colocamos uma condição ao lado de 'if' e 'else if'. Quando cai em 'else', já pega a condição restante pra ser testada na execução.