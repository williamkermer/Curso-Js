/*
Operadores Lógicos
&&  - And = todas as expressões precisam ser verdadeiras para retornar true
||  - Ou = Apenas uma precisa ser verdadeira para retornar true
!   - Not = 
*/

const expressão1 = false && true && false && false;
const expressão2 = false || true || false || false;

console.log(expressão1,expressão2);

const usuario = 'William';
const senha = '123456';

const vaiLogar = usuario === 'William' && senha === '123456';

console.log(vaiLogar);