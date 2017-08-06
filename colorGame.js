var numSquares = 6;
var colors = generateRandomColors(numSquares);
// [
//   "rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 255, 255)",
//   "rgb(0, 0, 255)",
//   "rgb(255, 0, 255)"
// ];
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var streakDisplay = document.querySelector("#streak");
var test = document.querySelector("#test");


// Logic for correct streak

var streak = 0;

function addStreak(){
  console.log(messageDisplay);
  if (messageDisplay.textContent !== "Correct!") {
    streak += 1;
    if (streak >= 2) {
      streakDisplay.textContent = `🔥${streak}`;
    }
  }
}

function resetStreak(){
  streak = 0;
  streakDisplay.textContent = "";
}

test.addEventListener("click", () => {
  resetStreak();
});

// Mode-toggle:  EASY

easyBtn.addEventListener("click", () =>{
  h1.style.backgroundColor = "rgb(214, 29, 66)";
  resetButton.textContent = "New Colors";

  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");

  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

// Mode-toggle:  HARD

hardBtn.addEventListener("click", () => {
  h1.style.backgroundColor = "rgb(214, 29, 66)";
  resetButton.textContent = "New Colors";

  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");

  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

// Reset Button & Play Again logic

resetButton.addEventListener("click", () => {
  h1.style.backgroundColor = "rgb(214, 29, 66)";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color display to match picked color;
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});

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
      addStreak();
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
      resetStreak();
    }
  });
}

// Change colors after correct guess

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


// Create an array of random colors to be assigned to colors

function generateRandomColors(num) {
  let arr = [];
  for (var i = 0; i < num; i++) {
    arr[i] = randomColor();
  }

  return arr;
}

// Logic for generating randomized RGB

function randomColor() {
  //pick a R from 0-255
  let r = Math.floor(Math.random() * 256);
  //pick a G from 0-255
  let g = Math.floor(Math.random() * 256);
  //pick a B from 0-255
  let b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b +")";
}
