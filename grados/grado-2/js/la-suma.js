import {
  numeroAleatorio,
} from "../../../js/numeros-aleatorios.js";
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
  crea5Ejercicios1a99();
});

//Funcion que genera 5 ejercicios aleatorios para ingresar respuesta en la lista suma10Ejercicios
function crea5Ejercicios1a99() {
  const listaSuma10Ejercicios = document.querySelector("#suma5Ejercicios2");
  //Crea los numeros aleatorios donde la suma sea menor a 100
  for (let i = 1; i <= 5; i++) {
    let numero1 = numeroAleatorio(1, 99);
    let numero2 = numeroAleatorio(1, 99);
    while (numero1 + numero2 >= 100) {
      numero1 = numeroAleatorio(1, 99);
      numero2 = numeroAleatorio(1, 99);
    }
    let suma = numero1 + numero2;

    //Creacion de li con estilos
    const li = document.createElement("li");
    li.classList = "p-2 fs-3";

    //Creacion de input con estilos
    const input = document.createElement("input");
    input.classList = "input-group-text p-3 shadow w-50 mx-auto mb-2";
    input.placeholder = "Escribe tu respuesta aqui";

    //Inserta los elementos html por cada vuelta
    listaSuma10Ejercicios.appendChild(
      li
    ).innerHTML = `${numero1} <span class="align-middle text-math-danger fs-2">+</span> ${numero2}`;
    listaSuma10Ejercicios.appendChild(input);

    //Reconoce y evalua las respuesta ingresadas por el usuario al momento que escribe
    input.addEventListener("keyup", (event) => {
      let valorInput = event.target;
      if (parseInt(valorInput.value) === suma) {
        valorInput.classList =
          "border border-success bg-success bg-opacity-25 input-group-text p-3 shadow w-50 mx-auto mb-2";
      } else {
        valorInput.classList =
          "border border-danger bg-danger bg-opacity-25 input-group-text p-3 shadow w-50 mx-auto mb-2";
      }
    });
  }
}
