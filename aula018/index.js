function criaPessoa(nome, sobrenome, idade){

    return{

        nome: nome,
        sobrenome: sobrenome,
        idade: idade

    };

}


const pessoa1 = criaPessoa('William', 'Kermer', 19);
const pessoa2 = criaPessoa('Marta', 'Rosa', 58);
const pessoa3 = criaPessoa('Vagner', 'Romualdo', 53);

console.log(pessoa1.nome);


/*
const pessoa1 = {
    nome: 'William',
    sobrenome: 'Kermer',
    idade: 19

}
*/

const pessoa4 = {
    nome: 'Marta',
    sobrenome: 'Kermer',
    idade: 58,

    Fala(){

        console.log(`${this.nome} ${this,this.sobrenome} está falando oi, sua idade é ${this.idade}`);
    },

    IncrementaIdade(){  
        this.idade++;
    }
};

pessoa4.Fala();
pessoa4.IncrementaIdade();
pessoa4.Fala();