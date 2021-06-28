var nav = document.querySelector("nav");
var nav_list = document.querySelector(".nav-bar-list");
var menu_btn = document.querySelector(".menu");
var menu_icon = document.querySelector("nav .menu i");
var envolope = document.querySelector(".fa-envelope");

function toggleMenu() {
  if (nav_list.style.display == "none") {
    openMenu();
  } else {
    closeMenu();
  }
}

function openMenu() {
  nav.classList.add("nav");
  menu_icon.classList.replace("fa-bars", "fa-times");
  nav_list.style.display = "flex";
  envolope.style.display = "none";
}

function closeMenu() {
  nav.classList.remove("nav");
  menu_icon.classList.replace("fa-times", "fa-bars");
  nav_list.style.display = "none";
  envolope.style.display = "inline-block";
}
