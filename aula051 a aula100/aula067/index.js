const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador,valor) =>{

    return acumulador += valor

}, 0);

const Arraypares = numeros.reduce((acumulador,valor) =>{

    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

console.log(total);
console.log(Arraypares);


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 47}

];

const maisVelha = pessoas.reduce((acumulador, obj) => {

    if(acumulador.idade > obj.idade) return acumulador;
    return obj;
});

console.log(maisVelha);