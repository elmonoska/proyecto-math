const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado', 'domingo'];
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 
            'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const fechaActual = new Date();
const diaActual = fechaActual.getDay()-1;
const diaDeMesActual = fechaActual.getDate();
const mesActual = fechaActual.getMonth()-1;
const diaActualLetra = dias[diaActual].toUpperCase()
const mesActualLetra = meses[mesActual].toUpperCase()

const hoy = document.querySelector('#hoy')
hoy.textContent = dias[diaActual]

const mañana = document.querySelector('#mañana')
mañana.textContent = dias[diaActual+1]

const ayer = document.querySelector('#ayer')
ayer.textContent = dias[diaActual-1]



const queDiaEsHoy = document.querySelector('#queDiaEsHoy')
for(let i = 0; i < dias.length; i++){
    const option = document.createElement('option')
    option.textContent = dias[i].toUpperCase()
    option.value = dias[i].toUpperCase()
    queDiaEsHoy.appendChild(option)
}
queDiaEsHoy.addEventListener('change', (e) => {
    const diaSeleccionado = e.target.value
    if(diaSeleccionado === diaActualLetra){
        queDiaEsHoy.classList = 'border border-success bg-success bg-opacity-25 form-select mb-3 text-center'
    }else{
        queDiaEsHoy.classList = 'border border-danger bg-danger bg-opacity-25 form-select mb-3 text-center'
    }
})

const queMesEs = document.querySelector('#queMesEs')
for(let i =0; i < meses.length; i++){
    const option = document.createElement('option')
    option.textContent = meses[i].toUpperCase()
    option.value = meses[i].toUpperCase()
    queMesEs.appendChild(option)
}
queMesEs.addEventListener('change', (e) => {
    const mesSeleccionado = e.target.value
    if(mesSeleccionado === mesActualLetra){
        queMesEs.classList = 'border border-success bg-success bg-opacity-25 form-select mb-3 text-center'
    }else{
        queMesEs.classList = 'border border-danger bg-danger bg-opacity-25 form-select mb-3 text-center'
    }
})
