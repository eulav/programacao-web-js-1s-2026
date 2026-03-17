function verificarNumeroPrimo(n){
    let eh_primo = true;

    //tratamento de 2 e números pares
    if((n != 2) && (n % 2 == 0)){
        eh_primo = false;
    }else{//tratamento de outros números

        for(let i=3;i<n;i+2){
            if(n % i == 0){
                eh_primo = false;
            }
        }
    }

    return eh_primo;

}

console.log(`primo (2) = ${verificarNumeroPrimo(2)}`);
console.log(`primo (4) = ${verificarNumeroPrimo(4)}`);
console.log(`primo (5) = ${verificarNumeroPrimo(5)}`);
//console.log(`primo (7) = ${verificarNumeroPrimo(7)}`);
//console.log(`primo (9) = ${verificarNumeroPrimo(9)}`);
console.log(`primo (88) = ${verificarNumeroPrimo(88)}`);
//console.log(`primo (100) = ${verificarNumeroPrimo(100)}`);
//console.log(`primo (104729) = ${verificarNumeroPrimo(104729)}`);
