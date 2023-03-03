//Valida si el navegador puede trabajar con service worker
if('serviceWorker' in navigator){
    const pathServiceWorker = './serviceWorker.js'
    navigator.serviceWorker.register(pathServiceWorker)
    .then(registro => console.log('Registro de SW correcto', registro))
    .catch(error => {
        alert('Error al tratar de registrar el SW', error);
        console.error('Error al tratar de registrar el SW', error);
    })
}