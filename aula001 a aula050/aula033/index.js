const pessoa = {

    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco:{
        rua:'Av Brasil',
        numero: 320
    }
};

//Atribuição via desestruturação
const {nome,sobrenome} = pessoa; //Basicamente essa linha pega o valor da varivel entre as chaves relativo ao objeto após o =
console.log(nome, sobrenome);

const {endereco: {rua, numero: n = 12345}} = pessoa; //precisa utilizar esse estrutura para um objeto dentro de um objeto - depois atribui outro nome para a variavel de numero(antes do sinal de igual), depois do sinal de igual é o valor q seria se fosse vazio
console.log(rua, n);