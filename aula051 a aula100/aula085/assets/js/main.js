class ValidaFormulario{
    constructor(){
        this.form = document.querySelector('.form');
        this.eventos()

    }

    eventos(){
        this.form.addEventListener('submit', e=> {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas){
            alert('Formulario Enviado')
            this.form.submit();
        }
    }

    senhasSaoValidas(){

        let valid = true;

        const senha = this.form.querySelector('.senha')
        const repetirsenha = this.form.querySelector('.repetir-senha')
        
        if(senha.value !== repetirsenha.value){
            valid = false

            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais')
            this.criaErro(repetirsenha, 'Campos senha e repetir senha precisam ser iguais')
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false
            this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres')

        }

        return valid;
    }

    camposSaoValidos(){
        let valid = true;

        for(let errorText of this.form.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.form.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML;
            if(!campo.value){
                this.criaErro(campo, `Campo "${label}", não pode estar em branco`)
                valid = false
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }
            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }

        }
        return valid;
    }

    validaUsuario(campo){

        const usuario = campo.value
        let valid = true
        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres')
            valid = false

        }
        if(!usuario.match(/^[a-zA-Z-9]+$/g)){
            this.criaErro(campo, 'Usuario precisa conter apenas letras e/ou numeros')
            valid = false

        }

        return valid
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()){
            this.criaErro(campo, 'CPF inválido.');
            return false

        }
        return true
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario();