import * as bootstrap from "bootstrap";

let toggler = document.getElementById("navbar-toggler");
let header = document.getElementsByTagName("header")[0];
let navLinks = document.querySelectorAll("#navbarNav .nav-link");
let navExpanded = false;

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    if (navExpanded) {
      toggler.click();
    } else return;
  });
});

toggler.addEventListener("click", function () {
  header.classList.toggle("header--mobile");
  navExpanded = !navExpanded;
  toggler.lastElementChild.className = navExpanded
    ? "navbar-toggler-icon-dark"
    : "navbar-toggler-icon";
});

window.addEventListener("resize", function () {
  if (this.window.innerWidth > 768 && navExpanded) {
    toggler.click();
  } else return;
});
