
class Carro{

    // metodo inicial
    constructor(marca, modelo, year){
        this.marca  = marca;
        this.modelo = modelo;
        this.year   = year;
        this.velocidad = 0;
    }

    //metodo acelerar
    acelerar(){
        this.velocidad = this.velocidad + 100;
    }
    //metodo frenar
    frenar(){
        this.velocidad = this.velocidad - 50;
    }

}


module.exports = { Carro }



