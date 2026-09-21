const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
// ouvrir / fermer le menu 
     hamburger.addEventListener("click", function () {
     menu.classList.toggle("active");
// modifier l'état du bouton
const menuOuvert = menu.classList.contains("active");
hamburger.setAttribute("aria-expanded", menuOuvert);
 });
 // fermer le menu lorsqu'on clique sur un lien
const liens = document.querySelectorAll ("#menu a");

liens.forEach(function (lien) {
lien.addEventListener("click", function () {
menu.classList.remove("active");
hamburger.setAttribute("aria-expanded", "false");
});
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const options = {
  root: null, 
  threshold: 0.6 
}
