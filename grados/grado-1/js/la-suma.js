import { generadorNumeros, numeroAleatorio } from "../../../js/numeros-aleatorios.js";

//Funcion que genera 5 sumas al azar con los numeros del 1 al 20 en la lista suma5Ejercicios
function crea5Ejercicios1a20 () {
    const listaSuma5Ejercicios = document.querySelector('#suma5Ejercicios');
    for(let i = 0; i < 5; i++){
    const li = document.createElement('li');
    listaSuma5Ejercicios.appendChild(li).innerHTML = `Suma ${numeroAleatorio(1,10)}<span class="text-math-danger buble-gum fs-4 align-middle"> + </span>${numeroAleatorio(1,10)}`;
    }
}

//Ejecucion de funciones en DOM
crea5Ejercicios1a20();