import { Pregunta } from "../../../js/cuestionario.js";

const preguntas = [
    {
        pregunta: '¿Cual es...?',
        opciones: [
            'Correcta',
            'Incorrecta',
            'Posible'
        ],
        respuesta: 'Correcta'
    },
    {
        pregunta: 'Cuando se pudo...?',
        opciones: [
            'Correcta',
            'Incorrecta',
            'Posible'
        ],
        respuesta: 'Correcta'
    },
    {
        pregunta: 'A donde...?',
        opciones: [
            'Correcta',
            'Incorrecta',
            'Posible'
        ],
        respuesta: 'Correcta'
    }
]
const nuevasPreguntas = preguntas.map(nuevaPregunta => {
    return new Pregunta (nuevaPregunta.pregunta, nuevaPregunta.opciones, nuevaPregunta.respuesta)
})
console.log(nuevasPreguntas)