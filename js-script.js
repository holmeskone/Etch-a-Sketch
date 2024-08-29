// Create the div container that will contain all other squares
const container = document.querySelector(".container");

// Create variable for number of sides
let grid = 16;
// Create variable for size of grid
let gridSize = grid * grid;

//Create divs function to create 16x16 
const createSquares = (gridSize) => {
    // Loop through size of grid
    for (let i = 0; i < gridSize; i++) {
        // Create one div (square) that will form the grid
        const square = document.createElement("div");
        // Add class to div
        square.classList.add("square");
        // Make it child of container
        container.appendChild(square);;
      }
}

createSquares(gridSize);
