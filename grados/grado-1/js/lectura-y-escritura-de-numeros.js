import { numeroALetras } from '../../../js/numeros-a-letras.js';
import { generadorNumeros } from '../../../js/numeros-aleatorios.js';
import { generadorNumerosSinDecenas } from '../../../js/numeros-aleatorios.js';

//Genera los numeros de la tabla table-1-a-9
const tbodyTable1a9 = document.querySelector('#table-1-a-9 tbody');
for (let i = 1; i <= 9; i++) {
    const tr = document.createElement('tr');
    tbodyTable1a9.appendChild(tr).innerHTML = `
        <td><span class="text-math-danger bubble-gum fs-2 align-middle">${i}</span></td>
        <td class="align-middle text-capitalize">${numeroALetras(i)}</td>
        `;
}

//Genera los numeros de la tabla table-10-a-90
const tbodyTable10a90 = document.querySelector('#table-10-a-90 tbody');
for (let i = 10; i <= 90; i += 10) {
    const tr = document.createElement('tr');
    tbodyTable10a90.appendChild(tr).innerHTML = `
        <td><span class="text-math-danger bubble-gum fs-2 align-middle">${i}</span></td>
        <td class="align-middle text-capitalize">${numeroALetras(i)}</td>
        `;
}

//Genera los numeros de la tabla table-11-a-29
const tbodyTable11a29 = document.querySelector('#table-11-a-29 tbody');
for (let i = 11; i <= 29; i++) {
    const tr = document.createElement('tr');
    tbodyTable11a29.appendChild(tr).innerHTML = `
        <td><span class="text-math-danger bubble-gum fs-2 align-middle">${i}</span></td>
        <td class="align-middle text-capitalize">${numeroALetras(i)}</td>
        `;
}

//Genera 10 numeros aleatorios en la tabla table-30-hacia-arriba
const tbodyTable30HaciaArriba = document.querySelector('#table-30-hacia-arriba tbody');
const numeros30a99 = generadorNumerosSinDecenas(10,30,99)
for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');
    tbodyTable30HaciaArriba.appendChild(tr).innerHTML = `
    <td><span class="text-math-danger bubble-gum fs-2 align-middle">${numeros30a99[i]}</span></td>
    <td class="align-middle text-capitalize">${numeroALetras(numeros30a99[i])}</td>
    `;
}

//Genera la escritura del numero introducido por el usuario
const inputNumeroIntroducido = document.querySelector('#numeroIntroducido')
const numeroEnTexto = document.querySelector('#numeroEnTexto')
const btnConsultaNumero = document.querySelector('#consultaNumero')
btnConsultaNumero.addEventListener('click', (e) => {
    e.preventDefault()
    if(isNaN(inputNumeroIntroducido.value)){
        numeroEnTexto.textContent = 'Debes introducir solamente numeros'
    }else{
        numeroEnTexto.textContent = `${numeroALetras(inputNumeroIntroducido.value)}`   
    }
})



