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
  let createdElements = [];
  for (let i = 1; i <= amount; i++) {
    let elem = document.createElement("div");
    elem.style.width = `${size}px`;
    elem.style.height = `${size}px`;
    elem.style.backgroundColor = getRandomHexColor();
    createdElements.push(elem);
    size += 10;
  }
  inputBox.append(...createdElements);
}
function destroyBoxes() {
  inputBox.innerHTML = "";
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
