const colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

const squares = document.querySelectorAll(".square");
let pickedColor = colors[3];
const colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function () {
    let clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
      alert("Correct");
    } else {
      this.style.backgroundColor = "#232323";
    }
  });
}
