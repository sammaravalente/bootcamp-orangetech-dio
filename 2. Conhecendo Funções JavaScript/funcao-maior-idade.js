/*
    Bootcamp Orange Tech+ 
    Curso Conhecendo Funções JavaScript
    Aula 4: Praticando Com Funções


2) Fazer uma função para saber se sou maior de idade.

*/

function verificarIdade(idade){
    if (idade < 18) {
        console.log('Você é MENOR de idade.');
    } else {
        console.log('Você é MAIOR de idade.');
    }
}

verificarIdade(22);