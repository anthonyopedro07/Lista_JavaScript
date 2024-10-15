function multiplos(numeros) {
    const nums = numeros.filter(num => num % 3 == 0); 
    const qte = nums.length; 

    console.log('Saida: '+  nums + ' Total: ' + qte);
}

const numeros = [1, 2, 3, 4, 5, 6];
multiplos(numeros);
