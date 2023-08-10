// script.js

const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const close = document.getElementById('close');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const imageSrc = thumbnail.getAttribute('data-image');
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'block';
  });
});

close.addEventListener('click', () => {
  lightbox.style.display = 'none';
});