

class OperacionesClass {

    //metodo que se inicializa al llamar nuestra clase
    constructor(){
        this.resultados = {
            suma: 0,
            resta: 0,
            multiplicacion: 0,
            division: 0,
            potencia: 0
        }
    }

    //metodo comun
    operacionSuma(num1, num2){
        this.resultados.suma = num1 + num2;
    }

    operacionResta(num1, num2){
        this.resultados.resta = num1 - num2;
    }

    operacionMulti(num1, num2){
        this.resultados.multiplicacion = num1 * num2;
    }

    operacionDivision(num1, num2){
        this.resultados.division = num1 / num2;
    }

    operacionPotencia(num1){
        this.resultados.potencia = Math.pow(num1, 2);
    }

}

module.exports = {
    OperacionesClass
}
