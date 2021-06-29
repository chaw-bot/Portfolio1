const nav = document.querySelector('nav');
const navList = document.querySelector('.nav-bar-list2');
const menuBtn = document.querySelector('.menu');
const menuIcon = document.querySelector('nav .menu i');
const envelope = document.querySelector('.fa-envelope');

function openMenu() {
  nav.classList.add('nav');
  menuIcon.classList.replace('fa-bars', 'fa-times');
  menuIcon.style.fontSize = '0.5em';
  menuBtn.classList.add('align-end');
  menuBtn.style.color = 'rgba(103, 121, 142, 1)';
  navList.style.display = 'flex';
  envelope.style.display = 'none';
}

function closeMenu() {
  nav.classList.remove('nav');
  menuIcon.classList.replace('fa-times', 'fa-bars');
  navList.style.display = 'none';
  envelope.style.display = 'inline-block';
  menuIcon.style.fontSize = '1em';
  menuBtn.style.color = '#fff';
}

function menu() {
  if (navList.style.display === 'none') {
    openMenu();
  } else {
    closeMenu();
  }
}

menu();