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
  
  //Ejecucion de funciones en el DOM
  
});

const ejerciciosMultiplicacion1 = document.querySelector('#ejerciciosMultiplicacion1')
console.log(ejerciciosMultiplicacion1)