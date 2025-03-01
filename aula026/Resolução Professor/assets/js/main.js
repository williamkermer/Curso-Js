function meuEscopo(){

    const form = document.querySelector('#form');
    const resultado = document.querySelector('#resultado');
    

    function calcularIMC(evento){
        
        evento.preventDefault();

        const pesoB = form.querySelector('#peso');
        const alturaB = form.querySelector('#altura');

        const peso = Number(pesoB.value);
        const altura = Number(alturaB.value);


        if(isNaN(peso) || isNaN(altura)){

            resultado.innerHTML = `<p class="resultNeg">Digite um valor valido!!!</p>`; 

        }else{

            const IMC = peso / (altura * altura);


            if(IMC < 18.5){

                resultado.innerHTML = `<p class="result">Seu IMC é ${IMC.toFixed(2)} (Abaixo do peso)</p>`;

            }else if(IMC >= 18.5 && IMC <= 24.9){

                resultado.innerHTML = `<p class="result">Seu IMC é ${IMC.toFixed(2)} (Peso normal)</p>`;

            }else if(IMC >= 25 && IMC <= 29.9){

                resultado.innerHTML = `<p class="result">Seu IMC é ${IMC.toFixed(2)} (Sobrepeso)</p>`;

            }else if(IMC >= 30 && IMC <= 34.9){

                resultado.innerHTML = `<p class="result">Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 1)</p>`;

            }else if(IMC >= 35 && IMC <= 39.9){

                resultado.innerHTML = `<p class="result">Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 2)</p>`;

            }else{

                resultado.innerHTML = `<p class="result">Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 3)</p>`;

            }
        }
    }

    form.addEventListener('submit', calcularIMC);

}
meuEscopo();
