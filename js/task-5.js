function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.querySelector("body");
changeColorButton.addEventListener("click", (event) => {
  const changedColorValue = getRandomHexColor();
  colorSpan.textContent = changedColorValue;
  body.style.backgroundColor = changedColorValue;
});
