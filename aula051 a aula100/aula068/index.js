const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const arrayPares = numeros.filter((valor) => valor % 2 === 0);
const dobroPares = arrayPares.map(valor => valor * 2);
const reduzPares = dobroPares.reduce((ac, valor) => ac += valor, 0);

// const arrayPares = numeros
// .filter((valor) => valor % 2 === 0)
// .map(valor => valor * 2)
// .reduce((ac, valor) => ac += valor, 0);

console.log(reduzPares);