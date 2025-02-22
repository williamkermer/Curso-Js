const nome = "William";
const sobrenome = "Kermer";
const idade = 19;
const peso = 65;
const altura = 1.74;
let imc; //peso / (Altura * Altura)
let anoNascimento;


imc = peso/ (altura * altura);
anoNascimento = 2024 - idade

console.log(nome,sobrenome, "tem", idade, "anos, portanto nasceu em", anoNascimento, "e pesa", peso,"kg");
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);