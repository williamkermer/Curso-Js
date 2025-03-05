// try{
// console.log(naoExisto);
// }catch(err){
//     console.log('naoExisto não existe');
//}

function soma(x, y){

    if(typeof x !== 'number' || typeof y !== 'number'){

        throw new Error('x e y precisam ser números.') 
        //para a execução e exibe o contido no parenteses
    }

    return x + y;

}

try{
    console.log(soma(1,'2'))
}catch(error){

    //console.log(error) vai exibir uma mensagem de erro gigante
    console.log('Alguma coisa mais amigavel para o Usuário')

}
