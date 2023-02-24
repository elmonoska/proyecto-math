document.addEventListener('DOMContentLoaded', () => {
    if('speechSynthesis' in window){
//Carga las voces disponibles en español cuando carga el documento
speechSynthesis.addEventListener('voiceschanged', () =>{
    const texto = contenido.innerText
    const voces = speechSynthesis.getVoices().filter(voz => voz.lang.includes('MX'))
    const numerroVozAleatoria = Math.floor(Math.random()*voces.length)
    
    let lectura = new SpeechSynthesisUtterance(texto)
    let sintetizador = speechSynthesis
    lectura.voice = voces[numerroVozAleatoria]
    lectura.lang = voces[numerroVozAleatoria].lang
    lectura.pitch = 0
    lectura.rate = 0.90
    btnAudioPlay.addEventListener('click', () => {
        sintetizador.speak(lectura)
        msgLectura.textContent = 'Reproduciendo...'
    })
    btnAudioPause.addEventListener('click', () => {
        sintetizador.pause()
        msgLectura.textContent = 'En pausa...'
    })
    btnAudioResume.addEventListener('click', () => {
        sintetizador.resume()
        msgLectura.textContent = 'Continuando reproduccion...'
    })
    btnAudioCancel.addEventListener('click', () => {
        sintetizador.cancel()
        msgLectura.textContent = 'Deteniendo audio...'
    })    
    console.log(lectura)
})
    }else{
        alert('No es compatible')
    }
    
        
})

