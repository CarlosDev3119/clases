const { CuentaBancaria, Cliente } = require("./classes/CuentaBancaria");


const {cliente} = new Cliente('Carlos');


const cuentaCliente = new CuentaBancaria(cliente);

cuentaCliente.depositarDinero(1800);
cuentaCliente.depositarDinero(2000);

cuentaCliente.retiroDinero(1000);

let saldoActual = cuentaCliente.mostrarSaldo();

console.log(cuentaCliente);


