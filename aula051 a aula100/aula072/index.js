//defineProperty e defineProperties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque',{ //uma variavel

        enumerable: true, //visivel?
        configurable: true, //pode reconfigurar? (usar define Property depois) ou apagar a variavel
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('Bad value')
            }
            estoquePrivado = valor;
        }

    });
};

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 50;
console.log(p1.estoque);