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
import { 
  sonidoRespuestaCorrecta,
  sonidoRespuestaIncorrecta,
} from "../../../js/sonidos-y-audiosDOM.js";

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
  resta5Ejercicios();
});



//
function resta5Ejercicios() {
  const resta5Ejercicios = document.querySelector("#resta5Ejercicios");
  for (let i = 0; i < 5; i++) {
    //Creacion de operaciones en los parrafos
    const p = document.createElement("p");
    p.classList = "mt-4 p-2 fs-3";

    //Creacion de inputs para resultados
    const inputText = document.createElement("input");
    inputText.type = "text";
    inputText.classList = "input-group-text p-3 shadow w-50 mx-auto";
    inputText.placeholder = "Escribe tu respuesta aqui";

    let numero1 = numeroAleatorio(1, 9999);
    let numero2 = numeroAleatorio(1, 9999);
    let resultado;
    
    if(numero1>numero2){
      resultado = numero1-numero2;
    }else{
      resultado = numero2-numero1;
    }

    //Insertando los elementos eh el html
    resta5Ejercicios.appendChild(
      p
    ).innerHTML = `${numero1} <span class="align-middle text-math-danger fs-2">-</span>  ${numero2}`;
    resta5Ejercicios.appendChild(inputText);

    //Reconoce y evalua las respuesta ingresadas por el usuario al momento que escribe
    inputText.addEventListener("keyup", (event) => {
      if (parseInt(event.target.value) === resultado) {
        inputText.classList =
          "border border-success bg-success bg-opacity-25 input-group-text p-3 shadow w-50 mx-auto";
          sonidoRespuestaCorrecta('../../../audio/souds/correct.ogg')
        } else {
          inputText.classList =
          "border border-danger bg-danger bg-opacity-25 input-group-text p-3 shadow w-50 mx-auto";
          sonidoRespuestaIncorrecta('../../../audio/souds/incorrect.ogg')
      }
    });
  }
}