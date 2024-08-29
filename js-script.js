// Create the div container that will contain all other squares
const container = document.querySelector(".container");

// Create variable for number of sides
let sides;

//Create function to grid
const createSquares = (sides) => {
    //Create CSS size of grid - so that the grid is a square. 
    let gridPx = sides * 50;
    // Set the CSS variable --grid-px with the value of gridPx
    document.documentElement.style.setProperty('--grid-px', `${gridPx}px`);
    // Loop through size of grid. Size of grid side*side.
    for (let i = 0; i < sides**2; i++) {
        // Create one div (square) that will form the grid
        const square = document.createElement("div");
        // Add class to div
        square.classList.add("square");
        // Make it child of container
        container.appendChild(square);;
      }
}

createSquares(20);
