// Copyright (c) 2020 Neil D. Lawrence

/**
 * Kappenball game class that extends the base Game class
 * Implements a game where balls fall and need to be guided into holes while avoiding obstacles
 */
class Kappenball extends Game {
    /**
     * Initialize the Kappenball game
     * @param {Object} objects - Contains arrays of game objects (balls, boxes, pits, etc)
     * @param {Object} params - Game parameters like gravity, elasticity, etc
     * @param {Object} simulation - Simulation settings like pause state
     * @param {Object} boundaries - Boundary behavior settings
     * @param {Object} context - Canvas context for rendering
     * @param {Object} colors - Color definitions for game objects
     * @param {Image} favicon - Favicon image for use as balls
     */
    constructor(objects, params, simulation, boundaries, context, colors, favicon) {
        super(objects, params, simulation, boundaries, context, colors, favicon);

        this.favicon = favicon; // store favicon image for use as balls

        // Width of holes that balls can fall into
        this.holeWidth = 100;

        // Create the game layout with boxes, pits and posts
        // Left side pit and ground
        this.objects.pits[this.objects.pits.length] = new Box(this.context, 0, this.context.canvas.height-40, 90, 30, this.colors.pin);
        this.objects.boxes[this.objects.boxes.length] = new Box(this.context, 0, this.context.canvas.height-10, 90, 10, this.colors.ground);
        
        // First hole boundaries
        this.objects.posts[this.objects.posts.length] = new Post(this.context, 95, this.context.canvas.height-35, 5, this.colors.ground);
        this.objects.boxes[this.objects.boxes.length] = new Box(this.context, 90, this.context.canvas.height-30, 10, 20, this.colors.ground);
        this.objects.posts[this.objects.posts.length] = new Post(this.context, 95, this.context.canvas.height-5, 5, this.colors.ground);
        this.objects.posts[this.objects.posts.length] = new Post(this.context, 305, this.context.canvas.height-35, 5, this.colors.ground);
        this.objects.boxes[this.objects.boxes.length] = new Box(this.context, 300, this.context.canvas.height-30, 10, 20, this.colors.ground);
        this.objects.posts[this.objects.posts.length] = new Post(this.context, 305, this.context.canvas.height-5, 5, this.colors.ground);

        // Middle section
        this.objects.boxes[this.objects.boxes.length] = new Box(this.context, 310, this.context.canvas.height-10, 280, 10, this.colors.ground);
        this.objects.pits[this.objects.pits.length] = new Box(this.context, 310, this.context.canvas.height-40, 280, 30, this.colors.pin);

        // Second hole boundaries  
        this.objects.posts[this.objects.posts.length] = new Post(this.context, 595, this.context.canvas.height-35, 5, this.colors.ground);
        this.objects.boxes[this.objects.boxes.length] = new Box(this.context, 590, this.context.canvas.height-30, 10, 20, this.colors.ground);
        this.objects.posts[this.objects.posts.length] = new Post(this.context, 595, this.context.canvas.height-5, 5, this.colors.ground);
        this.objects.posts[this.objects.posts.length] = new Post(this.context, 805, this.context.canvas.height-35, 5, this.colors.ground);
        this.objects.boxes[this.objects.boxes.length] = new Box(this.context, 800, this.context.canvas.height-30, 10, 20, this.colors.ground);
        this.objects.posts[this.objects.posts.length] = new Post(this.context, 805, this.context.canvas.height-5, 5, this.colors.ground);

        // Right side pit and ground
        this.objects.pits[this.objects.pits.length] = new Box(this.context, 810, this.context.canvas.height-40, 750, 30, this.colors.pin);
        this.objects.boxes[this.objects.boxes.length] = new Box(this.context, 810, this.context.canvas.height-10, 90, 10, this.colors.ground);
    }

    /**
     * Increment the game score
     * @param {number} amount - Amount to increment score by
     */
    incrementScore(amount) {
        score.value = parseInt(score.value)+amount;
    }

    /**
     * Increment the energy counter
     * @param {number} accel - Acceleration value to add to energy
     */
    incrementEnergy(accel) {
        energy.value = parseFloat(energy.value)+accel;
    }

    /**
     * Create a new favicon object at the top center of the game
     */
    
    birth() {
        if (this.favicon.complete) {
            var temp = new Ico(this.context, this.context.canvas.width/2, 16, this.favicon);
            temp.dx = 0;
            temp.dy = 1;
            this.objects.balls[this.objects.balls.length] = temp;
        } else {
            console.log('Favicon not loaded yet');
        }
    }

    /**
     * Reset the game by creating a new ball
     */
    reset() {
        this.birth();
    }
}

// Get DOM elements
var slider = document.getElementById("kappenball-stochasticity");
var score = document.getElementById("kappenball-score");
var ballCount = document.getElementById("kappenball-count");
var energy = document.getElementById("kappenball-energy");

// Initialize counters
score.value = 0
ballCount.value = 0
energy.value = 0

// Set up button controls
var newballKappenballButton = document.getElementById("kappenball-newball");
var pauseKappenballButton = document.getElementById("kappenball-pause");

newballKappenballButton.addEventListener("click", function() {
    kappenball.reset()
});
pauseKappenballButton.addEventListener("click", function() {
    kappenball.togglePause()
});

// Set up keyboard controls
document.addEventListener("keydown", function() {
     keyDownHandler(event, kappenball);
});
document.addEventListener("keyup", function() {
    keyUpHandler(event, kappenball);
});

// Initialize stochasticity and handle slider changes
var stochasticity = slider.value
slider.oninput = function() {
    kappenball.params.stochasticity = this.value;
}

// Create game instance
window.onload = function() {

    // Define colors for game objects
    var colors = {
        ground: getComputedStyle(document.documentElement).getPropertyValue('--kappenball-ground').trim(),
        pin: getComputedStyle(document.documentElement).getPropertyValue('--kappenball-pin').trim(),
        ball: getComputedStyle(document.documentElement).getPropertyValue('--kappenball-ball').trim(),
        membrane: getComputedStyle(document.documentElement).getPropertyValue('--kappenball-membrane').trim(),
        hot: getComputedStyle(document.documentElement).getPropertyValue('--kappenball-hot').trim(),
        cold: getComputedStyle(document.documentElement).getPropertyValue('--kappenball-cold').trim()
    };  

    // Simulation settings
    var simulation = {
        paused: false,
        gravity: true,
        drag: true,
        sound: false,
        clearCanv: true,
        bigBalls: false,
        dt: 1
    };

    // Boundary behavior settings
    var boundaries = {
        wallBounce: true,
        floorBounce: false,
        floorWrap: false,
        floorWrapCenter: true,
        floorReset: false
    };

    // Game physics parameters
    var params = {
        inelasticityFactor: 1.0,
        demonThreshold: 3,
        initialSpeed: 5,
        energy: 0.0,
        gravityAccel: 0.06,
        arrowAccel: 4, // How much to push the ball when using arrow keys
        stochasticity: 0.0,
        stochasticityScale: 0.2,
        dragFactor: 0.97
    };

    // Initialize game objects arrays
    var objects = {
        balls: [],
        boxes: [],
        pits: [],
        posts: [],
        membranes: []
    };

    // Get canvas context
    var context = {
        canvas: document.getElementById("kappenball-canvas"),
        ctx: document.getElementById("kappenball-canvas").getContext("2d")
    };

    // Create and load favicon image
    const favicon = new Image();
    favicon.src = 'https://the-atomic-human.ai/favicon.ico';

    favicon.onload = function() {
        kappenball = new Kappenball(objects, params, simulation, boundaries, context, colors, favicon);
        kappenball.reset();
        draw(kappenball);

        // Add click handler to canvas
        kappenball.context.canvas.addEventListener("click", function(event) {
            clickReporter(event, kappenball);
        });
    };
    favicon.onerror = function() {
        console.error('Error loading favicon image');
    };
}



