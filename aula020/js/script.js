function meuEscopo(){

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    //form.onsubmit = function(evento){
    //     evento.preventDefault();
    //     console.log('teste')
    // }

    
    function recebeEventoForm (evento){

        evento.preventDefault();

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
       
        pessoas.push([nome.value, sobrenome.value, peso.value, altura.value]);

        document.body.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
        
    }

    form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();