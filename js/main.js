var burguer= document.querySelector('.burguer');
var menu= document.querySelector('.menu');

function showMenu() {
  menu.classList.remove('hidden');
  menu.classList.add ('animation-menu');
};

function closeMenu() {
  menu.classList.add('hidden');
}

burguer.addEventListener('click', showMenu);
menu.addEventListener('click', closeMenu);
