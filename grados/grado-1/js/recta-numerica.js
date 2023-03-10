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
  animacionListasUl();
  animacionImagenes();
  animacionBotones();
  recargarPagina();
});
