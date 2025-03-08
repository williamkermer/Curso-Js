let nomes = ['william','pepa','victor'];

console.log(nomes instanceof Array); 

console.log(nomes);
console.log(nomes[0]);

nomes.push('pedro', 'enzo'); // adiciona no fim
console.log(nomes);

nomes[1] = "pietro";

console.log(nomes);
console.log(nomes.length);

nomes.unshift('yann');// adiciona no começo
console.log(nomes);

const rem = nomes.pop(); //tira do final
console.log(rem)
console.log(nomes);

const remIni = nomes.shift();// tira do começo
console.log(remIni)
console.log(nomes);

delete nomes[1]; //apaga o item indicado pelo indice mas deixa um espaço vazio no array
console.log(nomes);

