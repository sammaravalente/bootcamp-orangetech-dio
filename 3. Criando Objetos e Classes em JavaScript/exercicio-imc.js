/*
    Bootcamp Orange Tech+ 
    Curso Criando Objetos e Classes em JavaScript
    Aula: Praticando com Objetos e Classes

    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC.
*/

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    // antes de ver a resolução do exercício: acho que errei aqui... deveria ter feito dois métodos separados, um pra calcular o valor do imc e um pra verificar o imc ('acima do peso, abaixo, etc.').
        // edit: era pra fazer dois métodos mesmo...

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade grave');
        }
    }
}

const jose = new Pessoas('José', 70, 1.75);
console.log(`Sou o ${jose.nome}, estou com IMC ${jose.calcularImc()}.`); 
console.log(`Isso significa ${jose.classificarImc()}.`);