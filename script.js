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
