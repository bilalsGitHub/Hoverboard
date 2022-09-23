const allSquares = document.querySelectorAll(".square");

allSquares.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = getRandomColor();
    setTimeout(() => {
      element.style.backgroundColor = "black";
    }, 500);
  });
});
function getRandomColor() {
  var randomColor = Math.floor(Math.random() * 12345678).toString(16);
  return "#" + randomColor;
}
