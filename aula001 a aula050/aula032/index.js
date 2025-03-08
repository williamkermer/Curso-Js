const num = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const num1 = num[0];
// console.log(num[0]);
const [num1, num2, ...resto] = num;

const numeros = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
const [, [,,seis]] = numeros;

console.log(seis);