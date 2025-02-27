/* Short Circuit

&& -> False && true = false - retornando o valor falso -> "O valor mesmo"
|| -> True || False = true - retornando o valor verdadeiro -> "O valor mesmo"


FALSY

*false
0
'' "" ``
null / undefined
NaN
*/

console.log('Luiz' && 0 && 'Maria'); // Luiz e maria são true pois não são vazios. //MAS vai mostar o valor falso encontrado

function falaOi(){

    return 'Oi';

}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());   //Não vai executar o 'fala oi', por que encontrou um valor 'false' antes da função
                                        //vai mostar o valor falso encontrado