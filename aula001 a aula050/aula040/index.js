const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let n of numeros){

    if(n === 2){
        continue; //interromepe o laço e passa para o proximo ciclo sem executar o que está abaixo.
    }

    console.log(n);

}

for (let n of numeros){

    if(n === 2){
        console.log('achei o 2')
        break; //interromepe o laço e não passa para o proximo ciclo.
    }

    console.log(n);

}