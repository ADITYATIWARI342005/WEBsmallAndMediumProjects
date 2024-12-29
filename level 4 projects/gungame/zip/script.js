// Fetch the canvas element from the HTML
const canvas = document.getElementById("gameCanvas");
// Get the 2D rendering context for the canvas
const ctx = canvas.getContext("2d");

// Define the gun object and its properties
let gun = {
    x: canvas.width / 2 - 25, // Horizontal position (center of canvas, offset by half of the gun's width)
    y: canvas.height - 100,    // Vertical position (bottom of the canvas)
    width: 50,                // Width of the gun
    height: 80,               // Height of the gun
    dx: 20                    // Change in x-direction for movement
};

// An array to store the bullets
let bullets = [];

// Define the target object and its properties
let target = {
    x: 100,                   // Initial horizontal position
    y: 50,                    // Vertical position
    radius: 20,               // Radius of the target
    dx: 6                     // Change in x-direction for movement
};

// Load the bullet sound effect
let bulletSound = new Audio('bulletFire.mp3');
let gameOverSound= new Audio('gameOver.wav')
// Game variables
let score = 0; // Player's current score
// Fetch high score from local storage or set it to 0 if not available
let highScore = parseInt(localStorage.getItem("highScore")) || 0;
let spacePressed = false;    // Track if the spacebar is pressed
let gameState = "notStarted"; // Current game state (notStarted, ongoing, ended)
let consecutiveMisses = 0;   // Track consecutive missed shots

let monsterImg = new Image();
monsterImg.src = "monsterimage.png"; // path to your monster image

let bulletImg = new Image();
bulletImg.src = "bulletimage.png"; // path to your bullet image

let gunImg = new Image();
gunImg.src = "gunimage.png"; // path to your gun image






