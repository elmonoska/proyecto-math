//Funcion para generar numero aleatorio entre un rango en expecifico
export function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//Funcion para generar grupos de numeros
export function generadorNumeros(totalDeNumeros, numeroMinimo, numeroMaximo) {
    let numeros = [];
    while (numeros.length < totalDeNumeros) {
        const numeroNuevo = numeroAleatorio(numeroMinimo, numeroMaximo);
        if (numeros.indexOf(numeroNuevo) < 0) numeros.push(numeroNuevo);
    }
    return numeros;
}