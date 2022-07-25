import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML('afterbegin', createGalleryMarkup(galleryItems));

function createGalleryMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
