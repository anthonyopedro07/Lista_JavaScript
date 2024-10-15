function quadradoNumeros(num){
    return num
    .filter(num => num > 10)
    .map(num => num * num);
}

const numeros = [1,11,15,4,3,21];

const novosnumeros = quadradoNumeros(numeros);

console.log(novosnumeros);