const navLinks = document.querySelector(".nav-links");
const menuButton = document.getElementById("menu-btn");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active"); //adds the class if it's not there, removes it if it is — like a light switch

  //swap icon
  if (navLinks.classList.contains("active")) {
    menuButton.classList.remove("fa-plus");
    menuButton.classList.add("fa-xmark");
  } else {
    menuButton.classList.remove("fa-xmark");
    menuButton.classList.add("fa-plus");
  }
});
