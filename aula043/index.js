/*
Escreva uma função que recebe um número e retorne o seguinte:

Numero é divisivel por 3 = Fizz
Numero é divisivel po 5 = Buzz
Numero é divisivel por 3 e 5 = FizzBuzz
Numero não é divisivel por 3 e por 5 = retorna o próprio numero

Checar se o númeo é realmente um numero = retorna o próprio numero
Use a função com numeros de 0 a 100

*/

function fizzOrbuzz(num){

    const eFizz = num % 3;
    const eBuzz = num % 5;

     if(eFizz == 0 && eBuzz == 0){

        return `${num} = FizzBuzz`;

    }else if(eFizz == 0){

       return `${num} = Fizz`;

    }else if(eBuzz == 0){

       return `${num} = Buzz`;

    }else{
        return num;
    }

}

for(let i = 1; i <= 100; i++){

    console.log(fizzOrbuzz(i));
}
