//Global
function retornaFuncao(nome){ //Aula dobre closures
    //const nome = 'Luiz';
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
console.dir(funcao());
console.dir(funcao2());