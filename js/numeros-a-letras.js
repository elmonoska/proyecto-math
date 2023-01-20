/*
* Codigo basado y modificado de:
    @source https://gist.github.com/alfchee/e563340276f89b22042a?permalink_comment_id=4118318#gistcomment-4118318
    @author TatoRamirez 

* Repositorio original https://gist.github.com/alfchee/e563340276f89b22042a
/*************************************************************/
// NumeroALetras
// The MIT License (MIT)
// 
// Copyright (c) 2015 Luis Alfredo Chee 
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// 
// @author Rodolfo Carmona
// @contributor Jean (jpbadoino@gmail.com)
/*************************************************************/

export const numeroALetras = (num) => {
    let data = {
        numero: num,
        enteros: Math.floor(num),
        decimales: Math.round(num * 100) - Math.floor(num) * 100,
        letrasDecimales: '',
    }

    if (data.decimales > 0) data.letrasDecimales = ' punto ' + Millones(data.decimales)

    if (data.enteros == 0) return 'cero' + data.letrasDecimales
    if (data.enteros == 1) return Millones(data.enteros) + data.letrasDecimales
    else return Millones(data.enteros) + data.letrasDecimales
}

const Unidades = (num) => {
    const aLetras = {
        1: 'uno',
        2: 'dos',
        3: 'tres',
        4: 'cuatro',
        5: 'cinco',
        6: 'seis',
        7: 'siete',
        8: 'ocho',
        9: 'nueve',
    }

    return aLetras[num] || ''
} // Unidades()

const Decenas = (num) => {
    let decena = Math.floor(num / 10)
    let unidad = num - decena * 10

    const aLetras = {
        1: (() => {
            const aLetra = {
                0: 'diez',
                1: 'once',
                2: 'doce',
                3: 'trece',
                4: 'catorce',
                5: 'quince',
            }
            return aLetra[unidad] || 'dieci' + Unidades(unidad)
        })(),
        2: unidad == 0 ? 'veinte' : 'veinti' + Unidades(unidad),
        3: DecenasY('treinta', unidad),
        4: DecenasY('cuarenta', unidad),
        5: DecenasY('cincuenta', unidad),
        6: DecenasY('sesenta', unidad),
        7: DecenasY('setenta', unidad),
        8: DecenasY('ochenta', unidad),
        9: DecenasY('noventa', unidad),
        0: Unidades(unidad),
    }

    return aLetras[decena] || ''
} //Decenas()

const DecenasY = (strSin, numUnidades) => {
    if (numUnidades > 0) return strSin + ' Y ' + Unidades(numUnidades)
    return strSin
} //DecenasY()

const Centenas = (num) => {
    let centenas = Math.floor(num / 100)
    let decenas = num - centenas * 100

    const aLetras = {
        1: decenas > 0 ? 'ciento ' + Decenas(decenas) : 'cien',
        2: 'doscientos ' + Decenas(decenas),
        3: 'trescientos ' + Decenas(decenas),
        4: 'cuatrocientos ' + Decenas(decenas),
        5: 'quinientos ' + Decenas(decenas),
        6: 'seiscientos ' + Decenas(decenas),
        7: 'setecientos ' + Decenas(decenas),
        8: 'ochocientos ' + Decenas(decenas),
        9: 'novecientos ' + Decenas(decenas),
    }

    return aLetras[centenas] || Decenas(decenas)
} //Centenas()

const Seccion = (num, divisor, strSingular, strPlural) => {
    let cientos = Math.floor(num / divisor)
    let resto = num - cientos * divisor

    let letras = ''

    if (cientos > 0)
        if (cientos > 1) letras = Centenas(cientos) + ' ' + strPlural
        else letras = strSingular

    if (resto > 0) letras += ''

    return letras
} //Seccion()

const Miles = (num) => {
    let divisor = 1000
    let cientos = Math.floor(num / divisor)
    let resto = num - cientos * divisor

    let strMiles = Seccion(num, divisor, 'mil', 'mil')
    let strCentenas = Centenas(resto)

    if (strMiles == '') return strCentenas
    return strMiles + ' ' + strCentenas
} //Miles()

const Millones = (num) => {
    let divisor = 1000000
    let cientos = Math.floor(num / divisor)
    let resto = num - cientos * divisor

    let strMillones = Seccion(num, divisor, 'un millon', 'millones')
    let strMiles = Miles(resto)

    if (strMillones == '') return strMiles
    return strMillones + ' ' + strMiles
} //Millones()

//Test with random number int
//console.log(10, numeroALetras(Math.round(Math.random() * 999_999_999)))
//Test with random number float
//console.log(10, numeroALetras(Math.random() * 999_999_999))
