import date from "./date.js";
import consoleText from "./consoletext.js";

const idyear = document.querySelector("#idyear");
const idbuttonoffcanvas = document.querySelector("#idbuttonoffcanvas");
const idmenuoffcanvas = document.querySelector("#idmenuoffcanvas");
const idbuttonoffcanvasclose = document.querySelector(
  "#idbuttonoffcanvasclose"
);
const idstack = document.querySelector("#idstack");

idbuttonoffcanvas.addEventListener("click", () => {
  idmenuoffcanvas.style.visibility = "visible";
  idbuttonoffcanvas.style.visibility = "hidden";
});

idbuttonoffcanvasclose.addEventListener("click", () => {
  idmenuoffcanvas.style.visibility = "hidden";
  idbuttonoffcanvas.style.visibility = "visible";
});

consoleText(
  [
    "Full Stack Developer",
    "Java Developer",
    "Python Developer",
    "JavaScript Developer",
  ],
  "text",
  ["white"]
);

idyear.innerHTML = date().split("-")[0];
