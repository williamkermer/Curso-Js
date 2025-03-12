function Calculadora(){
    
        this.display = document.querySelector('.display');
        this.btnClear = document.querySelector('.btn-clear');

        this.inicia = () => {

            this.clickBotoes();
            this.pressionaEnter();
        };
        //
        this.pressionaEnter = () =>{
            this.display.addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                    e.preventDefault(); 
                    this.realizaConta();
                }
            });
        };
        //
        this.realizaConta = () => {

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


        };
        //
        this.clearDisplay = () => {
            this.display.value = '';

        };
        //
        this.apagaUm = () => {

            this.display.value = this.display.value.slice(0,-1)

        };
        //
        this.clickBotoes = () => {

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

        };
        //
        this.btnParaDisplay = (innerText) => {

            this.display.value += innerText
            this.display.focus();
            
        };

    }
const calculadora = new Calculadora();
calculadora.inicia();