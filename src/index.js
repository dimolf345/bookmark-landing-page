import * as bootstrap from "bootstrap";
import validator from "validator";

let id = (id) => document.getElementById(id);

let toggler = id("navbar-toggler");
let header = document.getElementsByTagName("header")[0];
let navLinks = document.querySelectorAll("#navbarNav .nav-link");
let form = id("subscription-form");
let navExpanded = false;
let input = id("subscription-email");

function removeChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function createSuccessParagraph(email) {
  let p = document.createElement("p");
  p.className = "subscription__success";
  p.textContent = `Thank you for contacting us! An automatic email has been sent to ${email}`;
  return p;
}

function createFailSpan() {
  let span = document.createElement("span");
  span.textContent = "Whoops, make sure it's an email";
  span.className = "subscription__error-message";
  return span;
}

// Form success deletes all nodes from form element and adds
// a <p> with successful message
function formSuccess() {
  let p = createSuccessParagraph(input.value);
  removeChildren(form);
  form.appendChild(p);
}

function formFail() {
  input.className += " invalid";
  input.setAttribute("aria-invalid", "true");
  let span = createFailSpan();
  form.firstElementChild.appendChild(span);
  form.querySelector("img").style.display = "block";
}

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

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validator.isEmail(input.value)) {
    formSuccess();
  } else {
    input.value = "";
    input.focus();
    formFail();
  }
});
