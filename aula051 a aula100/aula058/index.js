//Função contrutora -> objetos - Letra maiuscula no Começo

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){

        console.log(this.nome + ': sou um método');

    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
p1.metodo();