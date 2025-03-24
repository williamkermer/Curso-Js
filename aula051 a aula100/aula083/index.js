class ControleRemoto{

    constructor(tv, volume){

        this.tv = tv;
        this.volume = volume;

    }
    //Metodo de instância
    aumentarVolume(){

        this.volume += 2

    }
    diminuirVolume(){

        this.volume -= 2

    }
    //Metodo Estático
    static trocaPilha(){
        console.log("Pilhas Trocadas")
    }

}

const c1 = new ControleRemoto('LG', 10);
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
console.log(c1);

ControleRemoto.trocaPilha();