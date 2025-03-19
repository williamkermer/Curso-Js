function Produto(nome, preco){

    this.nome = nome;
    this.preco = preco;

};

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){

    Produto.call(this, nome, preco);
    this.cor = cor
};

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
};

const camiseta = new Camiseta('Regata', 8, 'Preto');
camiseta.aumento(10);
console.log(camiseta);

function Caneca(nome, preco, material, estoque){

    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {

        enumerable: true,
        configurable: false,

        get: function(){
            return estoque;
        },

        set: function(valor){
            if(typeof valor !== number){
                return;
            }
            estoque = visualViewport;
        }

    })
};

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.aumento = function(percentual){

    this.preco = this.preco + (this.preco * (percentual / 100));

};

const caneca = new Caneca('xicara', 10, 'Porcelana', 20);
caneca.aumento(10);
console.log(caneca);
