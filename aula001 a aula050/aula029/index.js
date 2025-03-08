const data = new Date('1987-04-25 00:00:00');
const diaSemana = data.getDay()
let SemanaTexto;


switch (diaSemana){

    case 0:
        SemanaTexto = 'Domingo';
        break;

    case 1:
        SemanaTexto = 'Segunda';
        break;

    case 2:
        SemanaTexto = 'Terça';
        break;

    case 3:
        SemanaTexto = 'Quarta';
        break;

    case 4:
        SemanaTexto = 'Quinta';
        break;

    case 5:
        SemanaTexto = 'Sexta';
        break;

    case 6:
        SemanaTexto = 'Sabado';
        break;

    default:
        SemanaTexto = '0'
}


console.log(diaSemana + 1, SemanaTexto);
