"use strict";

const btn = document.querySelector(".btn");
const btnApply = document.querySelector(".btn-apply");
const colorLabel = document.querySelector(".color-label-value");
const colorInput = document.querySelector(".color-label-input");

const randomColor = function () {
  let red = Math.trunc(Math.random() * 255).toString(16);
  if (red.length === 1) red = "0" + red;
  let green = Math.trunc(Math.random() * 255).toString(16);
  if (green.length === 1) green = "0" + green;
  let blue = Math.trunc(Math.random() * 255).toString(16);
  if (blue.length === 1) blue = "0" + blue;
  return `#${red}${green}${blue}`;
};

btn.addEventListener("click", function () {
  const color = randomColor();
  document.body.style.backgroundColor = color;
  colorLabel.textContent = color;
});

const changeMode = function () {
  btn.classList.toggle("hidden");
  btnApply.classList.toggle("hidden");
  colorLabel.classList.toggle("hidden");
  colorInput.classList.toggle("hidden");
};

const getBackgroundColorHEX = function () {
  const colorRGB = window
    .getComputedStyle(document.body)
    .getPropertyValue("background-color");
  const rgb = colorRGB.slice(4, -1).split(", ");
  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);
  if (r.length === 1) r = "0" + r;
  if (g.length === 1) g = "0" + g;
  if (b.length === 1) b = "0" + b;
  return `#${r}${g}${b}`;
};

document.querySelector("header").addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("label-random") && btn.classList.contains("hidden"))
    changeMode();
  colorLabel.textContent = getBackgroundColorHEX();
  if (
    el.classList.contains("label-input") &&
    btnApply.classList.contains("hidden")
  )
    changeMode();
});

btnApply.addEventListener("click", function () {
  const input = colorInput.value;
  if (input.length !== 7) return;
  document.body.style.backgroundColor = input;
});
