function criaPessoa(nome, sobrenome, alt, pes){

    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return`${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor){

            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
        
        },
        fala(assunto){
            return `${nome} está ${assunto}`

        },
        altura: alt,
        peso: pes,
        get imc(){ //a palavra get possibilita chamar funções como variaveis comuns

            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);

        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);

// const p2 = criaPessoa('Will', 'Kermer', 1.75, 64);
// console.log(p2.fala('falando sobre JS'));