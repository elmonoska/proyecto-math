const ordinalesEscritos = [
    // unidades
    ['','primero','segundo','tercero','cuarto','quinto','sexto','séptimo','octavo','noveno'],
    // decenas
    ['','décimo','vigésimo','trigésimo','cuadragésimo','quincuagésimo','sexagésimo','septuagésimo','octagésimo','nonagésimo'],
    // centenas
    ['','centésimo','ducentésimo','tricentésimo','cuadrigentésimo','quingentésimo','sexcentésimo','septingentésimo','octingentésimo','noningentésimo'],
    // unidades de millar
    ['','milésimo','dosmilésimo','tresmilésimo ','cuatromilésimo','cincomilésimo','seismilésimo','sietemilésimo','ochomilésimo','nuevemilésimo']
  ]
  
  export function aOrdinal (numero = 0, gender = 'm') {
    let ordinal = ''
    let digitos = [...numero.toString()]
    digitos.forEach((digito, i) => {
      let digitoOrdinal = ordinalesEscritos[digitos.length - i - 1][digito]
      if (!digitoOrdinal) return
      //Imprime el femenino si se le pasa como parametro f = femenino
      if (gender === 'f') digitoOrdinal = digitoOrdinal.substr(0, [digitoOrdinal.length-1]) + 'a'
      ordinal += digitoOrdinal + ' '
    })
    return ordinal.trim()
  }