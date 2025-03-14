const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter((valor, Indice, array) => {
    return valor > 10;
});

console.log(numerosFiltrados);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}

]

const pessoasNomeG = pessoas.filter((obj) => {

    return obj.nome.length >= 5;

})

const pessoasIdade = pessoas.filter((obj) => {

    return obj.idade > 50;

})

const nomeTerminaComA = pessoas.filter((obj) =>{

    return obj.nome.toLowerCase().endsWith('a')
    //return obj.nome[obj.nome.length - 1] === 'a';

})

console.log(pessoasNomeG);
console.log(pessoasIdade);
console.log(nomeTerminaComA);


















// const maior10 = [];

// for(i in numeros){ //O correto para array seria usar 'for of', mas para usar o console.log, achei intuitivo deixar o indice tambem

//     if(numeros[i] > 10){

//         maior10.push(numeros[i]);
//         console.log('Indice:',i, numeros[i]);

//     }

// }

// console.log(maior10);