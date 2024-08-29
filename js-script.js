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
    //Create CSS size for the size of square - each square to resize with grid size. 
    let squareSize = (800/(sides))-2;
    // Set the CSS variable --grid-px with the value of gridPx
    document.documentElement.style.setProperty('--square-Size', `${squareSize}px`);

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

//Create a function for when button is pressed
// Create constant for button
newGame = document.getElementById("newGame");
//Make popup open by clicking button.
newGame.addEventListener("click",() => {
    // Ask how many sides on the square?
    let size = prompt("Ask how many sides on the square?");
    console.log(size);
    return size;
});

// After they click enter, remove previous grid from display


// Creates a new grid in the same space as before, so size of squares will be smaller. 

createSquares(8);
