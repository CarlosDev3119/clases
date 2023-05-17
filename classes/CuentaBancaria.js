
class CuentaBancaria{

    constructor( cliente ){
        this.cliente = cliente;
        this.saldo   = 0;
        this.cuenta  = new Date().getTime();
    }

    retirarDinero( cantidadRetiro ){

        if( cantidadRetiro > this.saldo ){
            return 'No cuentas con saldo suficente';
        }
        
        this.saldo = this.saldo - cantidadRetiro;

        return this.saldo;
    }

    consultarSaldo(){
        return this.saldo;
    }

    depositarDinero( cantidadDeposito ){
        this.saldo = this.saldo + cantidadDeposito;
    }

}

module.exports = CuentaBancaria;