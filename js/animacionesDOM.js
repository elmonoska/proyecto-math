let tamanoPantalla = window.innerHeight / 1;
let tamanoPantallaImg = window.innerHeight / 1.2;

//Agrega animacion para el titulo del tema
export function animacionTitulo() {
  const tituloTema = document.querySelector("#tituloTema");
  tituloTema.style.animation = "ruberBand infinite 1.5s";
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
