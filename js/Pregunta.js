export class Pregunta {
    /**
     * 
     * @param {string} pregunta este es el texto de la pregunta
     * @param {Array} opciones estas son las opciones de las preguntas
     * @param {string} respuesta  esta es la respuesta de la pregunta
     */
    constructor(pregunta, opciones, respuesta){
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }
    /**
     * 
     * @param {string} respuestaUser la respuesta del usuario en texto
     * @returns {boolean} devuelve si la respuesta del usuario es correcta
     */
    validarRespuesta(respuestaUser){
        return respuestaUser === this.respuesta;
    }
}