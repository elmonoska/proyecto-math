import { aOrdinal } from "../../../js/numero-a-ordinal.js";
import { numeroAleatorio } from "../../../js/numeros-aleatorios.js";
import {
  animacionBotones,
  animacionImagenes,
  animacionListasUl,
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
  animacionListasUl();
  animacionTablas();
  animacionBotones();
  recargarPagina();

  //Ejecucion de funciones en DOM
  generaTablaOrdinal1a10();
  generaTablaOrdinal10a90();
  generaCentenasOrdinales()
  generaUnidadesMillarOrdinales();
  generaordinalesAleatorios();
});

//Function que genera los ordinales de la tabla table-ordinal-1-a-10
function generaTablaOrdinal1a10() {
  const tbodyTableOrdinal1a10 = document.querySelector("#table-ordinal-1-a-10");
  for (let i = 1; i < 10; i++) {
    const tr = document.createElement("tr");
    tbodyTableOrdinal1a10.appendChild(tr).innerHTML = `
        <td><span class="text-math-danger bubble-gum fs-2 align-middle">${i}°</span></td>
        <td class="text-capitalize align-middle">${aOrdinal(i)}</td>
        `;
  }
}

//Function que genera los ordinales de la tabla table-ordinal-10-a-90
function generaTablaOrdinal10a90() {
  const tbodyTableOrdinal1a10 = document.querySelector(
    "#table-ordinal-10-a-90"
  );
  for (let i = 10; i <= 90; i += 10) {
    const tr = document.createElement("tr");
    tbodyTableOrdinal1a10.appendChild(tr).innerHTML = `
        <td><span class="text-math-danger bubble-gum fs-2 align-middle">${i}°</span></td>
        <td class="text-capitalize align-middle">${aOrdinal(i)}</td>
        `;
  }
}

//Function que genera los ordinales de la tabla centenasOrdinales
function generaCentenasOrdinales() {
  const centenasOrdinales = document.querySelector(
    "#centenasOrdinales"
  );
  for (let i = 100; i <= 900; i += 100) {
    const tr = document.createElement("tr");
    centenasOrdinales.appendChild(tr).innerHTML = `
        <td><span class="text-math-danger bubble-gum fs-2 align-middle">${i}°</span></td>
        <td class="text-capitalize align-middle">${aOrdinal(i)}</td>
        `;
  }
}

//Function que genera los ordinales de la tabla unidadesMillarOrdinales
function generaUnidadesMillarOrdinales() {
  const unidadesMillarOrdinales = document.querySelector(
    "#unidadesMillarOrdinales"
  );
  for (let i = 1000; i <= 9000; i += 1000) {
    const tr = document.createElement("tr");
    unidadesMillarOrdinales.appendChild(tr).innerHTML = `
        <td><span class="text-math-danger bubble-gum fs-2 align-middle">${i}°</span></td>
        <td class="text-capitalize align-middle">${aOrdinal(i)}</td>
        `;
  }
}

//Function que genera los ordinales al azar de la tabla ordinalesAleatorios
function generaordinalesAleatorios() {
  const ordinalesAleatorios = document.querySelector(
    "#ordinalesAleatorios"
  );
  for (let i = 0; i < 5; i++) {
    let numeroNuevo = numeroAleatorio(1, 9999);
    const tr = document.createElement("tr");
    ordinalesAleatorios.appendChild(tr).innerHTML = `
        <td><span class="text-math-danger bubble-gum fs-2 align-middle">${numeroNuevo}°</span></td>
        <td class="text-capitalize align-middle">${aOrdinal(numeroNuevo)}</td>
        `;
  }
}



const btnConsultaNumero = document.querySelector("#consultaNumeros");
btnConsultaNumero.addEventListener("click", () => {
  const numeroIntroducido = document.querySelector("#numeroIntroducido");
  const msg = document.querySelector("#msg");
  if (
    numeroAleatorio.value === 0 ||
    numeroIntroducido.value === "" ||
    isNaN(numeroIntroducido.value)
  ) {
    msg.textContent = "Debes introducir algun numero";
  } else {
    msg.textContent = aOrdinal(numeroIntroducido.value);
  }
});
