const verdadeira = true;

// let tem escopo de bloco {... bloco} = ou seja, o nome prevalece o global, mas se tiver declarado outra coisa dentro de uma função e um log dentro dessa fuunção, será o nome armazenado lá dentro

// Var tem escopo de função - Ou seja, sempre que redeclarar ele vai reinicializar e permanecera a ultima declarada

let nome = 'Luiz';
var nome2 = 'Luiz'

if (verdadeira){

    let nome = 'Otávio'
    var nome2 = 'Ronaldo'
    //console.log(nome, nome2);

    if (verdadeira){

    let nome = 'Rogério'
    var nome2 = 'Outra coisa'
    //console.log(nome, nome2);

    }

}

console.log(nome, nome2);