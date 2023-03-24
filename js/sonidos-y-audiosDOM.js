//Funcion de prueba para agregar audio, solamente esta multiplicacion grado 2
export function audioPrueba (rutaAudio) {
    const musica = rutaAudio;
    const audio = new Audio(musica)
    //audio.play()
    audio.volume = 0.2
    
}

/**
 * 
 * @param {String} rutaAudio Recibe la ruta donde se encuentra el audio correcto guardado
 */
export function sonidoRespuestaCorrecta(rutaAudio){
    const audio = rutaAudio;
    const sonido = new Audio(audio)
    sonido.play()
    sonido.volume = 0.5
}

/**
 * 
 * @param {String} rutaAudio Recibe la ruta donde se encuentra el audio incorrecto guardado
 */
export function sonidoRespuestaIncorrecta (rutaAudio){
    const audio = rutaAudio;
    const sonido = new Audio(audio)
    sonido.play()
    sonido.volume = 0.5

}
  