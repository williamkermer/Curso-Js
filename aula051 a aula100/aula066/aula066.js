const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobro = numeros.map(valor => valor *2);

console.log(dobro);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const nomes = pessoas.map(obj => obj.nome);

console.log(nomes);

const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);

const comIds = pessoas.map((obj, indice) => {

    const Newobj = {...obj};//criando um novo objeto para não modificar original
    Newobj.id = indice
    return Newobj;
    
});

// const comIds = pessoas.map((obj, indice) => {

//     obj.id = indice;
//     return obj;
//     //return {id: obj.id = indice};
// });

console.log(comIds);


// const numerosFiltrados = numeros.filter((valor, Indice, array) => {
//     return valor > 10;
// });

// console.log(numerosFiltrados);

// const pessoas = [
//     {nome: 'Luiz', idade: 62},
//     {nome: 'Maria', idade: 23},
//     {nome: 'Eduardo', idade: 55},
//     {nome: 'Letícia', idade: 19},
//     {nome: 'Rosana', idade: 32},
//     {nome: 'Wallace', idade: 47}

// ]

// const pessoasNomeG = pessoas.filter((obj) => {

//     return obj.nome.length >= 5;

// })

// const pessoasIdade = pessoas.filter((obj) => {

//     return obj.idade > 50;

// })

// const nomeTerminaComA = pessoas.filter((obj) =>{

//     return obj.nome.toLowerCase().endsWith('a')
//     //return obj.nome[obj.nome.length - 1] === 'a';

// })

// console.log(pessoasNomeG);
// console.log(pessoasIdade);
// console.log(nomeTerminaComA);
