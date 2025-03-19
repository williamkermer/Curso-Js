function validarCpf(cpf){

    let cpfLimpo = cpf.replace(/\D+/g, '');
    let cpfArray = Array.from(cpfLimpo);

    let soma1 = 0;
    const vezes1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];

    for(i = 0; i < 9; i++){

        soma1 = soma1 + (vezes1[i] * Number(cpfArray[i]))
    }

    let digito1 = 11 - (soma1 % 11);

    if(digito1 > 9) digito1 = 0;

    if(Number(cpfArray[9]) !== digito1){
        
        return 'CPF Inválido'
        

    }else{

        let soma2 = 0;
        const vezes2 = [11,10,9,8,7,6,5,4,3,2];

        for(i = 0; i < 10; i++){

            soma2 = soma2 + (vezes2[i] * Number(cpfArray[i]));
        }

        let digito2 = 11 - (soma2 % 11);

        if(digito2 > 9) digito2 = 0;

        if(Number(cpfArray[10]) !== digito2){

            return 'CPF Inválido'
        }else{
            
            return 'CPF Válido'

        }
    }
}

console.log(validarCpf('471.931.918-10'));