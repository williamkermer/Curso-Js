let nomes = ['william','pepa','victor'];

console.log(alunos instanceof Array); 

console.log(nomes);
console.log(nomes[0]);

nomes.push('pedro', 'enzo'); // adiciona no fim
console.log(nomes);

nomes[1] = "pietro";

console.log(nomes);
console.log(nomes.length);

nomes.unshift('yann');
console.log(nomes);

const rem = nomes.pop();
console.log(rem)
console.log(nomes);

const remIni = nomes.shift();
console.log(remIni)
console.log(nomes);

delete nomes[1];
console.log(nomes);

