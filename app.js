"use strict"

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const operacion = document.getElementById("operacion");

function sumar(){
    let calculo = numero1.value + numero2;
    resultado.innerText = calculo;
}

function restar(){
    let calculo = numero1.value - numero2.value;
    resultado.innerText = calculo;

}

function multiplicar(){
    let calculo = numero1.value * numero2.value;
    resultado.innerText = calculo;

}

function dividir(){
    let calculo = numero1.value / numero2.value;
    resultado.innerText = calculo;

}

function elevado(){
    let calculo = numero1.value ** numero2.value;
    resultado.innerText = calculo;

}

function resto(){
    let calculo = numero1.value % numero2.value;
    resultado.innerText = calculo;

}

switch(operacion){
    case "sumar":
        sumar();
        break;
    case "restar":
        restar();
        break;
    case "multiplicar":
        multiplicar();
        break;
    case "dividir":
        dividir();
        break;
    case "elevado":
        elevado();
        break;
    case "resto": 
        resto();
        break;
    default:
        "No has seleccionado una operaci´on"

}
calcular.addEventListener("click", sumar);
