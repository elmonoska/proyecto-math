import { generadorNumeros } from "../../../js/numeros-aleatorios.js";
import {
  animacionBotones,
  animacionImagenes,
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
  animacionBotones();
  recargarPagina();

  //Ejecucion de funciones en DOM
  generaEjemplosAntecesorYSucesor();
});

//Funcion que genera 5 ejemplos aleatorios en la tabla antecesorSucesor5Ejemplos
function generaEjemplosAntecesorYSucesor() {
  const tbodyTable5Ejemplos = document.querySelector(
    "#antecesorSucesor5Ejemplos tbody"
  );
  const numeros1a99TresEjemplos = generadorNumeros(5, 1, 9999);
  numeros1a99TresEjemplos.forEach((numero) => {
    const tr = document.createElement("tr");
    tbodyTable5Ejemplos.appendChild(tr).innerHTML = `
        <td class="align-middle">${numero - 1}</td>
        <td><span class="text-math-danger bubble-gum fs-2 align-middle">${numero}</span></td>
        <td class="align-middle">${numero + 1}</td>
        `;
  });
}

//Genera el antecesor y sucesor de un numero introducido por el usuario
const btnConsultaNumeros = document.querySelector("#consultaNumeros");
btnConsultaNumeros.addEventListener("click", (e) => {
  const inputNumeroIntroducido = document.querySelector("#numeroIntroducido");
  const tbodyTableGenerarAntYSuc = document.querySelector(
    "#table-generar-antecesor-sucesor tbody"
  );
  const msgErrorTableMayorMenorIgualQue = document.querySelector(
    "#msgErrorTableMayorMenorIgualQue"
  );
  e.preventDefault();
  if (
    isNaN(inputNumeroIntroducido.value) ||
    inputNumeroIntroducido.value === ""
  ) {
    msgErrorTableMayorMenorIgualQue.textContent =
      "Debes introducir solamente numeros.";
    tbodyTableGenerarAntYSuc.children[0].children[0].textContent = "¿?";
    tbodyTableGenerarAntYSuc.children[0].children[1].children[0].textContent =
      "¿?";
    tbodyTableGenerarAntYSuc.children[0].children[2].textContent = "¿?";
  } else {
    tbodyTableGenerarAntYSuc.children[0].children[0].textContent =
      parseInt(inputNumeroIntroducido.value) - 1;
    tbodyTableGenerarAntYSuc.children[0].children[1].children[0].textContent =
      parseInt(inputNumeroIntroducido.value);
    tbodyTableGenerarAntYSuc.children[0].children[2].textContent =
      parseInt(inputNumeroIntroducido.value) + 1;
    msgErrorTableMayorMenorIgualQue.textContent = "";
  }
});
