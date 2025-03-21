function Conta(agencia, conta, saldo){

    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

}


Conta.prototype.sacar = function(valor){

    if(this.saldo < valor){
        console.log(`Saldo Insuficiente: ${this.saldo}`)
        return;
    }

    this.saldo -= valor;

};
Conta.prototype.depositar = function(){

    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){

    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` + `Saldo: ${this.saldo.toFixed(2)}`);

};



function CC(agencia, conta, saldo, limite){

    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;

}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor){

    if((this.saldo + this.limite) < valor){
        console.log(`Saldo Insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;

};

const conta1 = new CC(11,22,100,100);
conta1.sacar(201);
