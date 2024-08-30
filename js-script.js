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
        // Add id to div
        square.id = i;
        // Make it child of container
        container.appendChild(square);;
      }
}
createSquares(sides);


//Converting hovered square into a colored square
function hoveredSquare(){
document.querySelectorAll('.square').forEach(function(square) {
    square.addEventListener('mouseenter', function() {
        // Check if the square already has a random colour stored
        let randomColor = this.getAttribute('data-random-color');
        
        //if not
        if (!randomColor) {
        // Generate a new random color
        // Calls the Random Color Generator function
          let randomColor = rgbArray;
          getRandomIntInclusive(0, 255);
          // Store the generated color in a data attribute
          this.setAttribute('data-random-color', randomColor);
        }

        //Allow data-random-color to be used in CSS 
        document.querySelectorAll('[data-random-color]').forEach(function(element) {
            let colorValue = element.getAttribute('data-random-color');
            element.style.setProperty('--random-color', colorValue);
        });

        // Add an attribute to store this information.
        this.classList.add('hovered');
        // Print the random number to the console
        console.log(rgbArray);
    });
});
};
hoveredSquare();

// Reseting hover effect after starting a new grid
document.getElementById('newGame').addEventListener('click', function() {
    document.querySelectorAll('.square').forEach(function(square) {
        square.classList.remove('hovered');
        square.removeAttribute("data-random-color");
    });
});


//But if the button is clicked and the popus shows, then turn the value of the number of sides to the number inserted in the popup.

// Create constant for button
newGame = document.getElementById("newGame");
//If button is clicked, then ask a question
if (newGame.addEventListener("click",() => {
// Insert the question and the answer will be the new number of sides.
    let sides = prompt("Ask how many sides on the square?");
    // Call the function again
    createSquares(sides);
    getRandomIntInclusive(0, 255);
    hoveredSquare();
}));



//Random color chooserSection 

function getRandomIntInclusive(min, max) {
    //Array to send to css for color.
    rgbArray = [];
    //For loop of 3 values
    for (let i = 0; i < 3; i++) {
    //Random number between 0 and 255 for RGB color.
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        value = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
        console.log(`The value of the ` +i+` number is `+ value);
        rgbArray.push(value);
        console.log(rgbArray);
        rgbArray[i]=value;
      }
    // Set the CSS variable --square-Size with the value of squareSize
    document.documentElement.style.setProperty('--color-0', `${rgbArray[0]}`);
    document.documentElement.style.setProperty('--color-1', `${rgbArray[1]}`);
    document.documentElement.style.setProperty('--color-2', `${rgbArray[2]}`);
}
getRandomIntInclusive(0, 255);