const { OperacionesClass } = require("./classes/OperacionesClass");

//instancia
const operaciones = new OperacionesClass();

operaciones.operacionSuma(1, 2);
operaciones.operacionResta(1, 2);
operaciones.operacionMulti(1, 2);
operaciones.operacionDivision(1, 2);
operaciones.operacionPotencia(10);

console.log(operaciones.resultados);