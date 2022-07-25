import { galleryItems } from './gallery-items.js';

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
  console.log(event);
}
