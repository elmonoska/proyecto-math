import {
  generadorNumeros,
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
  animacionTablas();
  animacionListasUl();
  animacionBotones();
  recargarPagina();

  //Ejecucion de funciones en DOM
  comparacionDeCantidadesEjemplos()
  comparacionDeCantidadesEjercicios()
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

//Funcion que ayuda a desordenar un arreglo de forma aleatoria
function desordenaArreglo(arreglo){
  const nuevoArreglo = arreglo.sort(() => Math.random()-0.5)
  return nuevoArreglo
}

//Funcion para generar una suma con numeros aleatorios
function generaSumaAleatoria(numeroMinimo, numeroMaximo){
  let numero1 = numeroAleatorio(numeroMinimo,numeroMaximo);
  let numero2 = numeroAleatorio(numeroMinimo,numeroMaximo);
  const signo = '+';
  let resultado = numero1+numero2;
  let valoresDeSuma = [numero1, numero2, resultado, signo]
  return valoresDeSuma;
}

//Funcion para generar una resta con numeros aleatorios
function generaRestaAleatoria(numeroMinimo, numeroMaximo){
  let numero1 = numeroAleatorio(numeroMinimo, numeroMaximo);
  let numero2 = numeroAleatorio(numeroMinimo, numeroMaximo);
  const signo = '-';
  while(numero1 < numero2){
    numero1 = numeroAleatorio(numeroMinimo, numeroMaximo);
  }
  let resultado = numero1-numero2;
  let valoresDeResta = [numero1, numero2, resultado, signo];
  return valoresDeResta;
}

//Funcion que genera 5 ejemplos en la tabla comparacionDeCantidadesEjemplos
function comparacionDeCantidadesEjemplos(){
  const comparacionDeCantidadesEjemplos = document.querySelector('#comparacionDeCantidadesEjemplos tbody')
  for(let i = 0; i<5;i++){
    const tr = document.createElement('tr')
    let operaciones = [generaSumaAleatoria(1,9999), 
                      generaSumaAleatoria(1,9999), 
                      generaRestaAleatoria(1,9999), 
                      generaRestaAleatoria(1,9999)
                    ];
    let operacionesRevueltas = desordenaArreglo(operaciones);
    tr.innerHTML = `
    <td class="d-flex justify-content-center align-items-center">
      <span class="fs-1 text-danger">${operacionesRevueltas[0][3]}</span>
      <div class="d-flex flex-column w-50 justify-content-center text-end">
        ${operacionesRevueltas[0][0]}<br>
        ${operacionesRevueltas[0][1]}<br>
        <span class="border-top border-danger border-3">${operacionesRevueltas[0][2]}</span>
      </div>
    </td>

    <td class="align-middle"><span class="text-danger fs-1 bubble-gum">${agregarSignoComparacion(operacionesRevueltas[0][2], operacionesRevueltas[1][2])}</span></td>
  
    <td class="d-flex justify-content-center align-items-center">
      <span class="fs-1 text-danger">${operacionesRevueltas[1][3]}</span>
      <div class="d-flex flex-column w-50 justify-content-center text-end">
        ${operacionesRevueltas[1][0]}<br>
        ${operacionesRevueltas[1][1]}<br>
        <span class="border-top border-danger border-3">${operacionesRevueltas[1][2]}</span>
      </div>
    </td>
    `
    comparacionDeCantidadesEjemplos.appendChild(tr)
  }
}

function comparacionDeCantidadesEjercicios(){
  const comparacionDeCantidadesEjercicios = document.querySelector('#comparacionDeCantidadesEjercicios tbody')
for(let i = 0; i<3;i++){
  const tr = document.createElement('tr')
  let operaciones = [generaSumaAleatoria(1,9999), 
                    generaSumaAleatoria(1,9999), 
                    generaRestaAleatoria(1,9999), 
                    generaRestaAleatoria(1,9999)
                  ];
  let operacionesRevueltas = desordenaArreglo(operaciones);
  let comparacion = agregarSignoComparacion(operacionesRevueltas[0][2], operacionesRevueltas[1][2])
  
  //Codigo para crear el select de comparacion
  const td = document.createElement('td')
  td.classList = 'align-middle'
  
  const select = document.createElement('select')
  console.log(select)
  
  const option = document.createElement('option')
  let tdComparacion = `
  <td class="align-middle">
    <select class="text-center" id="respuestaSimbolo">
      <option class="form-select mb-3" value="Default" disabled selected>Selecciona</option>
      <option value="<"> < </option>
      <option value=">"> > </option>
      <option value="="> = </option>
      <option value="prueba">${''}</option>
    </select>
  </td>
  `
  
  tr.innerHTML = `
  <td class="d-flex justify-content-center align-items-center">
    <span class="fs-1 text-danger">${operacionesRevueltas[0][3]}</span>
    <div class="d-flex flex-column w-50 justify-content-center text-end">
      ${operacionesRevueltas[0][0]}<br>
      ${operacionesRevueltas[0][1]}<br>
      <span class="border-top border-danger border-3">${operacionesRevueltas[0][2]}</span>
    </div>
  </td>

  ${tdComparacion}
      
  <td class="d-flex justify-content-center align-items-center">
    <span class="fs-1 text-danger">${operacionesRevueltas[1][3]}</span>
    <div class="d-flex flex-column w-50 justify-content-center text-end">
      ${operacionesRevueltas[1][0]}<br>
      ${operacionesRevueltas[1][1]}<br>
      <span class="border-top border-danger border-3">${operacionesRevueltas[1][2]}</span>
    </div>
  </td>
  `

  comparacionDeCantidadesEjercicios.appendChild(tr)
}
}



