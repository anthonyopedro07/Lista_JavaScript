function somaElementos(num){
    return num
    .reduce((valorPrevio,elementos) => valorPrevio + elementos, 0);
}

const numeros = [1, 2, 3, 4, 5];

console.log(somaElementos(numeros));