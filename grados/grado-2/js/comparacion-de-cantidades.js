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

//Funcion que crea los ejercicios de compracion de cantidades en la tabla comparacionDeCantidadesEjercicios
function comparacionDeCantidadesEjercicios(){
  const comparacionDeCantidadesEjercicios = document.querySelector('#comparacionDeCantidadesEjercicios tbody')
  for(let i = 0; i<5;i++){
    const tr = document.createElement('tr')
    let operaciones = [generaSumaAleatoria(1,9999), 
                      generaSumaAleatoria(1,9999), 
                      generaRestaAleatoria(1,9999), 
                      generaRestaAleatoria(1,9999)
                    ];
    let operacionesRevueltas = desordenaArreglo(operaciones);
    
    
    //Codigo para crear el select de comparacion
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    td1.classList = 'd-flex justify-content-center align-items-center'
    td2.classList = 'align-middle'
    td3.classList = 'd-flex justify-content-center align-items-center'
    
    const select = document.createElement('select')
    select.classList = 'text-center'
    
    const option1 = document.createElement('option')
    option1.classList = 'form-select mb-3'
    option1.value = 'Default'
    option1.disabled = true
    option1.selected = true
    option1.textContent = 'Selecciona'
    
    const option2 = document.createElement('option')
    option2.classList = 'form-select mb-3'
    option2.value = '>'
    option2.textContent = '>'
    
    const option3 = document.createElement('option')
    option3.classList = 'form-select mb-3'
    option3.value = '<'
    option3.textContent = '<'
    
    const option4 = document.createElement('option')
    option4.classList = 'form-select mb-3'
    option4.value = '='
    option4.textContent = '='

    select.appendChild(option1)
    select.appendChild(option2)
    select.appendChild(option3)
    select.appendChild(option4)

    
    td1.innerHTML = `
    <span class="fs-1 text-danger">${operacionesRevueltas[0][3]}</span>
    <div class="d-flex flex-column w-50 justify-content-center text-end">
      ${operacionesRevueltas[0][0]}<br>
      ${operacionesRevueltas[0][1]}<br>
      <span class="border-top border-danger border-3">???</span>
    </div>
    `
    td2.appendChild(select)
    td3.innerHTML = `
    <span class="fs-1 text-danger">${operacionesRevueltas[1][3]}</span>
    <div class="d-flex flex-column w-50 justify-content-center text-end">
      ${operacionesRevueltas[1][0]}<br>
      ${operacionesRevueltas[1][1]}<br>
      <span class="border-top border-danger border-3">???</span>
    </div>
    `
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    comparacionDeCantidadesEjercicios.appendChild(tr)
    
    select.addEventListener('change', e => {
      const valorInput = e.target.value
      let comparacion = agregarSignoComparacion(operacionesRevueltas[0][2], operacionesRevueltas[1][2])
      if(valorInput === comparacion){
        select.classList = 'border border-success bg-success bg-opacity-25 form-select mb-3 text-center'
      }else{
        select.classList = 'border border-danger bg-danger bg-opacity-25 form-select mb-3 text-center'

      }
    })
  }
  //
}





