//defineProperty e defineProperties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque',{ //uma variavel

        enumerable: true, //visivel?
        value: estoque,
        writable: false, //pde alterar?
        configurable: true //pode reconfigurar? (usar define Property depois) ou apagar a variavel

    });
    Object.defineProperties(this,{ //varias variaveis

        nome:{
            enumerable: true, //visivel?
            value: estoque,
            writable: false, 
            configurable: true 
        },
        preco:{
            enumerable: true, //visivel?
            value: estoque,
            writable: false, 
            configurable: true 
        },
        estoque:{
            enumerable: true, //visivel?
            value: estoque,
            writable: false, 
            configurable: true 
        }

    });
};

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 50;
console.log(p1);
console.log(Object.keys(p1));