const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // optional: stop observing after reveal
    }
  });
});

document.querySelectorAll('.hidden').forEach(el => {
  observer.observe(el);
});






/* 🖼️ + 🎞️  Carousel of clips / screenshots  */
/* ----------------------------------------- */

const mediaFiles = [
  // 👉  Put your own filenames here (relative to /assets/screenshots)
  //     Mix images (png/jpg/webp) *and* video files (mp4/webm) if you like
  'assets/screenshots/Skærmbillede 2025-02-22 015045.png',
  'assets/CDS2.png to assets/screenshots/CDS2.png',
  'assets/Skærmbillede 2025-02-23 141256.png',
  'assets/Skærmbillede 2025-02-23 141307.png'
];

let currentIdx = 0;
const videoEl = document.getElementById('carouselVideo');

/* Helper: decide if path is a video */
const isVideo = file => /\.(mp4|webm)$/i.test(file);

/* Show first media right away */
swapMedia(mediaFiles[currentIdx]);

/* Cycle every 7 seconds (adjust if you like) */
setInterval(() => {
  currentIdx = (currentIdx + 1) % mediaFiles.length;
  swapMedia(mediaFiles[currentIdx]);
}, 7000);

/* ---------------------- */
function swapMedia(src) {
  if (isVideo(src)) {
    // If we're currently showing an <img>, replace it with <video>
    if (videoEl.tagName.toLowerCase() !== 'video') {
      const newVid = document.createElement('video');
      newVid.id = 'carouselVideo';
      newVid.className = 'carousel-media';
      newVid.muted = true;
      newVid.loop = true;
      newVid.playsInline = true;
      videoEl.replaceWith(newVid);
      videoEl = newVid;
    }
    videoEl.src = src;
    videoEl.play().catch(() => {/* autoplay was blocked – ignore */});
  } else {
    // If it's an image, create/replace with <img>
    const img = document.createElement('img');
    img.src = src;
    img.className = 'carousel-media';
    videoEl.replaceWith(img);
    videoEl = img; // keep the variable for next round
  }
}
