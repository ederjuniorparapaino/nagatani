const slides = document.querySelector('.slides');
let index = 0;

function nextSlide() {
    index = (index + 1) % 3; // Cambia el número según la cantidad de imágenes
    slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(nextSlide, 5000); // Cambia cada 5 segundos

