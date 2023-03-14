import {
  animacionBotones,
  animacionImagenes,
  animacionListasUl,
  animacionParrafos,
  animacionSubtema,
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
