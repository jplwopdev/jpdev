import './style.css';

const div = document.getElementById('meuSvg');
const svg = document.getElementById('meuSvg');
const grupo = svg.querySelector('g');

svg.addEventListener('mouseenter', () => {
  grupo.setAttribute('fill', '#ffffff'); // Branco no hover
});

svg.addEventListener('mouseleave', () => {
  grupo.setAttribute('fill', '#c10007'); // Vermelho ao sair
});