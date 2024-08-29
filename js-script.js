// Create the div container that will contain all other squares
const container = document.querySelector(".container");

// Create one div (square) that will form the grid
const square = document.createElement("div");
square.classList.add("square");
container.appendChild(square);

let grid = 16;
let gridSize = grid * grid;

//Create divs function to create 16x16 
const createSquares = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);;
      }
}

createSquares(gridSize);
