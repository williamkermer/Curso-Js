function* geradora1(){
    //código qualquer
    yield 'Valor 1';
    //código qualquer
    yield 'Valor 2';
    //código qualquer
    yield 'Valor 3';

}
function* geradora2(){

    let i = 0;

    while(true){

        yield i;
        i++

    }

}

function* geradora3(){
    
    yield 1;
    yield 2;
    yield 3;

}
function* geradora4(){
    
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;

}

function* geradora5(){
    
    yield function(){
        console.log('Vim do y1')

    }

    return function(){ //Termina a função e não executa nada abaixo

        console.log('Vim do return')

    }

    yield function(){
        console.log('Vim do y2')

    }


}

// const g1 = geradora1();
// const g2 = geradora2();
// const g3 = geradora3();
// const g4 = geradora4();
const g5 = geradora4();

const func1 = g5.next().value;
const func2 = g5.next().value;

// for(let valor in g4) {
//     console.log(valor);
// }


// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);


// for(let valor in g1){

//     console.log(valor);

// }
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);