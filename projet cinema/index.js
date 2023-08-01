const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
const numSlides = slides.length;

function showSlide(index) {
    if (index < 0 || index >= numSlides) return;

    const carousel = document.querySelector('.slides');
    carousel.style.transform = `translateX(-${index * 390}px`;
    currentIndex = index;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
