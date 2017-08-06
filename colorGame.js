var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
var streakDisplay = document.querySelector("#streak");

init();

function init() {
  setModeButtons();
  setColorSquares();
  reset();
}

function setModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      // Remove 'selected' from buttons and adds 'selected' if clicked
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      // Determines numSquares
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function setColorSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function () {

      //grab color of clicked square
      let clickedColor = this.style.backgroundColor;

      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        addStreak();
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
        setTimeout(function () {
          reset();
        }, 3000);
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
        resetStreak();
      }
    });
  }
}

function reset() {
  h1.style.backgroundColor = "rgb(214, 29, 66)";
  resetButton.textContent = "New Colors";
  if (streak) {
    messageDisplay.textContent = `🔥 ${streak}`;
  } else {
    messageDisplay.textContent = "";
  }
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color display to match picked color;
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

// Logic for correct streak

var streak = 0;

function addStreak(){
  if (messageDisplay.textContent !== "Correct!") {
    streak += 1;
  }
}

function resetStreak(){
  streak = 0;
}

resetButton.addEventListener("click", () => {
  reset();
});

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
