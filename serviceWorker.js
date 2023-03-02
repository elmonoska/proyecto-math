//Asignacion de nombre de cache
const nombreCache = 'v1CacheCursoMatematicas', 
    urlsToCache = [
    //Raiz
    './',
    './index.html',
    './menu-principal.html',
    './serviceWorker.js',


    //Carpeta css
    './css/bootstrap.css',
    './css/styles.css',


    //Carpeta cuestionarios


    //Carpeta doc


    //Carpeta fonts
    './fonts/BubblegumSans-Regular.otf',
    './fonts/Poppins-Regular.ttf',


    //Carpeta grados
        //Carpeta grados/grado-1

            //Carpeta grados/grado-1/js

            //Carpeta grados/grado-1
            './grados/grado-1/antecesor-y-sucesor.html',
            './grados/grado-1/comparacion-de-numeros.html',
            './grados/grado-1/el-calendario.html',
            './grados/grado-1/el-reloj.html',
            './grados/grado-1/figuras-geometricas.html',
            './grados/grado-1/la-resta.html',
            './grados/grado-1/la-suma.html',
            './grados/grado-1/las-monedas-y-los-billetes.html',
            './grados/grado-1/lectura-y-escritura-de-numeros.html',
            './grados/grado-1/menu-grado-1.html',
            './grados/grado-1/numeros-naturales.html',
            './grados/grado-1/numeros-ordinales.html',
            './grados/grado-1/recta-numerica.html',
            './grados/grado-1/serie-numerica.html',
            './grados/grado-1/unidad-y-decena.html',


    //Carpeta img
    './img/512x512 portada-del-curso.png',
    './img/portada-del-curso-large.png',
       
        //Carpeta img/pinsa
        './img/pinsa/logo-pinsa-transparent.png',
       
        //Carpeta img/math
            //Carpeta img/math/grado1
            
            //Carpeta img/math/icons
            './img/math/icons/back-color.svg',
            './img/math/icons/flecha-hacia-arriba.svg',
            './img/math/icons/index.svg',
            './img/math/icons/question-black.svg',
            './img/math/icons/question-white.svg',
            './img/math/icons/talking.svg',
            //Carpeta img/math/icons-grados
            './img/math/icons-grados/flecha-grado-1.svg',
            './img/math/icons-grados/icono-grado-1.svg',
            './img/math/icons-grados/icono-grado-2.svg',
            './img/math/icons-grados/icono-grado-3.svg',
            './img/math/icons-grados/icono-grado-4.svg',
            './img/math/icons-grados/icono-grado-5.svg',
            './img/math/icons-grados/icono-grado-6.svg',
            //Carpeta img/math/portada-temas
                //Carpeta img/math/portada-temas-grado-1
                './img/math/portadas-temas/grado-1/01_numeros-naturales.png',
                './img/math/portadas-temas/grado-1/02_unidades-y-decenas.png',
                './img/math/portadas-temas/grado-1/portada-tema.png',
    //Carpeta indice-general

    //Carpeta js
    './js/app.js',
    './js/bootstrap.js',
    ]

//Durante la fase de instalacion almacena en cache todos los archivos estaticos
self.addEventListener('install', evento => {
    evento.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                return cache.addAll(urlsToCache)
                    .then(() => self.skipWaiting())
            })
            .catch(error => console.error('Fallo de registro de cache', error))
    )
})

//Cuando se instala el service worker se activa y busca los recursos para hacer que funcione sin conexion
self.addEventListener('activate', evento => {
    const cacheWhiteList = [nombreCache]
    evento.waitUntil(
        caches.keys()
            .then(cacheNames => {
                cacheNames.map(cacheName => {
                    //Eliminamos lo que ya no necesita en cache
                    if(cacheWhiteList.indexOf(cacheName) === -1){
                        return caches.delete(cacheName)
                    }
                })
            })
            //Le indica al service worker activa el cache actual
            .then(() => self.clients.claim())
    )
})

//Cuando el navegador recupera una url
self.addEventListener('fetch', evento => {
    //Responder ya sea con el objeto en cache o continuar y buscar la url real
    evento.respondWith(
        caches.match(evento.request)
            .then(response => {
                if(response){
                    //Recuperando del cache 
                    return response
                }
                //Recuperar de la peticion a la url
                return fetch(evento.request)
            })
    )
})