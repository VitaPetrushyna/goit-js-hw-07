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

let instance;

function onModalClose() {
  instance.close();
}

function onCloseEsc(evt) {
  if (evt.code === "Escape") {
    onModalClose();
  }
}
function onOpenItem(evt) {
  evt.preventDefault();
  console.log(evt.target);
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const imgEl = evt.target;
  let instance = basicLightbox.create(
    `<img src="${imgEl.dataset.source}" width="1200" height="1200">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onCloseEsc);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onCloseEsc);
      },
    }
  );
  instance.show();
}

// const instance = basicLightbox.create(
//   `
//     <div class="modal">
//         <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
//         <input placeholder="Type something">
//         <a>Close</a>
//     </div>
// `,
//   {
//     onShow: (instance) => {
//       instance.element().querySelector("a").onclick = instance.close;
//     },
//   }
// );

// instance.show();
