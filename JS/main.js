const numeros = document.querySelectorAll(".numero");
const operadores = document.querySelectorAll(".operador");
const igual = document.querySelector(".igual");
const borrar_T = document.querySelector(".borrar-TODO");
const pantalla = document.querySelector(".Pantalla");

const borrar_uno = document.querySelector(".boton-borrar");

let opActual = "";
let opAnterior = "";
let resultado = "";
let operador = "";


numeros.forEach((numero) => {
    numero.addEventListener("click", () => {
        opActual += numero.innerHTML;
        pantalla.innerHTML = opActual;
    })
})

operadores.forEach((ope) => {
    ope.addEventListener("click", () => {
        opAnterior = opActual;
        opActual = "";
        operador = ope.innerHTML;
    })
})

igual.addEventListener("click", () => {
    switch(operador){
        case "+":
            resultado = parseFloat(opAnterior) + parseFloat(opActual);
            break;
        case "-":
            resultado = parseFloat(opAnterior) - parseFloat(opActual);
            break;
        case "%":
            resultado = parseFloat(opAnterior) / parseFloat(opActual);
            break;
        case "X":
            resultado = parseFloat(opAnterior) * parseFloat(opActual);
            break;
        default:
            console.log("operacion no valida")    
    }
    pantalla.innerHTML = resultado;
})

borrar_T.addEventListener("click", () => { 
    pantalla.innerHTML = "";
    opActual = "";      
    opAnterior = "";   
    resultado = "";     
    operador = ""; 
})

borrar_uno.addEventListener("click", () =>{     
    opActual = opActual.slice(0, -1);               
    pantalla.innerHTML = opActual;                  
})