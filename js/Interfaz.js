export class Interfaz {
    constructor() {

    }
    /**
     * 
     * @param {string} texto esta es la pregunta que se mostrara en el DOM
     */
    muestraPregunta(texto) {
        const tituloPregunta = document.querySelector('#pregunta');
        tituloPregunta.textContent = texto;
    }

    /**
     * 
     * @param {string[]} opciones las opciones de la pregunta
     */
    muestrasOpciones(opciones, callback) {
        const contenedorOpciones = document.querySelector('#opciones');
        contenedorOpciones.textContent = ''
        for (let i = 0; i < opciones.length; i++) {
            {
                const button = document.createElement('button');
                button.textContent = opciones[i]
                button.className = 'boton'
                button.addEventListener('click', () => callback(opciones[i]))

                contenedorOpciones.appendChild(button)
            }
        }
    }

    /**
     * 
     * @param {number} calificacion es el puntaje final del cuestionario
     */
    muestraCalificacion(calificacion){
        const cuestionarioFinalizadoHTML = `
        <h1>Calificacion</h1>
        <h2>Tu calificacion fue de: ${calificacion}</h2>
        `
        const cuestionario = document.querySelector('#cuestionario')
        cuestionario.innerHTML = cuestionarioFinalizadoHTML
    }

    /**
     * 
     * @param {number} preguntaActual es la pregunta actual en el cuestionario
     * @param {number} total el total de numero de pregunta
     */
    muestraProgreso(preguntaActual, total){
        const progreso = document.querySelector('#progreso')
        progreso.innerHTML = `Pregunta ${preguntaActual} de ${total}`
    }
}