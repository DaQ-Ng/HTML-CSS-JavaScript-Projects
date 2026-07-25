const navLinks = document.querySelector(".nav-links");
const menuButton = document.getElementById("menu-btn");

menuButton.addEventListener("click", () => {
  //swap icon
  if (navLinks.classList.contains("active")) {
    navLinks.classList.add("closing");

    setTimeout(() => {
      navLinks.classList.remove("active");
      navLinks.classList.remove("closing");
    }, 300);
  } else {
    navLinks.classList.add("active");
  }

  menuButton.classList.toggle("fa-plus");
  menuButton.classList.toggle("fa-xmark");
});
