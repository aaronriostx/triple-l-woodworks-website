/* Click-to-enlarge for project and workshop photos. Without JS the photos simply stay in place. */
(() => {
  const photos = [...document.querySelectorAll('.project-page img.project-photo')];
  if (!photos.length || typeof HTMLDialogElement !== 'function') return;

  const dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.setAttribute('aria-label', 'Photo viewer');
  dialog.innerHTML = `
    <img class="lightbox-photo" alt="">
    <p class="lightbox-count"></p>
    <button class="lightbox-close" type="button" aria-label="Close">×</button>
    <button class="lightbox-prev" type="button" aria-label="Previous photo">‹</button>
    <button class="lightbox-next" type="button" aria-label="Next photo">›</button>`;
  document.body.append(dialog);

  const image = dialog.querySelector('.lightbox-photo');
  const count = dialog.querySelector('.lightbox-count');
  const prev = dialog.querySelector('.lightbox-prev');
  const next = dialog.querySelector('.lightbox-next');
  let current = 0;

  // A single photo has nowhere to step to.
  if (photos.length === 1) prev.hidden = next.hidden = count.hidden = true;

  function show(index) {
    current = (index + photos.length) % photos.length;
    const photo = photos[current];
    image.src = photo.currentSrc || photo.src;
    image.alt = photo.alt;
    image.width = photo.getAttribute('width');
    image.height = photo.getAttribute('height');
    count.textContent = `${current + 1} / ${photos.length}`;
  }

  // Wrap each photo in a button so it works with mouse, touch, and keyboard.
  photos.forEach((photo, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'photo-zoom';
    button.setAttribute('aria-label', `Enlarge photo: ${photo.alt}`);
    button.innerHTML = '<span class="photo-zoom-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 4h6v6M10 20H4v-6M20 4l-6.5 6.5M4 20l6.5-6.5"/></svg></span>';
    photo.replaceWith(button);
    button.prepend(photo);
    button.addEventListener('click', () => { show(index); dialog.showModal(); });
  });

  // Escape closes natively; the × button and a click on the dark area around the photo close too.
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  prev.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  dialog.addEventListener('keydown', (event) => {
    if (photos.length === 1) return;
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });

  // One-finger swipe steps between photos; ignored while pinch-zoomed so panning still works.
  let startX = null;
  dialog.addEventListener('touchstart', (event) => {
    const zoomed = window.visualViewport && window.visualViewport.scale > 1.01;
    startX = event.touches.length === 1 && !zoomed ? event.touches[0].clientX : null;
  }, { passive: true });
  dialog.addEventListener('touchend', (event) => {
    if (startX === null || photos.length === 1) return;
    const distance = event.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(distance) > 50) show(current + (distance < 0 ? 1 : -1));
  });
})();
