import { numeroALetras } from "../../../js/numeros-a-letras.js";
import { generadorNumeros } from "../../../js/numeros-aleatorios.js";

//Genera 5 ejemplos aleatorios en la tabla antecesor-sucesor-3-ejemplos
const tbodyTable3Ejemplos = document.querySelector('#antecesor-sucesor-3-ejemplos tbody');
const numeros1a99TresEjemplos = generadorNumeros(5,1,99)
numeros1a99TresEjemplos.forEach( numero => {
    const tr = document.createElement('tr');
    tbodyTable3Ejemplos.appendChild(tr).innerHTML = `
    <td class="align-middle">${numero-1}</td>
    <td><span class="text-math-danger bubble-gum fs-2 align-middle">${numero}</span></td>
    <td class="align-middle">${numero+1}</td>
    `
})

//Genera el antecesor y sucesor de un numero introducido por el usuario
const inputNumeroIntroducido = document.querySelector('#numeroIntroducido')
const tbodyTableGenerarAntYSuc = document.querySelector('#table-generar-antecesor-sucesor tbody')
const errorTableGenerarAntYSuc = document.querySelector('#error-table-generar-antecesor-sucesor')
const btnConsultaNumeros = document.querySelector('#consultaNumeros')

btnConsultaNumeros.addEventListener('click', (e) => {
    e.preventDefault();
    if(isNaN(inputNumeroIntroducido.value) || inputNumeroIntroducido.value === ""){
        errorTableGenerarAntYSuc.textContent = 'Debes introducir solamente numeros'
        tbodyTableGenerarAntYSuc.childNodes[1].childNodes[1].textContent = '¿?'
        tbodyTableGenerarAntYSuc.childNodes[1].childNodes[3].textContent = '¿?'
        tbodyTableGenerarAntYSuc.childNodes[1].childNodes[5].textContent = '¿?'
    }else{
        tbodyTableGenerarAntYSuc.childNodes[1].childNodes[1].textContent = parseInt(inputNumeroIntroducido.value)-1
        tbodyTableGenerarAntYSuc.childNodes[1].childNodes[3].childNodes[0].textContent = parseInt(inputNumeroIntroducido.value)
        tbodyTableGenerarAntYSuc.childNodes[1].childNodes[5].textContent = parseInt(inputNumeroIntroducido.value)+1
        errorTableGenerarAntYSuc.textContent = ''
    }
})