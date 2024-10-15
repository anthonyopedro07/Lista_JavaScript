let numero = 5;
function somar(n) {
    let soma = 0;

    for (let i = 1; i < n + 1; i++) {
        soma = soma + i; 
    }
    return soma; 
}


console.log("Fatorial(" + numero + ")" + " ===> " + somar(numero)); 

