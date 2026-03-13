const reveals = document.querySelectorAll('.reveal');
const preloader = document.querySelector('.preloader');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach(el => observer.observe(el));

window.addEventListener('load', () => {
  if (!preloader) return;
  setTimeout(() => {
    preloader.classList.add('is-hidden');
    setTimeout(() => preloader.remove(), 700);
  }, 2000);
});
