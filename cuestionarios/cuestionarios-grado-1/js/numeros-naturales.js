import { Cuestionario } from "../../../js/Cuestionario.js";
import { Interfaz } from "../../../js/Interfaz.js";
import { Pregunta } from "../../../js/Pregunta.js";
import { preguntasPrimerTema } from "../preguntas-en-general.js";

const nuevasPreguntas = preguntasPrimerTema.map(pregunta => {
    return new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta);
})

/**
 * 
 * @param {Cuestionario} cuestionario es un objeto nuevo de Cuestionario
 * @param {Interfaz} interfaz  es un objeto nuevo de Interfaz
 */
function recargarPagina(cuestionario, interfaz) {
    if (cuestionario.haFinalizado()) {
        console.log(cuestionario.calificacion)
        interfaz.muestraCalificacion(cuestionario.calificacion)
    } else {

        interfaz.muestraPregunta(cuestionario.obtenerPreguntaActual().pregunta);
        interfaz.muestrasOpciones(cuestionario.obtenerPreguntaActual().opciones, (opcionActual) => {
            cuestionario.adivinar(opcionActual)
            recargarPagina(cuestionario, interfaz)
        })
        interfaz.muestraProgreso(cuestionario.preguntaIndice + 1, nuevasPreguntas.length)
    }
}

function menu() {
    const cuestionario = new Cuestionario(nuevasPreguntas);
    const interfaz = new Interfaz();
    recargarPagina(cuestionario, interfaz)
}

menu()