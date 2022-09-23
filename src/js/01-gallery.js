// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.js-gallery');

// galleryRef.innerHTML = "";
galleryRef.insertAdjacentHTML('beforeend', makeImageList(galleryItems));
// galleryRef.addEventListener("click", onImageClick);

function makeImageList(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `      
        <a href="${original}" class="gallery__item">
        <img
          class="gallery__image"
          src=${preview}                       
          alt=${description}
        />
        </a>`
    )
    .join('');
}

const gallery = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
