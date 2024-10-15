let numero1 = 10;
let numero2 = 7;

function somar(a,b){
    return a + b;
}

const resultado = somar(numero1, numero2);
console.log("O resultado da soma é: " + resultado);
if(numero1 > numero2){
    console.log("O maior número é: " + numero1);
}else{
    console.log("O maior número é: " + numero2);
}

if(resultado % 2 == 0){
    console.log("O resultado da soma é Par!");
}else{
    console.log("O resultado da soma é Impar!");
}

