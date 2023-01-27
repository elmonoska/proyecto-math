import { Cuestionario } from "../../../js/Cuestionario.js";
import { Interfaz } from "../../../js/Interfaz.js";
import { Pregunta } from "../../../js/Pregunta.js";
import { preguntasPrimerTema } from "../preguntas-en-general.js";

const preguntasDesordenadas = preguntasPrimerTema.sort(() => Math.random()-0.5)
const nuevasPreguntas = preguntasDesordenadas.map(pregunta => {
    return new Pregunta(pregunta.pregunta, pregunta.opciones.sort(()=> Math.random()-0.5), pregunta.respuesta);
})

/**
 * 
 * @param {Cuestionario} cuestionario es un objeto nuevo de Cuestionario
 * @param {Interfaz} interfaz  es un objeto nuevo de Interfaz
 */
function recargarPagina(cuestionario, interfaz) {
    if (cuestionario.haFinalizado()) {
        interfaz.muestraCalificacion((cuestionario.calificacion/nuevasPreguntas.length)*10)
    } else {
        interfaz.muestraPregunta(cuestionario.obtenerPreguntaActual().pregunta);
        interfaz.muestrasOpciones(cuestionario.obtenerPreguntaActual().opciones, (opcionActual) => {
            cuestionario.adivinar(opcionActual)
            setTimeout(() => {
                recargarPagina(cuestionario, interfaz)
            }, 500);
        })
        interfaz.muestraProgreso(cuestionario.preguntaIndice + 1, nuevasPreguntas.length)
    }
}

function menu() {
    const cuestionario = new Cuestionario(nuevasPreguntas);
    const interfaz = new Interfaz();
    recargarPagina(cuestionario, interfaz)
}

const empezarCuestionario = document.querySelector('#empezar')
const instrucciones = document.querySelector('#instrucciones')
empezarCuestionario.addEventListener('click', () => {
    setTimeout(() => {
        instrucciones.classList.add('d-none')
        menu();
    }, 500);
})
