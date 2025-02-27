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

console.log(0 || false || null || 'Luiz Otávio' || true);

const corUsuario = 'vermelho';
const corPadrão = corUsuario || 'preto';

console.log(corPadrão);