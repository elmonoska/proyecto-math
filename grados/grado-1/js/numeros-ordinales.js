import { aOrdinal } from '../../../js/numero-a-ordinal.js'
import { generadorNumeros, numeroAleatorio } from '../../../js/numeros-aleatorios.js'

//Function que genera los ordinales de la tabla table-ordinal-1-a-10
function generaTablaOrdinal1a10 () {
    const tbodyTableOrdinal1a10 = document.querySelector('#table-ordinal-1-a-10');
    for (let i = 1; i < 10; i++){
        const tr = document.createElement('tr');
        tbodyTableOrdinal1a10.appendChild(tr).innerHTML = `
        <td><span class="text-math-danger bubble-gum fs-2 align-middle">${i}°</span></td>
        <td class="text-capitalize align-middle">${aOrdinal(i)}</td>
        `
    }
}    

//Function que genera los ordinales de la tabla table-ordinal-10-a-90
function generaTablaOrdinal10a90 () {
    const tbodyTableOrdinal1a10 = document.querySelector('#table-ordinal-10-a-90');
    for (let i = 10; i <= 90; i+=10){
        const tr = document.createElement('tr');
        tbodyTableOrdinal1a10.appendChild(tr).innerHTML = `
        <td><span class="text-math-danger bubble-gum fs-2 align-middle">${i}°</span></td>
        <td class="text-capitalize align-middle">${aOrdinal(i)}</td>
        `
    }
}    

//Function que genera los ordinales al azar de la tabla table-ordinal-11-a-99
function generaTablaOrdinal11a99 () {
    const tbodyTableOrdinal1a10 = document.querySelector('#table-ordinal-11-a-99');
    for(let i = 0; i < 5; i++){
        let numeroNuevo = numeroAleatorio(11,99);
        if(numeroNuevo%10 === 0){
            numeroNuevo = numeroAleatorio(11,99);
        }
        const tr = document.createElement('tr');
        tbodyTableOrdinal1a10.appendChild(tr).innerHTML = `
        <td><span class="text-math-danger bubble-gum fs-2 align-middle">${numeroNuevo}°</span></td>
        <td class="text-capitalize align-middle">${aOrdinal(numeroNuevo)}</td>
        `
    }
}    

const btnConsultaNumero = document.querySelector('#consultaNumeros')
btnConsultaNumero.addEventListener('click', () => {
    const numeroIntroducido = document.querySelector('#numeroIntroducido');
    const msg = document.querySelector('#msg');
    if(numeroAleatorio.value === 0 || numeroIntroducido.value === '' || isNaN(numeroIntroducido.value)){
        msg.textContent = 'Debes introducir algun numero'
    }else{
        msg.textContent = aOrdinal(numeroIntroducido.value)
    }
})

//Ejecucion de funciones en DOM
generaTablaOrdinal1a10();
generaTablaOrdinal10a90();
generaTablaOrdinal11a99();
