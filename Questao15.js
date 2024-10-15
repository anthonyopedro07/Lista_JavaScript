function soma(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let b = 0; b < matriz[i].length; b++) {
            soma = soma + matriz[i][b];
        }
    }

    console.log("A soma de todos os números é: " + soma);
}

const matriz = [ [2, 4, 6],[8, 10, 12]];

soma(matriz); 
