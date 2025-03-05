// try{//É executado quando não há erros

//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');

// }catch(e){//É executada quando há erros

//     console.log('Tratando o erro');

// }finally{//Sempre é executada

//     console.log('Tenta fechar o arquivo para ter certeza de sucesso');

// }

function retornaHora(data){

    if (data && !(data instanceof Date)){

        throw new TypeError('Esperando instancia de Date.');
    }

    if (!data){

        data = new Date();

    }


    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',        
        hour12: false
    });

}

try{
    const data = new Date(0);
    const hora = retornaHora(11);
    console.log(hora);
}catch(e){
    //Tratar Erro
}finally{

    console.log('tenha um bom dia');

}