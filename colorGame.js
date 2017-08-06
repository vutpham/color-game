const colors = generateRandomColors(6);

// [
//   "rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 255, 255)",
//   "rgb(0, 0, 255)",
//   "rgb(255, 0, 255)"
// ];

const squares = document.querySelectorAll(".square");
const pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1")

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function () {

    //grab color of clicked square
    let clickedColor = this.style.backgroundColor;

    //compare color to pickedColor
    console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  let arr = []
  for (var i = 0; i < num; i++) {
    arr[i] = randomColor();
  }

  return arr;
}

function randomColor() {
  //pick a R from 0-255
  let r = Math.floor(Math.random() * 256);
  //pick a G from 0-255
  let g = Math.floor(Math.random() * 256);
  //pick a B from 0-255
  let b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b +")"
}
