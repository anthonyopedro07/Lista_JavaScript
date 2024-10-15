function dobrar(numeros) {
    return numeros
    .filter(numeros => numeros % 2 == 0) 
    .map(numeros => numeros * 2); 
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(dobrar(numeros)); 
