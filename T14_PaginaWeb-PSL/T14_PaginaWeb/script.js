//1 Barra de navegación pegajosa
const navBar = document.querySelector("nav");

// Obtiene la posición inicial de la barra de navegación
const navBarOffset = navBar.offsetTop;

// Función para agregar o quitar la clase 'sticky' según la posición del scroll
function toggleStickyNav() {
  if (window.pageYOffset >= navBarOffset) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}

// Escucha el evento 'scroll' y llama a toggleStickyNav() cuando se desplaza
window.addEventListener("scroll", toggleStickyNav);

//2 Contador

// Fecha y hora de destino para el contador regresivo (ajusta esta fecha según tus necesidades)
const fechaDestino = new Date("2023-12-25T00:00:00").getTime();

// Función para actualizar el contador regresivo
function actualizarContador() {
  const ahora = new Date().getTime();
  const tiempoRestante = fechaDestino - ahora;

  // Calcula días, horas, minutos y segundos restantes
  const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  // Actualiza el elemento HTML con el contador regresivo
  const contadorElemento = document.getElementById("contador-regresivo");
  contadorElemento.innerHTML = `
    <div class="contador-item">
      <span>${dias}</span>
      <span>Días</span>
    </div>
    <div class="contador-item">
      <span>${horas}</span>
      <span>Horas</span>
    </div>
    <div class="contador-item">
      <span>${minutos}</span>
      <span>Minutos</span>
    </div>
    <div class="contador-item">
      <span>${segundos}</span>
      <span>Segundos</span>
    </div>
  `;

  // Si se alcanza la fecha de destino, detén el contador
  if (tiempoRestante <= 0) {
    clearInterval(contadorInterval);
    contadorElemento.innerHTML = "¡Contador finalizado!";
  }
}

// Llama a la función de actualización inicialmente para evitar un retraso en la visualización
actualizarContador();

// Actualiza el contador cada segundo
const contadorInterval = setInterval(actualizarContador, 1000);

//3 Carrusel

// Referencia al carrusel
const imageCarousel = document.getElementById('imageCarousel');
const images = imageCarousel.getElementsByTagName('img');
let currentIndex = 0;

// Función para mostrar la siguiente imagen
function showNextImage() {
    images[currentIndex].classList.remove('visible');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('visible');
}

// Mostrar la primera imagen
images[currentIndex].classList.add('visible');

// Configurar el intervalo para cambiar las imágenes automáticamente
setInterval(showNextImage, 3000); // Cambiar cada 3 segundos

//4 acordeon

document.addEventListener("DOMContentLoaded", function() {
  const acordeonItems = document.querySelectorAll(".acordeon");

  acordeonItems.forEach(function(item) {
    const titulo = item.querySelector("h4");

    titulo.addEventListener("click", function() {
      const contenido = item.querySelector(".contenido");
      item.classList.toggle("active");

      if (item.classList.contains("active")) {
        contenido.style.maxHeight = contenido.scrollHeight + "px";
      } else {
        contenido.style.maxHeight = "0";
      }
    });
  });
});

//5 Efecto de tipeo al subtitulo

const texto = "Tu lugar para aprender y crecer";
const velocidadTipeo = 80; // Velocidad en milisegundos
const elementoTipeo = document.getElementById("tipeo");

function tipearTexto() {
  let indice = 0;
  const intervalo = setInterval(function () {
    elementoTipeo.textContent += texto.charAt(indice);
    indice++;
    if (indice === texto.length) {
      clearInterval(intervalo);
    }
  }, velocidadTipeo);
}

tipearTexto();

elementoTipeo.addEventListener("click", function () {
  elementoTipeo.textContent = ""; // Limpiamos el texto
  tipearTexto(); // Volvemos a tipear el texto
});

//6 Card flip

function flipCard(card) {
  card.querySelector('.card-inner').classList.toggle('flipped');
}
