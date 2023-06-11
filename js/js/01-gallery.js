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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `;
    })
    .join("");
}

function onGalleryClick(event) {
  event.preventDefault();

  const originalImage = event.target.dataset.source;
  console.log(originalImage);

  const instance = basicLightbox.create(`
    <img src="${originalImage}" width="800" height="600">
`);

  instance.show();
}
