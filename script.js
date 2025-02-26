// Toggle del menú responsive
const navToggle = document.getElementById('nav-toggle');
const menu = document.getElementById('menu');
navToggle.addEventListener('click', () => {
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

// Animación de aparición de secciones al hacer scroll (Intersection Observer)
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
sections.forEach(section => {
  observer.observe(section);
});

// Manejo del envío de formulario de contacto
const contactForm = document.getElementById('contactForm');
const successMsg = document.getElementById('form-success');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // Aquí podría enviarse el formulario via AJAX o similar
  contactForm.reset();
  successMsg.style.display = 'block'; // Muestra mensaje de éxito
});
