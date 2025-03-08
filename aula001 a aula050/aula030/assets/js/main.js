function DiaSemana(data){

    const diaSemana = data.getDay();

    switch (diaSemana){

        case 0:
            return 'Domingo';
    
        case 1:
            return 'Segunda-Feira';
    
        case 2:
            return 'Terça-Feira';
    
        case 3:
            return 'Quarta-Feira';
    
        case 4:
            return 'Quinta-Feira';
    
        case 5:
            return 'Sexta-Feira';
    
        case 6:
            return 'Sabado';
    
        default:
            return '';
    }  
}

function Mes(data){

    const diaMes = data.getMonth();

    switch (diaMes){

        case 0:
            return 'Janeiro';
    
        case 1:
            return 'Fevereiro';
    
        case 2:
            return 'Março';
    
        case 3:
            return 'Abril';
    
        case 4:
            return 'Maio';
    
        case 5:
            return 'Junho';
    
        case 6:
            return 'Julho';

        case 7:
            return 'Agosto';
    
        case 8:
            return 'Setembro';
    
        case 9:
            return 'Outubro';
    
        case 10:
            return 'Novembro';
    
        case 11:
            return 'Dezembro';
    
        default:
            return '';
    }

}

function zeroAEsquerda(num){

    return num >= 10 ? num : `0${num}`
}

function formataHora(data){

    const Hora = zeroAEsquerda(data.getHours());
    const Min = zeroAEsquerda(data.getMinutes());

    return `${Hora}:${Min}`
}

const data = new Date();
const dataHora = formataHora(data);
const dataSemana = DiaSemana(data);
const dataMes = Mes(data);

const h1 = document.querySelector('.container h1');

h1.innerHTML = `${dataSemana}, ${data.getDate()} de ${dataMes} de ${data.getFullYear()} <br> ${dataHora}`;

//A opção facil, capaz de simplificar em 7 linhas de código - Muito mais Útil
/*
const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};
h1.innerHTML = data.toLocaleString('pt-BR', opcoes);
*/

//Era possível fazer utilizando array eo invés de Switch case, algo que diminuiria consideravelmente o tamanho do código