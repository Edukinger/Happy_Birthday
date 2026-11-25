const confettiRoot = document.getElementById('confetti');
const colors = ['#ffd477', '#f2a6f2', '#9e8bff', '#ffffff', '#ff9dba', '#a6e7ff'];

function launchConfetti(amount = 120) {
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement('i');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${2.5 + Math.random() * 3}s`;
    piece.style.animationDelay = `${Math.random() * 0.7}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiRoot.appendChild(piece);
    window.setTimeout(() => piece.remove(), 6500);
  }
}

document.getElementById('confettiButton').addEventListener('click', () => launchConfetti(160));

document.getElementById('surpriseButton').addEventListener('click', () => {
  const box = document.getElementById('surpriseBox');
  box.hidden = false;
  launchConfetti(190);
  box.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Entrada suave de las secciones al aparecer en pantalla.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));

// Una pequeña bienvenida de confeti al abrir la página.
window.addEventListener('load', () => window.setTimeout(() => launchConfetti(45), 450));
