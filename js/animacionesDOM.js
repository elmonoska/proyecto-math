export function animacionesDOM() {
    //Agrega animacion para el titulo del tema
    const tituloTema = document.querySelector("#tituloTema");
    tituloTema.style.animation = "ruberBand infinite 1.5s";
  
    //Agrega animacion por cada uno de los parrafos
    const parrafosExplicacionTema = document
      .querySelector("#explicacionTema")
      .querySelectorAll("p");
    parrafosExplicacionTema.forEach((parrafo) => {
      self.addEventListener("scroll", () => {
        const ubicacion = parrafo.getBoundingClientRect();
        if (ubicacion.top < 750) {
          parrafo.style.animation = "lightSpeedInRight linear 1.5s";
        }
      });
    });
  
    //Agrega animacion para cada una de las imagenes
    const imagenesExplicacionTema = document
      .querySelector("#explicacionTema")
      .querySelectorAll("img");
    imagenesExplicacionTema.forEach((imagen) => {
      self.addEventListener("scroll", () => {
        const ubicacion = imagen.getBoundingClientRect();
        if (ubicacion.top < 700) {
          imagen.style.animation = "bigEntrance linear 1.5s";
        }
      });
    });
  
    //Agrega animaciones a cada uno de los botones
    //const botonesExplicacionTema = document.querySelector('#explicacionTema').getElementsByClassName('btn')
    const botonesExplicacionTema = document
      .querySelector("#explicacionTema")
      .getElementsByClassName("btn");
    for (let i = 0; i < botonesExplicacionTema.length; i++) {
      self.addEventListener("scroll", () => {
        const ubicacion = botonesExplicacionTema[i].getBoundingClientRect();
        if (ubicacion.top < 750) {
          botonesExplicacionTema[i].style.animation = "flipInY linear 1.5s";
        }
      });
    }
  }