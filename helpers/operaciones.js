//suma +
const operacionSuma = ( numero1, numero2, resultado ) => {

    resultado.suma = numero1 + numero2;

    return resultado;
}

//resta -
const operacionResta = (numero1, numero2, resultado) => {

    resultado.resta = numero1 - numero2;

    return resultado;

}

//multi *
const operacionMultiplicacion = (numero1, numero2, resultado) => {
    
    resultado.multiplicacion = numero1 * numero2;

    return resultado;
}


//divideishon /
const operacionDivideishon = (numero1, numero2, resultado) => {
    resultado.division = numero1 / numero2;

    return resultado;
}


//cuadrado Math.pow(numero, 2); numero * numero
const operacionPotenciaCuadratica = (numero1, resultado) => {
    // resultado.potencia = numero1 * numero1;
    resultado.potencia = Math.pow(numero1, 2);

    return resultado;
}


module.exports = {
    operacionSuma,
    operacionResta,
    operacionMultiplicacion,
    operacionDivideishon,
    operacionPotenciaCuadratica,
}