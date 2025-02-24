const numero = Number(prompt("Digite um número: "));
const titulo = document.getElementById("numero-titulo");
const raiz = document.getElementById("raiz");
const inter = document.getElementById("inter");
const Enan = document.getElementById("Enan");
const baixo = document.getElementById("baixo");
const cima = document.getElementById("cima");
const dec = document.getElementById("dec");

titulo.innerHTML = numero;
raiz.innerHTML = `Raiz quadrada: ${numero ** 0.5}`;
inter.innerHTML = `${numero} é inteiro: ${Number.isInteger(numero)}`;
Enan.innerHTML = `é NaN: ${Number.isNaN(numero)}`;
baixo.innerHTML = `Arredondado para baixo: ${Math.floor(numero)}`;
cima.innerHTML = `Arredondado para cima: ${Math.ceil(numero)}`;
dec.innerHTML = `Com duas casas decimais: ${numero.toFixed(2)}`;