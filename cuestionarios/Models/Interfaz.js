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
     * @param {string} img la imagen de cada pregunta
     */
    muestraImg(img){
        const imgPregunta = document.querySelector('#imgPregunta');
        imgPregunta.src = img;
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
                button.className = 'btn btn-light p-4 w-75 border border-dark border-opacity-75 shadow my-2 text-capitalize'
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
        <h1 class="text-center bubble-gum display-1 text-danger text-stroke-black">Has finalizado el cuestionario.</h1>
        <hr>
        <h2 class="text-center">Tu calificacion final es de: <strong class="text-danger text-stroke-black bubble-gum display-3">${calificacion}</strong></h2>
        <a href="javascript:location.reload()"
          class="btn btn-primary bubble-gum text-white text-uppercase text-shadow-black fs-3 p-3 mb-2 w-75 mx-auto">volver a intentar</a>
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