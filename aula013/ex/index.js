const nome = prompt('Digite seu nome completo: ');

document.body.innerHTML += `O seu nome é ${nome}<br>`;
document.body.innerHTML += `O seu nome tem ${nome.length - 2} letras <br>`;
document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]}<br>`;
document.body.innerHTML += `Qual é o primeiro indice da letra a no seu nome? R: ${nome.indexOf('a')}<br>`;
document.body.innerHTML += `Qual é o ultimo indice da letra a no seu nome? R: ${nome.lastIndexOf('a')}<br>`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${nome.slice(-3)}<br>`;
document.body.innerHTML += `As palavras do seu nome são ${nome.split(' ')}<br>`;
document.body.innerHTML += `O seu nome com letras Maiusculas ${nome.toUpperCase()}<br>`;
document.body.innerHTML += `O seu nome com letras Minusculas ${nome.toLowerCase()}<br>`;



