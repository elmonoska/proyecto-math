//Valida si el navegador puede trabajar con service worker
if('serviceWorker' in navigator){
    navigator.serviceWorker.getRegistrations()
    .then((registrations) => 
    { 
        for(let registration of registrations) 
        { 
            registration.unregister() 
        } 
    })
    const pathServiceWorker = './ServiceWorker.js'
    navigator.serviceWorker.register(pathServiceWorker)
    .then(registro => console.log('Registro de SW correcto', registro))
    .catch(error => {
        alert('Error al tratar de registrar el SW', error);
        console.error('Error al tratar de registrar el SW', error);
    })
}

