import { numeroALetras } from "../../../js/numeros-a-letras.js";
import { generadorNumeros, numeroAleatorio } from "../../../js/numeros-aleatorios.js";

function agregarSignoComparacion(num1, num2){
    let resultadoSigno = '';
    if(num1 == num2){
        resultadoSigno = '='
    }if(num1 < num2){
        resultadoSigno = '&lt;'
    }else{
        resultadoSigno = '&gt;'
    }
    return resultadoSigno;
}
//Genera 5 ejemplos de mayor que en la tabla mayor-que-ejemplos
const tbodyTableMayorQueEjemplos = document.querySelector('#mayor-que-ejemplos tbody')
for(let i = 0; i <5; i++){
    let num1 = numeroAleatorio(1,99)
    let num2 = numeroAleatorio(1,99)
    while(num1 < num2){
        num1 = numeroAleatorio(1,99)
        if(num1 == num2){
            num1 = numeroAleatorio(1,99)
        }
    }
    const tr = document.createElement('tr')
    tbodyTableMayorQueEjemplos.appendChild(tr).innerHTML = `
    <td class="align-middle">${num1}</td>
    <td><span class="align-middle bubble-gum text-math-danger display-4"> &gt; </span></td>
    <td class="align-middle">${num2}</td>
    `
}

//Genera 5 ejemplos de mayor que en la tabla menor-que-ejemplos
const tbodyTableMenorQueEjemplos = document.querySelector('#menor-que-ejemplos tbody')
for(let i = 0; i <5; i++){
    let num1 = numeroAleatorio(1,99)
    let num2 = numeroAleatorio(1,99)
    while(num1 > num2){
        num1 = numeroAleatorio(1,99)
        if(num1 == num2){
            num1 = numeroAleatorio(1,99)
        }
    }
    const tr = document.createElement('tr')
    tbodyTableMenorQueEjemplos.appendChild(tr).innerHTML = `
    <td class="align-middle">${num1}</td>
    <td><span class="align-middle bubble-gum text-math-danger display-4"> &lt; </span></td>
    <td class="align-middle">${num2}</td>
    `
}

//Genera 5 ejemplos de mayor que en la tabla may-men-igual-que-ejemplos
const tbodyTableMayorMenorIgualQueEjemplos = document.querySelector('#may-men-igual-que-ejemplos tbody')
for(let i = 0; i <5; i++){
    let num1 = numeroAleatorio(1,99)
    let num2 = numeroAleatorio(1,99)
    const tr = document.createElement('tr')
    tbodyTableMayorMenorIgualQueEjemplos.appendChild(tr).innerHTML = `
    <td class="align-middle">${num1}</td>
    <td><span class="align-middle bubble-gum text-math-danger display-4"> ${agregarSignoComparacion(num1, num2)} </span></td>
    <td class="align-middle">${num2}</td>
    `
}


//Comprueba que numero es mayor entre 2 numeros introducidos
