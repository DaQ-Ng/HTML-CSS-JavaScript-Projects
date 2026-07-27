const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.add("active");

  menuButton.classList.toggle("fa-plus");
  menuButton.classList.toggle("fa-xmark");
});
