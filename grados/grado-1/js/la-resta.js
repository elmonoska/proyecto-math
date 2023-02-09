import { generadorNumeros, numeroAleatorio } from "../../../js/numeros-aleatorios.js";

//Funcion que genera 5 ejercicios en la lista resta5Ejercicios1 del 1 al 20
function resta5Ejercicios1 () {
    const resta5Ejercicios1 = document.querySelector('#resta5Ejercicios');
    for(let i = 0; i < 5;i++){
        const li = document.createElement('li');
        let numero1 = numeroAleatorio(1,20);
        let numero2 = numeroAleatorio(1,20);
        while(numero1 <= numero2 || numero1 - numero2 <= 0){
            numero1 = numeroAleatorio(1,20);
            numero2 = numeroAleatorio(1,20);
        }
        resta5Ejercicios1.appendChild(li).innerHTML = `Resta ${numero1} <span class="text-math-danger buble-gum fs-3 align-middle"> - </span> ${numero2}`
    }
}

//
function resta5Ejercicios2 () {
    const resta5Ejercicios2 = document.querySelector('#resta5Ejercicios2');
    for(let i = 0; i < 5; i++){
        //Creacion de operaciones en los parrafos
        const p = document.createElement('p');
        p.classList = 'mt-4 p-2 fs-3'

        //Creacion de inputs para resultados
        const inputText = document.createElement('input');
        inputText.type = 'text';
        inputText.classList = 'input-group-text p-3 shadow w-50 mx-auto'
        inputText.placeholder = 'Escribe tu respuesta aqui'

        let numero1 = numeroAleatorio(1,99);
        let numero2 = numeroAleatorio(1,99);
        while(numero1 - numero2 <= 0){
            numero1 = numeroAleatorio(1,99);
        }
        let resultado = numero1 - numero2;

        //Insertando los elementos eh el html
        resta5Ejercicios2.appendChild(p).innerHTML = `${numero1} <span class="align-middle text-math-danger fs-2">-</span>  ${numero2}`
        resta5Ejercicios2.appendChild(inputText)

        //Reconoce y evalua las respuesta ingresadas por el usuario al momento que escribe
        inputText.addEventListener('keyup', event => {
            if(parseInt(event.target.value) === resultado){
                inputText.classList = 'border border-success bg-success bg-opacity-25 input-group-text p-3 shadow w-50 mx-auto';
            }else{
                inputText.classList = 'border border-danger bg-danger bg-opacity-25 input-group-text p-3 shadow w-50 mx-auto';
            }
        })
    }
}


//Ejecucion de funciones en el DOM
resta5Ejercicios1();
resta5Ejercicios2();
