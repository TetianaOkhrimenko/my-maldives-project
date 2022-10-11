let button = document.querySelector(".trip-details-button");
let nextImagebutton = document.querySelector(".carousel-control-next-icon");
let image = document.querySelector(".active");
const allImages = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
];
let currentImage = 0;
document.querySelector(".carousel-control-next").onclick = nexPhoto;
function nexPhoto() {
  currentImage++;
  if (currentImage > allImages.length - 1) {
    currentImage = 0;
  }
  document.querySelector(".my-image").src = allImages[currentImage];
}

document.querySelector(".carousel-control-prev").onclick = prevPhoto;
function prevPhoto() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = allImages.length - 1;
  }
  document.querySelector(".my-image").src = allImages[currentImage];
}

function bookTour() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email adress?");

  alert(`Thank you, ${name}! We'll contact you soon by email! 😃`);
}

button.addEventListener("click", bookTour);
