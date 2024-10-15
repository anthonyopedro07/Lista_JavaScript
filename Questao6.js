
function adicionar(item) {
    fila.push(item);
}

function remover(){
    fila.pop();
}

const fila = [];
adicionar('Primeiro');
adicionar('Segundo');
adicionar('Terceiro');
adicionar('Quarto');

console.log("Fila - " + fila);
remover();

console.log("Fila - " + fila);
