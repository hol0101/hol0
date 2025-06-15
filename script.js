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






document.addEventListener('DOMContentLoaded', function () {
  const mediaFiles = [
    'assets/screenshots/Skærmbillede 2025-02-22 015045.png',
    'assets/screenshots/CDS2.png',
    'assets/screenshots/Skærmbillede 2025-02-23 141256.png',
    'assets/screenshots/Skærmbillede 2025-02-23 141307.png'
  ];

  const imageElement = document.getElementById('carouselImage');
  const videoElement = document.getElementById('carouselVideo');

  let currentIndex = 0;

  function isVideo(file) {
    return file.endsWith('.mp4') || file.endsWith('.webm') || file.endsWith('.ogg');
  }

  function updateMedia() {
    const file = mediaFiles[currentIndex];

    if (isVideo(file)) {
      imageElement.style.display = 'none';
      videoElement.style.display = 'block';
      videoElement.src = file;
      videoElement.load();
      videoElement.play();
    } else {
      videoElement.pause();
      videoElement.style.display = 'none';
      imageElement.style.display = 'block';
      imageElement.src = file;
    }

    currentIndex = (currentIndex + 1) % mediaFiles.length;
  }

  setInterval(updateMedia, 3000);
  updateMedia(); // Initial load

  // Intersection Observer (optional for scroll animations)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.hidden').forEach(el => {
    observer.observe(el);
  });
});
