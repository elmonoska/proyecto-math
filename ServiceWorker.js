//Se asigna nombre a la cacha y version
const nombreCache = 'v1CacheCursoMatematicas', 
    urlsToCache = [ 
        //Raiz
        './',
        './app.js',
        './index.html',
        './manifest.json',
        './menu-principal.html',
        './ServiceWorker.js',
        
        
        //Carpeta Audio
        //'./audio'
        

        //Carpeta css
        './css/bootstrap.css',
        './css/styles.css',


        //Carpeta cuestionarios
            //cuestionarios-grado-1
            './cuestionarios/cuestionarios-grado-1/numeros-naturales-cuestionario-1.html',
            './cuestionarios/cuestionarios-grado-1/preguntas-en-general.js',
                //js
                './cuestionarios/cuestionarios-grado-1/js/numeros-naturales.js',
            //models
            './cuestionarios/Models/Cuestionario.js',
            './cuestionarios/Models/Interfaz.js',
            './cuestionarios/Models/Pregunta.js',
        
        
        //Carpeta docs
        './doc/doc-numeros-1-a-99.pdf',
        './doc/doc-numeros-ordinales-1-a-99.pdf',


        //Carpeta fonts
        './fonts/BubblegumSans-Regular.otf',
        './fonts/Poppins-Regular.ttf',


        //Carpeta grados
            //grado1
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
                //js
                
            //grado2


        //Carpeta img
        './img/512x512 portada-del-curso.png',
        './img/portada-del-curso-large.png',
            //pinsa
            './img/pinsa/logo-pinsa-transparent.png',
            //math
                //grado1
                
                //icons
                './img/math/icons/back-color.svg',
                './img/math/icons/flecha-hacia-arriba.svg',
                './img/math/icons/index.svg',
                './img/math/icons/question-black.svg',
                './img/math/icons/question-white.svg',
                './img/math/icons/talking.svg',
                //icons-grados
                
                //portadas-temas
                    //grado1
                    './img/math/portadas-temas/grado-1/01_numeros-naturales.png',
                    './img/math/portadas-temas/grado-1/02_unidades-y-decenas.png',
                    './img/math/portadas-temas/grado-1/portada-tema.png',
        
        
        //Carpeta indice-general
        

        //Carpeta js
        './js/bootstrap.js',
        './js/numero-a-ordinal.js',
        './js/numeros-a-letras.js',
        './js/numeros-aleatorios.js',
    ]

//Instala el SW
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(nombreCache)
        .then(cache => {
            return cache.addAll(urlsToCache)
            .then(() => self.skipWaiting())
        })
        .catch(error => console.error('Fallo en el registro de cache', error))
    )
})

//Activa los recursos para hacer que funcione sin conexion
self.addEventListener('activate', e => {
    const cacheWhitelist = [nombreCache]
  
    e.waitUntil(
      caches.keys()
        .then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => {
              //Eliminamos lo que ya no se necesita en cache
              if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName)
              }
            })
          )
        })
        // Le indica al SW activar el cache actual
        .then(() => self.clients.claim())
    )
  })

//Recupera los archivos y verifica si hubo cambios en el cache
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if(res){
                return res
            }
            return fetch(e.request)
        })
    )
})
