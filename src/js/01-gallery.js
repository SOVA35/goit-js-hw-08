

import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';




const galleryContainer = document.querySelector('.gallery');


const markupGallery = createGalleryItemsMarkup(galleryItems);


function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `;
    })
    .join('');
}


galleryContainer.style.listStyle = 'none';


galleryContainer.insertAdjacentHTML('beforeend', markupGallery);


const lightbox = new SimpleLightbox('.gallery a ', {
    captionDelay: "250",
  captionsData: 'alt',
});


function onGalleryContainerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  lightbox.open();
}


galleryContainer.addEventListener('click', onGalleryContainerClick);
