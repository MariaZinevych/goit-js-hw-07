import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const makeGallery = createGalleryCards(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", makeGallery);
galleryContainer.addEventListener("click", onGalleryClick);

function createGalleryCards(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li> `;
    })
    .join("");
}

function onGalleryClick(event) {
  event.preventDefault();

  const originalImage = event.target.src;
  console.log(originalImage);

  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
