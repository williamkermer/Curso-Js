const nomes = ['Eduardo', 'Maria', 'Joana', 'Eduardo', 'Gabriel'];

const removidos = nomes.splice(3, /*Number.MAX_VALUE*/ 1, 'Will');
console.log(nomes, removidos);

// nomes[2] = 'João';
// const novo = [...nomes]//não salva por referencia, mas copia os itens da referencia
// const removido = nomes.pop();
// console.log(nomes,removido);
// console.log(novo);

// const fatiados = novo.slice(0,3);
// console.log(fatiados);

// const separar = 'William Kermer Romualdo';
// const separado = separar.split(' ');
// console.log(separado);

// const juntar = separado.join(' ');//junta as palavras do array, separado pelo contido no parenteses
// console.log(juntar);