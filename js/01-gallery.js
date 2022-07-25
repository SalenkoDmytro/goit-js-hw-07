import { galleryItems } from './gallery-items.js';

let instance = '';
const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML('afterbegin', createGalleryMarkup(galleryItems));

galleryRef.addEventListener('click', onGalleryRefClick);

function createGalleryMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        ` <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    )
    .join('');
}

function onGalleryRefClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show(() => window.addEventListener('keydown', onEscapeBtnKey));
}

function onEscapeBtnKey() {
  if (event.code === 'Escape') {
    instance.close(() => window.removeEventListener('keydown', onEscapeBtnKey));
  }
}
