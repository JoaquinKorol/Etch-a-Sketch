// Select HTML elements
const container = document.querySelector("#container");
const rainbowButton = document.querySelector("#rainbow");
const colorButton = document.querySelector("#color");
const restartButton = document.querySelector("#restart");
const clearButton = document.querySelector("#clear");

const colorPicker = document.querySelector(".colorPicker")


// Inicial variables
let grid = [];
let squaresPerSide = 16;
let color = "rgb(0, 0, 0)"; 
let rainbowButtonPress = false;
let alertShown = false; 

// Create a grid of squares on the specified number
function createGrid() {
    container.innerHTML = ""; // Clear existing grid
    grid = [];

    const squareSize = 600 / squaresPerSide;

    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, ${squareSize}px)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, ${squareSize}px)`;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement("div");
        square.classList.add("grid");
        container.appendChild(square);
        grid.push(square);
    }
}

// Function to prompt the user for the number of squares per side
function askForSquares() {
    do {
        squaresPerSide = parseInt(prompt("How many squares per side? (Minimum: 1 and Maximum: 100)"));
    } while (squaresPerSide > 100 || squaresPerSide < 1);

    createGrid();
}

// Event listener for the "Restart" button
restartButton.addEventListener("click", askForSquares);



container.addEventListener("mouseover", (event) => {
    const targetElement = event.target;
    if (targetElement.classList.contains("grid")) {
        targetElement.style.backgroundColor = color;
    }
});

// Event listener for the "Rainbow" button
rainbowButton.addEventListener("click", () => {
    if (!rainbowButtonPress) {
        if (!alertShown) {
            alert("Press Rainbow Button Again To Turn Off");
            alertShown = true; 
        }

        rainbowButtonPress = true;
        changeColoreInterval = setInterval(() => {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            color = `rgb(${red}, ${green}, ${blue})`;
        }, 1);
    } else {
        color = colorPicker.value;
        rainbowButtonPress = false;
        clearInterval(changeColoreInterval);
    }
});

// Event listener for input events on the color picker
colorButton.addEventListener("input", () => {
    color = colorPicker.value
})

// Event listener for the "Clear" button
clearButton.addEventListener("click", () => {
    createGrid();
})

// Initial grid creation(16x16)
createGrid();
