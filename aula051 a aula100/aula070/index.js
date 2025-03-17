function Pessoa(nome, sobrenome){

    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('William', 'Kermer');
Object.freeze(p1);
p1.nome = 'Outra coisa'
console.log(p1);


// function criaPessoa(nome, sobrenome){

//     return{
//         nome,
//         sobrenome,
//         get nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }

// const p1 = criaPessoa('William', 'Kermer');
// console.log(p1.nomeCompleto);




// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio',
//     idade: 30
// };
// pessoa.getDataNascimento = function(){

//     dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;

// };

// const pessoa1 = new Object();

// pessoa1.nome = 'William'
// pessoa1.sobrenome = 'Kermer'

// console.log(pessoa.nome);
// console.log(pessoa['sobrenome']);
// console.log(pessoa.getDataNascimento());

// for (let chave in pessoa){

//     console.log(chave);

// };

// delete pessoa.nome;

// console.log(pessoa);