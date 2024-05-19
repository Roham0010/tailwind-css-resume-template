function getRandomAngle() {
  return Math.random() * 360;
}

// Function to create and place a character in a grid cell
function placeCharacterInGrid(character, container) {
  var charElement = document.createElement("div");
  charElement.textContent = character;
  charElement.classList.add("random-char");
  charElement.style.transform = "rotate(" + getRandomAngle() + "deg)";
  charElement.style.fontSize = Math.floor(Math.random() * 12) + 7 + "px";
  container.appendChild(charElement);
}

// Example characters to display
var characters = [
  "{",
  "{",
  "[",
  "]",
  "if",
  "else",
  "while",
  "select",
  "<",
  ">",
  "<br />",
  "API",
];

// Get the grid container
var gridContainer = document.getElementById("grid-container");

// Calculate the number of grid cells based on the container size
var numCells =
  Math.floor(gridContainer.offsetWidth / 50) *
  Math.floor(gridContainer.offsetHeight / 50);

// Create an array with the size of the number of cells, filled with characters
var gridCharacters = new Array(numCells).fill(null).map(function (_, index) {
  return characters[index % characters.length];
});

// Shuffle the array to randomize the characters' positions
gridCharacters.sort(function () {
  return 0.5 - Math.random() * 5;
});
// Example characters to display

// Place each character randomly on the page
// for (let i = 0; i < 10; i++) {
gridCharacters.forEach(function (character) {
  placeCharacterInGrid(character, gridContainer);
});
// }
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.left === "0px") {
    menu.style.left = "-128px";
  } else {
    menu.style.left = "0px";
  }
}
