const loader = document.getElementById('loader');
const fill = document.getElementById('loading-fill');
const number = document.getElementById('loading-number');
let progress = 0;
let loaded = false;

function setProgress(value) {
  progress = Math.min(100, Math.max(progress, value));
  fill.style.width = progress + '%';
  number.textContent = Math.round(progress) + '%';
}
const progressTimer = setInterval(() => {
  if (!loaded && progress < 90) setProgress(progress + Math.max(1, (90 - progress) * 0.055));
}, 100);

function finishLoading() {
  loaded = true;
  clearInterval(progressTimer);
  setProgress(100);
  setTimeout(() => loader.classList.add('done'), 450);
}
window.addEventListener('load', finishLoading);
setTimeout(() => { if (document.readyState === 'complete') finishLoading(); }, 100);

const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
