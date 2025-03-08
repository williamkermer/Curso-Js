function saudacao(nome){

    return `Bom dia ${nome}!`;
}

const vari = saudacao("William");
console.log(vari);

function soma(x,y){

    const result = x + y;
    return result;

}

console.log(soma (2, 3));

const raiz = n => n ** 0.5; // arrow function

console.log(raiz(9));