import { generadorNumeros, numeroAleatorio } from "../../../js/numeros-aleatorios.js";

//Funcion que genera 5 sumas al azar con los numeros del 1 al 20 en la lista suma5Ejercicios
function crea5Ejercicios1a20 () {
    const listaSuma5Ejercicios = document.querySelector('#suma5Ejercicios');
    for(let i = 0; i < 5; i++){
    const li = document.createElement('li');
    listaSuma5Ejercicios.appendChild(li).innerHTML = `Suma ${numeroAleatorio(1,10)}<span class="text-math-danger buble-gum fs-4 align-middle"> + </span>${numeroAleatorio(1,10)}`;
    }
}

const listaSuma10Ejercicios = document.querySelector('#suma10Ejercicios');
for(let i = 1; i <= 5; i++){
    let numero1 = numeroAleatorio(1,99);
    let numero2 = numeroAleatorio(1,99);
    while(numero1 + numero2 >= 100){
        numero1 = numeroAleatorio(1,99);
        numero2 = numeroAleatorio(1,99);
    }
    let suma = numero1 + numero2;
    const li = document.createElement('li');
    li.classList = 'list-none p-3';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.classList = 'input-group-text p-3 shadow w-100 mx-auto';
    input.placeholder = 'Escribe tu respuesta aqui';
    listaSuma10Ejercicios.appendChild(li).innerHTML = `${numero1} <span class="align-middle text-math-danger fs-2">+</span> ${numero2}`;

    listaSuma10Ejercicios.appendChild(input);
    //Reconoce y evalua las respuesta ingresadas por el usuario
    input.addEventListener('blur', () => {
        if(parseInt(input.value) !== suma){
            input.classList.add('border', 'border-danger', 'bg-danger', 'bg-opacity-25')
            input.placeholder = 'Respuesta incorrecta, intentalo nuevamente'
            console.log('mal')
        }else{
            input.classList.replace('border-danger', 'border-success');
            input.classList.replace('bg-danger', 'bg-success');
        }
    })

}

//Ejecucion de funciones en DOM
crea5Ejercicios1a20();