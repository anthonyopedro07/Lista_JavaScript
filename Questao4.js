let numero = 5;
function multiplicar(n) {
    let multiplicacao = 1;

    for (let i = 1; i < n + 1; i++) {
        multiplicacao = multiplicacao * i; 
    }
    return multiplicacao; 
}


console.log("Fatorial(" + numero + ")" + " ===> " + multiplicar(numero)); 