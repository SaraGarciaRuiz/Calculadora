"use strict"

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const calcular = document.getElementById("calcular");

function sumar(numero1, numero2){
    let calculo = numero1 + numero2;
    console.log()
    console.log(calculo);
}

function restar(){
    let calculo = numero1 - numero2;
}

function multiplicar(){
    let calculo = numero1 * numero2
}

function dividir(){
    let calculo = numero1 / numero2;
}

function elevado(){
    let calculo = numero1 ** numero2;
}

function resto(){
    let calculo = numero1 % numero2;
}

calcular.addEventListener(sumar())

