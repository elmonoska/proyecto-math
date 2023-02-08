import { generadorNumeros, numeroAleatorio } from "../../../js/numeros-aleatorios.js";


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



//Ejecucion de funciones en el DOM
resta5Ejercicios1();