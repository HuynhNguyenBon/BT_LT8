const slides = document.getElementById('slides');
const total = slides.children.length;
let index = 0;

function showSlide() {
  slides.style.transform = `translateX(-${index * 20}%)`;
}

function nextSlide() {
  index++;
  if (index > total - 5) index = 0;
  showSlide();
}

function prevSlide() {
  index--;
  if (index < 0) index = total - 5;
  showSlide();
}

// Tự động trượt mỗi 2 giây
setInterval(nextSlide, 2000);
