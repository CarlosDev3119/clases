class Cliente{
    constructor( cliente ){
        this.cliente = {
            saldo: 0,
            cuenta: new Date().getTime(),
            cliente
        }
    }
}

class CuentaBancaria{

    constructor( {cliente, saldo, cuenta} ){
        this.cliente = cliente;
        this.saldo   = saldo;
        this.cuenta  = cuenta;
    }

    retiroDinero( cantidad ){
        if( cantidad > this.saldo){
            return 'No cuentas con saldo suficiente';
        }
        this.saldo = this.saldo - cantidad;
    }

    depositarDinero( cantidad ){
        this.saldo = this.saldo + cantidad;
    }

    mostrarSaldo(){
        return this.saldo;
    }

}


module.exports = {
    Cliente,
    CuentaBancaria
};
