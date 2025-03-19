const produto = {nome: 'Caneca', preco: 1.8}
const outraCoisa = {
    ...produto,
    material: 'Porcelana'
};
// const produto = {nome: 'Produto', preco: 1.8};
// const caneca = Object.assign({}, produto, {material: 'Porcelana'});

outraCoisa.nome = 'Outro Nome';
outraCoisa.preco = 2.5;

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) //ver as propriedades
