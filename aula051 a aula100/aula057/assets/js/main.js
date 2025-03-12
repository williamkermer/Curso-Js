function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        btnClear:document.querySelector('.btn-clear'),

        inicia(){

            this.clickBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                    e.preventDefault(); 
                    this.realizaConta();
                }
            });
        },

        realizaConta(){

            let conta = this.display.value;

            try{

                conta = eval(conta);

                if(!conta){

                    alert('Conta Inválida');
                    return;

                }
                this.display.value = String(conta);

            }catch(e){
                alert('Conta Inválida');
                return;
            }


        },

        clearDisplay(){
            this.display.value = '';

        },

        apagaUm(){

            this.display.value = this.display.value.slice(0,-1)

        },

        clickBotoes(){

            document.addEventListener('click', function(e){

                const el = e.target

                if(el.classList.contains('btn-num')){

                    this.btnParaDisplay(el.innerText)

                }
                if(el.classList.contains('btn-clear')){

                    this.clearDisplay();

                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();

                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();

                }

                
            }.bind(this))

        },

        btnParaDisplay(innerText){

            this.display.value += innerText
            
        }

    }
}

const calculadora = criaCalculadora();

calculadora.inicia();