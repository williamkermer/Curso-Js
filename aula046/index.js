function mostraHora(){

    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false

});
}

// function funcaDoInterval(){

//     console.log(mostraHora())

// }

const timer = setInterval(/*funcaDoInterval*/function(){
    console.log(mostraHora());
}, 1000);

setTimeout(function(){

    clearInterval(timer);

}, 10000);

setTimeout(function(){

    clearInterval(timer);
    console.log('Olá mundo!');

},5000)