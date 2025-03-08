let num1 = 1500.414156341;
let num2 = 2.5;

let num3 = 0.7;
let num4 = 0.1

num3 += num4;
num3 += num4;
num3 += num4;

num3 = Number(num3.toFixed(2));

console.log(num3);


console.log(num1.toString() + num2); //altera temporariamente para String o valor de num1
console.log(num1.toString(2)); //mostra o valor binario da variavel num1
console.log(num1.toFixed(2)); //arredonda e mostra apenas a quantidade desejada de caracteres após a virgula

num1 = num1.toString(); //altera permanentemente para String o valor de num1
console.log(typeof num1);
console.log(Number.isInteger(num1));
console.log(Number.isNaN(num1));

