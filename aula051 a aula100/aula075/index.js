function Produto(nome, preco){

    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.desconto = function(percentual){

    this.preco = this.preco - (this.preco * (percentual / 100))

}
Produto.prototype.aumento = function(percentual){

    this.preco = this.preco + (this.preco * (percentual / 100))

}

const p1 = new Produto('Camiseta', 50);

const p2 = {

    nome: 'Caneca',
    preco: 15

}
Object.setPrototypeOf(p2, Produto.prototype);

// p1.desconto(10);
// p1.aumento(10);
// p2.desconto(20);
// p2.aumento(20);
// console.log(p1);

const p3 = Object.create(Produto.prototype, {

    preco: {

        writable: true,
        enumerable: true,
        configurable: false,
        value: 113,
    },
    tamanho1: {

        writable: false,
        enumerable: true,
        configurable: false,
        value: 43
    }
    
});

// p3.preco = 113;
p3.aumento(10);
console.log(p3);