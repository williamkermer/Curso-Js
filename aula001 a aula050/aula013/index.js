
let umaString = "Um \"texto\" qualquer";

console.log(umaString);
console.log(umaString[1]); //vai mostrar o elemento na posição do indice informado
console.log(umaString.indexOf('texto')); //vai mostrar a posição(indice) que começa a palavra informada
console.log(umaString.length);
console.log(umaString.slice(0,2));//fatia do inice informado até o outro
console.log(umaString.split(' ', 3)); //transformar em array a partir de qual caracter e a quantidade desejada
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
