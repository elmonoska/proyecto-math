//Carga y registra el servicio del Service worker si exite
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./serviceWorker.js')
        .then(reg => console.log('Registro exitoso de SW', reg))
        .catch(error => console.error('Error al tratar de registrar SW', error))
}