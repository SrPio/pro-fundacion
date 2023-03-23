const btnActivar = document.getElementById('btn-activar');
const mobileNav = document.querySelector('.mobile--nav');
const nav = document.querySelector('.nav2');

btnActivar.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  nav.classList.toggle('active');
});