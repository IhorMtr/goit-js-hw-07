function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    alert("Invalid value");
    return;
  }
  let size = 30;
  for (let i = 1; i <= amount; i++) {
    let elem = document.createElement("div");
    elem.style.width = `${size}px`;
    elem.style.height = `${size}px`;
    elem.style.backgroundColor = getRandomHexColor();
    inputBox.append(elem);
    size += 10;
  }
}
function destroyBoxes() {
  const allBoxes = document.querySelectorAll("#boxes div");
  for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].remove();
  }
}
const createElementsBtn = document.querySelector(
  "#controls button[data-create]"
);
const destroyElementsBtn = document.querySelector(
  "#controls button[data-destroy]"
);
const inputBox = document.querySelector("#boxes");
createElementsBtn.addEventListener("click", () => {
  createBoxes(parseInt(document.querySelector("#controls input").value));
});
destroyElementsBtn.addEventListener("click", destroyBoxes);
