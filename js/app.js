if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../serviceWorker.js')
    .then(registro => console.log('Registro de SW correcto', registro))
    .catch(error => console.error('Error al tratar de registrar el SW', error))
}