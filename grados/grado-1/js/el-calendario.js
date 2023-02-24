const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado', 'domingo'];
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 
            'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const fechaActual = new Date();
const diaActual = fechaActual.getDay();
const diaDeMesActual = fechaActual.getDate();
const mesActual = fechaActual.getMonth();

const arriba = document.querySelector('#arriba').textContent
console.log(arriba)
speechSynthesis.speak(new SpeechSynthesisUtterance(arriba))