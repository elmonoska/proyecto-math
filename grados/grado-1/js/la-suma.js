import { generadorNumeros, numeroAleatorio } from "../../../js/numeros-aleatorios.js";

//Funcion que genera 5 sumas al azar con los numeros del 1 al 20 en la lista suma5Ejercicios
function crea5Ejercicios1a20() {
    const listaSuma5Ejercicios = document.querySelector('#suma5Ejercicios');
    for (let i = 0; i < 5; i++) {
        const li = document.createElement('li');
        listaSuma5Ejercicios.appendChild(li).innerHTML = `Suma ${numeroAleatorio(1, 10)}<span class="text-math-danger buble-gum fs-4 align-middle"> + </span>${numeroAleatorio(1, 10)}`;
    }
}

//Funcion que genera 5 ejercicios aleatorios para ingresar respuesta en la lista suma10Ejercicios
function crea5Ejercicios1a99() {
    const listaSuma10Ejercicios = document.querySelector('#suma5Ejercicios2');
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
        const li = document.createElement('li');
        li.classList = 'p-2 fs-3';
        
        //Creacion de input con estilos
        const input = document.createElement('input');
        input.classList = 'input-group-text p-3 shadow w-50 mx-auto mb-2';
        input.placeholder = 'Escribe tu respuesta aqui';

        //Inserta los elementos html por cada vuelta
        listaSuma10Ejercicios.appendChild(li).innerHTML = `${numero1} <span class="align-middle text-math-danger fs-2">+</span> ${numero2}`;
        listaSuma10Ejercicios.appendChild(input);

        //Reconoce y evalua las respuesta ingresadas por el usuario al momento que escribe
        input.addEventListener('keyup', e => {
            let valorInput = e.target
            if (parseInt(valorInput.value) === suma) {
                valorInput.classList = 'border border-success bg-success bg-opacity-25 input-group-text p-3 shadow w-50 mx-auto mb-2'
            } else{
                valorInput.classList = 'border border-danger bg-danger bg-opacity-25 input-group-text p-3 shadow w-50 mx-auto mb-2'
            }
        })
    }
}

//Ejecucion de funciones en DOM
crea5Ejercicios1a20();
crea5Ejercicios1a99();