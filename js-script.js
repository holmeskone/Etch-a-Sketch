// Create the div container that will contain all other squares
const container = document.querySelector(".container");

// Create variable for number of sides
let grid = 20;
// Create variable for size of grid, this is used for the creation of squares later in the looping section.
let gridSize = grid * grid;

//Create CSS size of grid
let gridPx = grid * 50;
// Set the CSS variable --grid-px with the value of gridPx
document.documentElement.style.setProperty('--grid-px', `${gridPx}px`);

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
