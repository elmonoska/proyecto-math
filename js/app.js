//Valida si el navegador puede trabajar con service worker
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../serviceWorker.js')
    .then(registro => console.log('Registro de SW correcto', registro))
    .catch(error => alert('Error al tratar de registrar el SW', error))
}