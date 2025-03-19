//Construtota -> molde(classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => { this.nome + ' ' + this.sobrenome}; ->esse sobrescreve o prototype, pois ele checa primeiro no escopo do objeto

};

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
};

//instância
const pessoa1 = new Pessoa('Luiz', 'O.');
const pessoa2 = new Pessoa('Maria', 'A.');

console.dir(pessoa1.nomeCompleto());
console.dir(pessoa2);