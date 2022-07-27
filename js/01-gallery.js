import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const divGalleryEl = document.querySelector(".gallery");
// console.log(divGalleryEl);

const cardsMarcup = createItemsGalleryMarcup(galleryItems);
// console.log(cardsMarcup);

divGalleryEl.insertAdjacentHTML("beforeend", cardsMarcup);

divGalleryEl.addEventListener("click", onOpenItem);

function createItemsGalleryMarcup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
    `;
    })
    .join("");
  //   console.log(marcup);
}

function onOpenItem(evt) {
  evt.preventDefault();
  console.log(evt.target);
}
