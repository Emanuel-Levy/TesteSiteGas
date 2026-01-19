const menu = document.querySelector('.menu-mobile');
const navList = document.querySelector('.nav-list');

menu.addEventListener('click', () => {
  navList.classList.toggle('active');
});
