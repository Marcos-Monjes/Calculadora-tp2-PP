//Codigo para efectuar los calculos

class Calculadora {

    operadores = {
        '+' : 'sumar',
        '-' : 'restar',
        'X' : 'multiplicar',
        '%' : 'dividir'
    };
    sumar(n1, n2) {
        return n1 + n2;
    }
    restar(n1, n2) {
        return n1 - n2;
    }
    dividir(n1, n2) {
        return n1 / n2;
    }
    multiplicar(n1 , n2) {
        return n1 * n2;
    }
}