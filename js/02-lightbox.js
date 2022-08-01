import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divGalleryEl = document.querySelector(".gallery");
const cardsMarcup = createItemsGalleryMarcup(galleryItems);

divGalleryEl.insertAdjacentHTML("beforeend", cardsMarcup);

function createItemsGalleryMarcup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
