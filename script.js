// script.js

// Torna in cima alla pagina al caricamento
window.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
});

// Animazioni on scroll con IntersectionObserver
const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// Seleziona tutti gli elementi con animazioni
const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .section');
animatedElements.forEach(el => fadeObserver.observe(el));

// Scroll fluido per anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Gestione dinamica delle barre di competenza
function updateCompetenceBar(select) {
  const bar = select.closest('.criteria-bar').querySelector('.competence-bar-fill');
  bar.classList.remove('mediocre', 'intermedio', 'avanzato');
  bar.classList.add(select.value);
  bar.textContent = select.options[select.selectedIndex].text;
}
