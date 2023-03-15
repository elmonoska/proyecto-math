import { numeroALetras } from "../../../js/numeros-a-letras.js";
import { numeroAleatorio, numeroConComas } from "../../../js/numeros-aleatorios.js";
import {
  animacionBotones,
  animacionImagenes,
  animacionListasUl,
  animacionListasOl,
  animacionParrafos,
  animacionSubtema,
  animacionTablas,
  animacionTitulo,
  recargarPagina,
} from "../../../js/animacionesDOM.js";

document.addEventListener("DOMContentLoaded", () => {
  animacionTitulo();
  animacionSubtema();
  animacionParrafos();
  animacionImagenes();
  animacionTablas();
  animacionListasUl();
  animacionListasOl();
  animacionBotones();
  recargarPagina();

  //Ejecucion de funciones en DOM
  generaTabla100a900();
  generaTabla1000a9000()
  generaNumero1a9999();
});


//Funcion que genera los numeros de la tabla tabla100a900
function generaTabla100a900() {
  const tbodyTable100a900 = document.querySelector("#tabla100a900 tbody");
  for (let i = 100; i <= 900; i += 100) {
    const tr = document.createElement("tr");
    tbodyTable100a900.appendChild(tr).innerHTML = `
        <td><span class="text-math-danger bubble-gum fs-2 align-middle">${i}</span></td>
        <td class="align-middle text-capitalize">${numeroALetras(i)}</td>
        `;
  }
}

//Funcion que genera los numeros de la tabla tabla1000a9000
function generaTabla1000a9000() {
  const tbodyTable1000a9000 = document.querySelector("#tabla1000a9000 tbody");
  for (let i = 1000; i <= 9000; i += 1000) {
    const tr = document.createElement("tr");
    tbodyTable1000a9000.appendChild(tr).innerHTML = `
        <td><span class="text-math-danger bubble-gum fs-2 align-middle">${i}</span></td>
        <td class="align-middle text-capitalize">${numeroALetras(i)}</td>
        `;
  }
}

//Funcion que genera un numero aleatorio entre el 1 al 9999
function generaNumero1a9999(){
  let numero = numeroAleatorio(1,9999)
  const numeroEntre1a9999 = document.querySelector('#numeroEntre1a9999').textContent = numero
  const numeroEscritoEntre1a9999 = document.querySelector('#numeroEscritoEntre1a9999').textContent = numeroALetras(numero)
}

//Genera la escritura del numero introducido por el usuario
const btnConsultaNumero = document.querySelector("#consultaNumero");
btnConsultaNumero.addEventListener("click", (e) => {
  const inputNumeroIntroducido = document.querySelector("#numeroIntroducido");
  const numeroEnTexto = document.querySelector("#numeroEnTexto");
  e.preventDefault();
  if (isNaN(inputNumeroIntroducido.value)) {
    numeroEnTexto.textContent = "Debes introducir solamente numeros";
  } else {
    numeroEnTexto.textContent = `${numeroALetras(
      inputNumeroIntroducido.value
    )}.`;
  }
});