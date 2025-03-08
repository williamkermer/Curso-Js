const nome = 'Luiz'; //Aula sobre escopo léxico

function falaNome(){

    console.log(nome)

}

function usaFalaNome(){

    const nome = 'Otávio'
    falaNome();

}
usaFalaNome();