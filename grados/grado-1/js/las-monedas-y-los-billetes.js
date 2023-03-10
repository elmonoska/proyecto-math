import {
  animacionBotones,
  animacionImagenes,
  animacionParrafos,
  animacionSubtema,
  animacionTitulo,
  recargarPagina,
} from "../../../js/animacionesDOM.js";

document.addEventListener("DOMContentLoaded", () => {
  animacionTitulo();
  animacionSubtema();
  animacionParrafos();
  animacionImagenes();
  animacionBotones();
  recargarPagina();
});
