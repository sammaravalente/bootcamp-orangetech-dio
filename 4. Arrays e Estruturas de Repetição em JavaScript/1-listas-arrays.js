/*
    Bootcamp Orange Tech+ 
    Curso Arrays e Estruturas de Repetição em JavaScript
    Aula: Arrays e Estruturas de repetição

1. Listas

    a. como representar listas?
    elementos dentro de colchetes
    *pode começar vazia
    **pode colocar diferentes tipos de elementos (string, number etc.)
        ex: conjunto de alunos 
            const alunos = ['José', 'João', 'Marina'];

    b. como ver um elemento específico dentro de uma lista?
    através do seu índice
        ex: console.log(alunos[0]);
            saída: José

    c. como adicionar novos elementos numa lista?
    colocar no final da fila de elementos usando o método push() OU diretamente na posição que desejar.
        ex: alunos.push('Sammara');
            alunos[4] = 'Sammuel';

    d. como remover elementos da lista?
    método shift(); - *remove o primeiro elemento
    método pop() - *remove o último elemento
        ex: alunos.pop();

    e. como saber o tamanho de uma lista?
    método length
        ex: console.log(alunos.length);
        
*/