
// const tresHoras = 60 * 60 * 3 * 1000; // 1s * 60 * 60 * 3 * 1000 pois está em milésimo de segundos
// const umDia = 60 * 60 * 24 * 1000; // 1s * 60 * 60 * 24 * 1000 pois está em milésimo de segundos
// const data = new Date(0); // data do inicio do timestamp com a conversão do GMT
// const dataAtul = new Date(); //data de agora

const data = new Date(2019, 3, 20, 15, 14, 27); //Ano - Mes(0 = janeiro - 3 = Abril) - dia - horas - minutos 
const data2 = new Date('2019-04-20 15:14:27'); //Ano - Mes - dia - horas - minutos 

console.log(data.toString());