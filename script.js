const container = document.querySelector("#container");
const restartButton = document.querySelector("#restart");
let grid = [];
let squaresPerSide = 16; 
function createGrid() {
    container.innerHTML = "";
    grid = [];

    const squareSize = 700 / squaresPerSide;

    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, ${squareSize}px)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, ${squareSize}px)`;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement("div");
        square.classList.add("grid");
        container.appendChild(square);
        grid.push(square);
    }
}

function askForSquares() {
    do {
        squaresPerSide = parseInt(prompt("¿Cuántos cuadrados por lado? (Mínimo: 1 y Máximo: 100)"));
    } while (squaresPerSide > 100 || squaresPerSide < 1);

    createGrid();
}

restartButton.addEventListener("click", askForSquares);

container.addEventListener("mouseover", (event) => {
    const targetElement = event.target;
    if (targetElement.classList.contains("grid")) {
        targetElement.style.backgroundColor = "red";
    }
});


createGrid();
