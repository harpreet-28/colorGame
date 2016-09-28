var numSquares = 5;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll(".mode");
init();
function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}
function setUpModeButtons() {
    //mode buttons event Listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function() {
            modeButtons[0].classList.remove("selected");
            this.classList.add("selected");
            (this.textContent === "Easy") ? numSquares = 2: numSquares = 5;
            reset();
        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {

        squares[i].addEventListener('click', function() {
            //grab color of clicked square
            var clickedColor = this.style.background;
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}
resetButton.addEventListener('click', reset, false)

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array  and add num random colors to array and return the array at end.
    var arr = [];
    for (var i = 0; i <= num; i++) {
        //get random color n push inyo array
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    //pick a 'red' form 0 to 255
    var r = Math.floor(Math.random() * 256)
        // green
    var g = Math.floor(Math.random() * 256)
        //blue
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
