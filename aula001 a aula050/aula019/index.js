/*
Primitivos (imutáveis) - String, number, boolean, undefined, null (bigint, symbol) -> valores copiados

//exemplo

let nome = "William";
nome[0] = "U"
console.log(nome[0]);

*/

let a = 'A';
let b = a;
console.log(a,b);

a = 'Outra coisa';
console.log(a,b); //dados primitivos armazenam o valor de outra variavel e se tornam independentes

/*
Referência (Mutável) - array, object, function - Passados por referência
*/


let c = [1,2,3];
let d = c;
let e = [...c] //fazendo isso (spread) 'e' se torna independente, copia os valores n sua referência

console.log(c, d);

c.push(4);
console.log(c, d, e);

d.pop();
console.log(c, d);

e.pop();
console.log(c, d, e);