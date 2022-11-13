/*
    Bootcamp Orange Tech+ 
    Curso Criando Objetos e Classes em JavaScript
    Aula: Entendendo Objetos e Classes
*/

// 1. Funções
    // objetos são declarados com chave e valor.

    // 1.1 exemplo objetos
        // - delete pessoa.nome - comando para deletar uma chave e valor.

/*

const pessoa = {
    nome: 'Bob Esponja',
    idade: 30
};

console.log(pessoa.nome);

*/

    // 1.2 uma função dentro de um objeto é um MÉTODO.
    // exemplo:

/*    
const pessoa = {
    nome: 'Bob Esponja',
    idade: 30,

    descrever: function () {
        this
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();

*/





// 2. classes!
    // classe: definição do que deveria ser. (pessoa)
    // instância: uma ocorrência dentro da classe (dentro da classe pessoa)
    // classe > instância
        // ex: classe: carro (cor, ano) > instância: carro branco 2017


/*

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

*/

    // 2.1 para adicionar instâncias às classes (usando o constructor):

/*

const Bob = new Pessoa('Bob Esponja Calça Quadrada', 30);

const Lula = new Pessoa('Lula Molusco', 40);

console.log(Bob);
console.log(Lula);

*/





// exemplo em sala: agrupar atributos, usando funções, classes e objetos


class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}



function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
} 

const Bob = new Pessoa('Bob Esponja Calça Quadrada', 30);

const Lula = new Pessoa('Lula Molusco', 40);

compararPessoas(Bob, Lula);