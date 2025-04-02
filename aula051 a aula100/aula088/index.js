function rand(min, max){
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max-min)+min);
}

function esperaAi(msg,tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string'){

        reject('Cai no erro')
        return;
        }

        setTimeout(()=>{
            resolve(msg + ' - Passei na Promise');
        }, tempo);
    });
}

// esperaAi('Fase 1', rand(1, 3))
// .then(valor =>{
//     console.log(valor)
//     return esperaAi('Fase 2', rand(1,3))
// })
// .then(fase =>{
//     console.log(fase)
//     return esperaAi('Fase 3', rand(1, 3))
// })
// .then(fase =>{
//     console.log(fase);
//     return fase;
// })
// .then(fase =>{
//     console.log('Terminamos a fase: ', fase);
// })
// .catch(e => console.log(e));

async function executa(){
    try{
        const fase1 = await esperaAi('Fase 1', rand(1, 3))
        console.log(fase1);
        
        const fase2 = await esperaAi('Fase 2', rand(1, 3))
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', rand(1, 3))
        console.log(fase3);

        console.log('Terminamos a fase: ', fase3)
    }catch(e){
        console.log(e);
    }
}
executa();