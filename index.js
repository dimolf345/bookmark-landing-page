const toggler = document.getElementById("toggler");
const navbar = document.getElementsByTagName("nav")[0];

//Set Timeout is used to hide normal Bootstrap class for Navbar. Try to remove it and you'll understand
toggler.addEventListener("click", () => {
  navbar.classList.contains("mobile-expanded")
    ? setTimeout(() => {
        navbar.classList.remove("mobile-expanded");
      }, 200)
    : navbar.classList.add("mobile-expanded");
});
