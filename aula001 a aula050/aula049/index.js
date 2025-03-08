//Declaração de função (Function hoisting) - Mesmo se declarada a função depois de ser chamada, irá funcionar
falaOi();

function falaOi(){

    console.log('Oie');

}

//First-class objects - Tratar as funções como dado
const souUmDado = function(){

    console.log('Sou um dado');

}

function executaFuncao(funcao){
    funcao()
}
executaFuncao(souUmDado);

//Arrow function
const arrowFunc = () => {
    console.log('sou uma arrow function');
}

arrowFunc();

//Dentro de um objeto
const obj = {
    falar(){ //: function(){}
        console.log('Estou falando...');
    }
}
obj.falar();