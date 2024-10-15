function attIndice(frutas,addFruta){
    frutas.splice(2, 1, addFruta);
    return frutas;
}

const frutas = ["banana", "uva", "perâ", "laranja", "tangerina" ];
const addFruta = "maca";
console.log(attIndice(frutas, addFruta));