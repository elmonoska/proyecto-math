import {
  numeroAleatorio,
} from "../../../js/numeros-aleatorios.js";
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
  generaEjemploMayorQue();
  generarEjemploMenorQue();
  generarEjemplosSimbolos();
});

//Funcion que compara 2 numeros y retorna simbolo de comparacion
function agregarSignoComparacion(num1, num2) {
  let resultadoSigno = "";
  if (num1 == num2) {
    return (resultadoSigno = "=");
  }
  if (num1 < num2) {
    return (resultadoSigno = "<");
  } else {
    return (resultadoSigno = ">");
  }
}

//Funcion que genera 5 ejemplos de mayor que en la tabla mayor-que-ejemplos
function generaEjemploMayorQue() {
  const tbodyTableMayorQueEjemplos = document.querySelector(
    "#mayor-que-ejemplos tbody"
  );
  for (let i = 0; i < 5; i++) {
    let num1 = numeroAleatorio(1, 99);
    let num2 = numeroAleatorio(1, 99);
    while (num1 < num2) {
      num1 = numeroAleatorio(1, 99);
      if (num1 == num2) {
        num1 = numeroAleatorio(1, 99);
      }
    }
    const tr = document.createElement("tr");
    tbodyTableMayorQueEjemplos.appendChild(tr).innerHTML = `
        <td class="align-middle">${num1}</td>
        <td><span class="align-middle bubble-gum text-math-danger display-4"> &gt; </span></td>
        <td class="align-middle">${num2}</td>
        `;
  }
}

//Funcion que genera 5 ejemplos de menor que en la tabla menor-que-ejemplos
function generarEjemploMenorQue() {
  const tbodyTableMenorQueEjemplos = document.querySelector(
    "#menor-que-ejemplos tbody"
  );
  for (let i = 0; i < 5; i++) {
    let num1 = numeroAleatorio(1, 99);
    let num2 = numeroAleatorio(1, 99);
    while (num1 > num2) {
      num1 = numeroAleatorio(1, 99);
      if (num1 == num2) {
        num1 = numeroAleatorio(1, 99);
      }
    }
    const tr = document.createElement("tr");
    tbodyTableMenorQueEjemplos.appendChild(tr).innerHTML = `
        <td class="align-middle">${num1}</td>
        <td><span class="align-middle bubble-gum text-math-danger display-4"> &lt; </span></td>
        <td class="align-middle">${num2}</td>
        `;
  }
}

//Funcion que genera 5 ejemplos e incluye todos los simbolo sen la tabla may-men-igual-que-ejemplos
function generarEjemplosSimbolos() {
  const tbodyTableMayorMenorIgualQueEjemplos = document.querySelector(
    "#may-men-igual-que-ejemplos tbody"
  );
  for (let i = 0; i < 5; i++) {
    let num1 = numeroAleatorio(1, 99);
    let num2 = numeroAleatorio(1, 99);
    const tr = document.createElement("tr");
    tbodyTableMayorMenorIgualQueEjemplos.appendChild(tr).innerHTML = `
        <td class="align-middle">${num1}</td>
        <td><span class="align-middle bubble-gum text-math-danger display-4"> ${agregarSignoComparacion(
          num1,
          num2
        )} </span></td>
        <td class="align-middle">${num2}</td>
        `;
  }
}

//Comprueba que numero es mayor entre 2 numeros introducidos
const btnConsultaComparacion = document.querySelector("#consultaComparacion");
btnConsultaComparacion.addEventListener("click", () => {
  const tbodyTableComparacion2Numeros = document.querySelector(
    "#comparacion2Numeros"
  );
  const msgErrorComparacion = document.querySelector("#msgErrorComparacion");
  let inputNumero1 = document.querySelector("#inputNumero1");
  let inputNumero2 = document.querySelector("#inputNumero2");

  if (
    isNaN(inputNumero1.value) ||
    isNaN(inputNumero2.value) ||
    inputNumero1.value == "" ||
    inputNumero2.value == ""
  ) {
    msgErrorComparacion.textContent = "Debes introducir solamente numeros.";
  } else {
    msgErrorComparacion.textContent = "";
    tbodyTableComparacion2Numeros.children[1].children[0].children[1].children[0].textContent = `${agregarSignoComparacion(
      parseInt(inputNumero1.value),
      parseInt(inputNumero2.value)
    )}`;
  }
});
