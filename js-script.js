// Create the div container that will contain all other squares
const container = document.querySelector(".container");

// Create default value for number of sides
let sides = 16;

//Function to create grid
const createSquares = (sides) => {
    //Create CSS variable that resizes squares based on matrix.
    let squareSize = (500/(sides));
    console.log(`This is the size of the square` + squareSize);
    // Set the CSS variable --square-Size with the value of squareSize
    document.documentElement.style.setProperty('--square-Size', `${squareSize}px`);
    // <div> creation based on the sidze of the grid -eg: 5x5 = 25 <div>
    for (let i = 0; i < sides**2; i++) {
        console.log(`This is side number ` + i );
        // Create one div (square)
        const square = document.createElement("div");
        // Add class to div
        square.classList.add("square");
        // Make it child of container
        container.appendChild(square);;
      }
}
createSquares(sides);


//Converting hovered square into a colored square
document.querySelectorAll('.square').forEach(function(square) {
    square.addEventListener('mouseenter', function() {
        this.classList.add('hovered');
    });
});

// Reseting hover effect after starting a new grid
document.getElementById('newGame').addEventListener('click', function() {
    document.querySelectorAll('.square').forEach(function(square) {
        square.classList.remove('hovered');
    });
});



//But if the button is clicked and the popus shows, then turn the value of the number of sides to the number inserted in the popup.

// Create constant for button
newGame = document.getElementById("newGame");
//If button is clicked, then ask a question
if (newGame.addEventListener("click",() => {
// Insert the question and the answer will be the new number of sides.
    let sides = prompt("Ask how many sides on the square?");
    console.log(sides);
    // Call the function again
    createSquares(sides);
}));
