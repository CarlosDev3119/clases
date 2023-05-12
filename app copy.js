
//crear un programa que se encargue de sumar, restar, multiplicar, dividir, elevar un numero al cuadrado
// los resultados se deben agregar al objeto dado, utilizando funciones.

const { operacionSuma, 
        operacionResta, 
        operacionMultiplicacion, 
        operacionDivideishon, 
        operacionPotenciaCuadratica } = require("./helpers/operaciones");

//objeto
const resultados = {
    suma: 0,
    resta: 0,
    multiplicacion: 0,
    division: 0,
    potencia: 0
}

let numero1 = 10, numero2 = 14;

//llamar funciones
operacionSuma(numero1, numero2, resultados);
operacionResta(numero1, numero2, resultados);
operacionMultiplicacion(numero1, numero2, resultados);
operacionDivideishon(numero1, numero2, resultados);
operacionPotenciaCuadratica(numero1, resultados);


console.log(resultados);


