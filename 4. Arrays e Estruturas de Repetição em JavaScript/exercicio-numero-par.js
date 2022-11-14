// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número PAR encontrado.

const numeros = [15, 6, 0, 9, 75, 14, 36, 0, 19];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i]

    if (numero % 2 === 0) {
        console.log(numero);
    }
}

