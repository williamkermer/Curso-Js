function rand(min = 1000, max = 3000){

    const num = Math.random() * (max - min) + min

    return Math.floor(num)
}

function f1(callback){

    setTimeout(function(){
        console.log('f1')
        if(callback) callback();
    })
   

}
function f2(callback){

    setTimeout(function(){
        console.log('f2')
        if(callback) callback();
    })

}
function f3(callback){

    setTimeout(function(){
        console.log('f3')
        if(callback) callback();
    })
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá Mundo')
        });
    });
});

