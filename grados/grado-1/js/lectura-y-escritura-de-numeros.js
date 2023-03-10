import { numeroALetras } from "../../../js/numeros-a-letras.js";
import { generadorNumerosSinDecenas } from "../../../js/numeros-aleatorios.js";
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
  generaTabla1A9();
  generaTabla10a90();
  generaTabla11A29();
  generaTabla30HaciaArriba();
});

//Funcion que genera los numeros de la tabla table-1-a-9
function generaTabla1A9() {
  const tbodyTable1a9 = document.querySelector("#table-1-a-9 tbody");
  for (let i = 1; i <= 9; i++) {
    const tr = document.createElement("tr");
    tbodyTable1a9.appendChild(tr).innerHTML = `
        <td><span class="text-math-danger bubble-gum fs-2 align-middle">${i}</span></td>
        <td class="align-middle text-capitalize">${numeroALetras(i)}</td>
        `;
  }
}

//Funcion que genera los numeros de la tabla table-10-a-90
function generaTabla10a90() {
  const tbodyTable10a90 = document.querySelector("#table-10-a-90 tbody");
  for (let i = 10; i <= 90; i += 10) {
    const tr = document.createElement("tr");
    tbodyTable10a90.appendChild(tr).innerHTML = `
        <td><span class="text-math-danger bubble-gum fs-2 align-middle">${i}</span></td>
        <td class="align-middle text-capitalize">${numeroALetras(i)}</td>
        `;
  }
}

//Funcion que genera los numeros de la tabla table-11-a-29
function generaTabla11A29() {
  const tbodyTable11a29 = document.querySelector("#table-11-a-29 tbody");
  for (let i = 11; i <= 29; i++) {
    const tr = document.createElement("tr");
    tbodyTable11a29.appendChild(tr).innerHTML = `
        <td><span class="text-math-danger bubble-gum fs-2 align-middle">${i}</span></td>
        <td class="align-middle text-capitalize">${numeroALetras(i)}</td>
        `;
  }
}

//Funcion que genera 10 numeros aleatorios en la tabla table-30-hacia-arriba
function generaTabla30HaciaArriba() {
  const tbodyTable30HaciaArriba = document.querySelector(
    "#table-30-hacia-arriba tbody"
  );
  const numeros30a99 = generadorNumerosSinDecenas(10, 30, 99);
  numeros30a99.forEach((numero) => {
    const tr = document.createElement("tr");
    tbodyTable30HaciaArriba.appendChild(tr).innerHTML = `
    <td><span class="text-math-danger bubble-gum fs-2 align-middle">${numero}</span></td>
    <td class="align-middle text-capitalize">${numeroALetras(numero)}</td>
    `;
  });
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
