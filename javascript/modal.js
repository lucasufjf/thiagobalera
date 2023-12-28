//Reference: https://www.w3schools.com/howto/howto_css_modal_images.asp

const thumbnails = document.querySelectorAll(".thumbnails img");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal-image");
const caption = document.querySelector(".caption");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const closeButton = document.querySelector(".close");

let currentImage;

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    currentImage = index;
    modalImage.src = thumbnail.dataset.src;
    caption.innerHTML = thumbnail.alt;
    modal.style.display = "block";
  });
});

function showNext() {
  currentImage++;
  if (currentImage >= thumbnails.length) {
    currentImage = 0;
  }
  modalImage.src = thumbnails[currentImage].dataset.src;
  caption.innerHTML = thumbnails[currentImage].alt;
}

function showPrev() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = thumbnails.length - 1;
  }
  modalImage.src = thumbnails[currentImage].dataset.src;
  caption.innerHTML = thumbnails[currentImage].alt;
}

prevButton.addEventListener("click", showPrev);
nextButton.addEventListener("click", showNext);

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    showPrev();
  } else if (event.key === "ArrowRight") {
    showNext();
  } else if (event.key === "Escape") {
    modal.style.display = "none";
  }
});