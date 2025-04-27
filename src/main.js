import './style.css';

const hamburgerBtn = document.getElementById('hamburger-botao');
const mobileMenu = document.getElementById('botao-mobile');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

let menuOpen = false;

hamburgerBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('max-h-0');
  mobileMenu.classList.toggle('max-h-96');
  
  line1.classList.toggle('rotate-50');
  line1.classList.toggle('translate-y-1.5');
  line2.classList.toggle('opacity-0');
  line3.classList.toggle('-rotate-50');
  line3.classList.toggle('-translate-y-3.5');
});