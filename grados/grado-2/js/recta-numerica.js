import {
  animacionBotones,
  animacionImagenes,
  animacionListasUl,
  animacionParrafos,
  animacionSubtema,
  animacionTitulo,
  recargarPagina,
} from "../../../js/animacionesDOM.js";
import { numeroAleatorio } from "../../../js/numeros-aleatorios.js";

document.addEventListener("DOMContentLoaded", () => {
  animacionTitulo();
  animacionSubtema();
  animacionParrafos();
  animacionListasUl();
  animacionImagenes();
  animacionBotones();
  recargarPagina();

  //Funciones del DOM
  ejerciciosRecta();
});

/**
 * Funcion que genera los datos de la recta
 * @returns {Array} Secuencia, multiplos, numero inicial y numero final
 */
function generaDatosDeRecta() {
  let secuencia = numeroAleatorio(1, 99);
  let multiplos = [];
  for (let i = 1; i <= 10; i++) {
    multiplos.push(secuencia * i);
  }
  let numeroInicial = multiplos[Math.floor(Math.random() * multiplos.length)];
  let numeroFinal = numeroInicial * numeroAleatorio(1, 20);
  let datosRecta = [secuencia, multiplos, numeroInicial, numeroFinal];
  return datosRecta;
}

function creaRectaNumerica() {
  let nuevaRecta = generaDatosDeRecta();
  while (nuevaRecta[3] >= 999) {
    nuevaRecta = generaDatosDeRecta();
  }
  return nuevaRecta;
}

/**
 * Funcion que genera 5 ejercicios de recta numerica en lista ejerciciosRecta
 */
function ejerciciosRecta() {
  const ejerciciosRecta = document.querySelector("#ejerciciosRecta");
  for (let i = 0; i < 5; i++) {
    const li = document.createElement("li");
    const datosRecta = creaRectaNumerica();
    li.textContent = `Desde el ${datosRecta[2]} hasta el ${datosRecta[3]}, de ${datosRecta[0]} en ${datosRecta[0]}.`;
    ejerciciosRecta.appendChild(li);
  }
}
