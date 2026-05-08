
let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.getElementById("slides");
  const items = document.querySelectorAll(".slide");

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = items.length - 1;
  }

  if (currentSlide >= items.length) {
    currentSlide = 0;
  }

  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
function showMessage(text){
      alert(text);
    }