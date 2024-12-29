const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");

        const player = {
            x: 100,
            y: 300,
            width: 30,
            height: 50,
            jumping: false,
            velocityY: 0,
            speed: 3
        };

        const gravity = 1;
        const jumpForce = -10;
        const maxJumpTime = 500;
        

        const platforms = [
            { x: 0, y: 350, width: canvas.width, height: 50 },
            { x: 200, y: 280, width: 100, height: 20 },
            { x: 400, y: 200, width: 100, height: 20 },
            { x: 600, y: 150, width: 100, height: 20 },
            { x: 700, y: 100, width: 100, height: 20 }
        ];

        const spikes = [
            { x: 350, y: 320, width: 50, height: 30 },
            { x: 500, y: 170, width: 50, height: 30 }
        ];

        let gameRunning = false;

        document.getElementById("startButton").addEventListener('click', () => {
            gameRunning = true;
            gameLoop();
        });
        let isJumping = false; // Initialize with false

        // Function to check if the player is jumping
        function isPlayerJumping() {
            //Write your logic here
        }
        


        // Updated keyup event listener
        document.addEventListener("keyup", function(event) {
            //Write you logic here
        });


        //Check the colliding conditions here
        function isColliding(objA, objB) {
            //Write your logic here
        }


        //Check the endgame conditions here
        function endGame() {
           //Write your logic here
        }
        


let hasDoubleJump = false;
let doubleJumpUsed = false;

// Double Jump Power-up
const doubleJumpPowerup = {
    x: 450,
    y: 100,
    width: 30,
    height: 30
};

// Simple patrolling enemy
const enemy = {
    x: 650,
    y: 320,
    width: 30,
    height: 30,
    speed: 2,
    direction: -1
};

const airControlFactor = 0.5;
const maxAirSpeed = 3;

document.addEventListener("keydown", function(event) {
    //Write your logic here
});
    
let score = 0;


// this function is responsible for updating the game's logic and rendering the game on the canvas continuously.
function gameLoop() {
    // Write your logic here
}
window.isPlayerJumping = isPlayerJumping;
window.score = score;
window.player = player;
window.gameLoop = gameLoop;
window.gameRunning = gameRunning;
window.spikes = spikes;
window.enemy = enemy;


