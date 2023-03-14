let tamanoPantalla = window.innerHeight / 1;
let tamanoPantallaImg = window.innerHeight / 1.2;

//Boton de recargar pagina
export function recargarPagina() {
  const btnReload = document.querySelector("#btnReload");
  btnReload.addEventListener("click", () => {
    window.location.reload();
  });
}

//Agrega animacion para el titulo del tema
export function animacionTitulo() {
  const tituloTema = document.querySelector("#tituloTema");
  tituloTema.style.animation = "ruberBand infinite 1.5s";
}

//Agrega animacion para el subtema del titulo
export function animacionSubtema() {
  const subtemas = document.querySelectorAll("#explicacionTema h2");
  subtemas.forEach((subtema) => {
    self.addEventListener("scroll", () => {
      const ubicacion = subtema.getBoundingClientRect();
      if (ubicacion.top < tamanoPantalla) {
        subtema.style.animation = "lightSpeedInLeft linear 1.5s";
      }
    });
  });
}

//Agrega animacion por cada uno de los parrafos
export function animacionParrafos() {
  const parrafosExplicacionTema = document
    .querySelector("#explicacionTema")
    .querySelectorAll("p");
  parrafosExplicacionTema.forEach((parrafo) => {
    self.addEventListener("scroll", () => {
      const ubicacion = parrafo.getBoundingClientRect();
      if (ubicacion.top < tamanoPantalla) {
        parrafo.style.animation = "lightSpeedInRight linear 1.5s";
      }
    });
  });
}

//Agrega animacion para cada una de las imagenes
export function animacionImagenes() {
  const imagenesExplicacionTema = document
    .querySelector("#explicacionTema")
    .querySelectorAll("img");
  imagenesExplicacionTema.forEach((imagen) => {
    self.addEventListener("scroll", () => {
      const ubicacion = imagen.getBoundingClientRect();
      if (ubicacion.top < tamanoPantallaImg) {
        imagen.style.animation = "bounceInLeft linear 1.5s";
      }
    });
  });
}
//Agrega animaciones a cada uno de los botones
export function animacionBotones() {
  const botonesExplicacionTema = document
    .querySelector("#explicacionTema")
    .getElementsByClassName("btn");
  for (let i = 0; i < botonesExplicacionTema.length; i++) {
    self.addEventListener("scroll", () => {
      const ubicacion = botonesExplicacionTema[i].getBoundingClientRect();
      if (ubicacion.top < tamanoPantalla) {
        botonesExplicacionTema[i].style.animation = "flipInY linear 1.5s";
      }
    });
  }
}

//Agrega animaciones a las tablas
export function animacionTablas() {
  const tablasTema = document.querySelectorAll("#explicacionTema table");
  tablasTema.forEach((tabla) => {
    self.addEventListener("scroll", () => {
      const ubicacion = tabla.getBoundingClientRect();
      if (ubicacion.top < tamanoPantalla) {
        tabla.style.animation = "bigEntrance linear 2s";
      }
    });
  });
}

//Agrega animaciones a las listas desordenadas
export function animacionListasUl() {
  const listasUl = document.querySelectorAll("#explicacionTema ul");
  listasUl.forEach((lista) => {
    self.addEventListener("scroll", () => {
      const ubicacion = lista.getBoundingClientRect();
      if (ubicacion.top < tamanoPantalla) {
        lista.style.animation = "bigEntrance linear 2s";
      }
    });
  });
}

//Agrega animaciones a las listas ordenadas
export function animacionListasOl() {
  const listasUl = document.querySelectorAll("#explicacionTema ol");
  listasUl.forEach((lista) => {
    self.addEventListener("scroll", () => {
      const ubicacion = lista.getBoundingClientRect();
      if (ubicacion.top < tamanoPantalla) {
        lista.style.animation = "bigEntrance linear 2s";
      }
    });
  });
}