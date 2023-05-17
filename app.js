
const CuentaBancaria = require("./classes/CuentaBancaria");


// clase de banco
const newCliente = new CuentaBancaria("Daniel");


newCliente.depositarDinero(1800);
newCliente.retirarDinero(700);
newCliente.retirarDinero(500);


console.log(newCliente.consultarSaldo());



// let respt = newCliente.retirarDinero(100);

// console.log(respt);
