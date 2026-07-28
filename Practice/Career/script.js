const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.add("closing");

    setTimeout(() => {
      navLinks.classList.remove("closing");
      navLinks.classList.remove("active");
    }, 300);
  } else {
    navLinks.classList.add("active");
  }

  menuButton.classList.toggle("fa-plus");
  menuButton.classList.toggle("fa-xmark");
});
