function ehPalindromo(nome){
    const inversoNome = nome.split('').reverse().join('')
    if( nome == inversoNome){
        console.log(nome + " é palindromo");
    }else{
        console.log( nome + " Não é palindromo");
    }
}


ehPalindromo('arara');

ehPalindromo('banana');