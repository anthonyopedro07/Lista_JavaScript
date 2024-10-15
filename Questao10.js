function numeroPrimo(numero){
    for( let divisor = 2; divisor * divisor < numero; divisor++){
        if(numero % divisor == 0){
            console.log(numero + ' não é primo' );
        }else{
            console.log(numero + ' é primo');
        }
    }
    
}

numeroPrimo(5);
numeroPrimo(8);