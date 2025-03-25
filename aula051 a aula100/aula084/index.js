class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')

        });
    }

    eSequncia(){

        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;

    }

    geraNovoCpf(){

        const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    geraDigito(cpfSemDigitos){

        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos){

            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';

    }

    valida(){

        if(!this.cpfLimpo)return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequncia()) return false;
        this.geraNovoCpf();

        return this.novoCpf === this.cpfLimpo;
    }

}

const validacpf = new ValidaCPF('393.879.398-80');

if(validacpf.valida()){
    console.log('CPF válido');
}else{
    console.log('CPF inválido');
}