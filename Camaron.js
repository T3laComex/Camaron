const botones = document.querySelectorAll('.producto-btn');
const overlay = document.getElementById('modal-overlay');
const cerrar = document.getElementById('cerrar-modal');

const nombreEl = document.getElementById('modal-nombre');
const precioEl = document.getElementById('modal-precio');
const dispEl   = document.getElementById('modal-disponible');
const marcaEl  = document.getElementById('modal-marca');

botones.forEach(btn => {
  btn.addEventListener('click', () => {
    nombreEl.textContent = btn.dataset.nombre;
    precioEl.textContent = btn.dataset.precio;
    dispEl.textContent   = btn.dataset.disponible;
    marcaEl.textContent  = btn.dataset.marca;
    overlay.style.display = 'flex';
  });
});

cerrar.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    overlay.style.display = 'none';
  }
});

