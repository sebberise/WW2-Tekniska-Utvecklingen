const slideshowImages = document.querySelectorAll(".popup-inner img");

const nextImageDelay = 7000;
let currentImageCounter = 0; 

slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  slideshowImages[currentImageCounter].style.opacity = 1;
}