---
layout: reflection
title: Kappenball
date: 2024-12-14
contributed_by:
  initial:
    type: "human"
    name: "Neil D. Lawrence"
    person_id: "Neil D. Lawrence"
    date: "2024-12-15"
    notes: "Written and approved for publication."
featured_image: /assets/images/kappenball.png
---

<!-- style for kappenball canvas-->
<style>
:root {
    /* Ground: Using a darker variant of your secondary cyan color for better contrast */
    --kappenball-ground: rgba(76, 201, 240, 0.8);  /* Based on secondary: #4cc9f0 */
    
    /* Pin: Using your accent magenta */
    --kappenball-pin: rgba(247, 37, 133, 0.8);     /* Based on accent: #f72585 */
    
    /* Ball: Using a variant of your footer text color */
    --kappenball-ball: rgba(224, 224, 224, 0.8);   /* Based on footer.text: #e0e0e0 */
    
    /* Membrane: Using the same color as ground for consistency */
    --kappenball-membrane: rgba(76, 201, 240, 0.8); /* Matches ground color */
    
    /* Hot: Using your accent magenta */
    --kappenball-hot: rgba(247, 37, 133, 0.8);     /* Based on accent: #f72585 */
    
    /* Cold: Using your secondary cyan */
    --kappenball-cold: rgba(76, 201, 240, 0.8);    /* Based on secondary: #4cc9f0 */
}
.game-container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.game-container.fullscreen {
    max-width: none;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 20px;
    position: relative;
    justify-content: flex-start;
    background: rgba(0, 0, 0, 0.8); /* Dark background in fullscreen */
}

#kappenball-canvas {
    width: 100%;
    height: auto;
    max-width: 900px;
    max-height: 500px;
    display: block;
    margin: 20px auto;
}

.fullscreen #kappenball-canvas {
    max-width: none;
    max-height: none;
    flex: 1;
    margin: 20px 0;
    position: relative;
}

.game-controls {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 0;
    max-width: 900px;
    position: relative;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.9);
    padding: 10px;
    border-radius: 8px;
}

.fullscreen .game-controls {
    background: rgba(255, 255, 255, 0.95); /* More opaque in fullscreen */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Add shadow for better visibility */
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}

.score-display {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
    max-width: 900px;
    font-size: 1.5em;
    font-weight: bold;
    padding: 10px;
    background: rgba(0,0,0,0.1);
    border-radius: 8px;
    color: #000000;
}

.fullscreen .score-display {
    background: rgba(255, 255, 255, 0.95); /* More visible background */
    color: #000000; /* Keep dark text for better contrast */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.slider-container {
    width: 100%;
}

#kappenball-stochasticity {
    width: 100%;
}

.button-container {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
}

.game-button {
    padding: 10px 20px;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.fullscreen .game-button {
    background-color: #3b82f6; /* Brighter blue in fullscreen */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.game-button:hover {
    background-color: #1d4ed8;
}

.instructions-toggle {
    width: 100%;
    text-align: left;
    padding: 10px;
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
}

.instructions-toggle::before {
    content: "►";
    display: inline-block;
    transition: transform 0.3s;
}

.instructions-toggle.active::before {
    transform: rotate(90deg);
}

.instructions-content {
    display: none;
    padding: 15px;
    border-left: 2px solid #2563eb;
    margin-left: 20px;
}

.instructions-content.active {
    display: block;
}

/* Media Queries */
@media (max-width: 768px) {
    .game-container {
        padding: 5px;
    }
    
    #kappenball-canvas {
        touch-action: none;
    }
}

@media (min-width: 768px) {
    .fullscreen-button {
        display: block;
    }
}
</style>

The Gremlins of Uncertainty tries to communicate the importance of uncertainty when decision-making. Communicating this is something I've been thinking about for a while. Twelve years ago when I gave my inaugural lecture at the University of Sheffield, I wanted to communicate this idea with a game. I [coded it in Matlab](https://github.com/lawrennd/kappenball), and it was called Kappenball.

Kappenball is a simple game that illustrates that this behaviour can be optimal. It is inspired by an example in stochastic optimal control by [Bert Kappen](https://www.snn.ru.nl/~bertk/). 

The aim is to place a falling ball into one of two holes. If the ball misses the holes it will be destroyed when it hits the ground. The aim is to get the ball in a hole, but every movement of the ball costs energy.

There are two modes to playing Kappenball. 

In 'deterministic mode', the balloon falls straight towards the ground and the game is easy. You simply choose which hole to place the ball in, and you can start to place it there as soon as the ball appears at the top of the screen. 

The game gets interesting in stochastic mode. In Kappenball, uncertainty takes the form of the ball being blown left and right as it falls. This movement means that deciding early which hole to place the ball in is pointless, because it's going to move. A better strategy is to wait and see which hole the ball falls towards. You can then place it in that hole using less energy than in deterministic mode. 

Sometimes, the ball even falls into the hole on its own, and you don't have to expend any energy, but it requires some skill to judge when you need to intervene. For this system Bert Kappen has shown mathematically that the best solution is to wait until the ball is close to the hole before you push it in. In other words, you should be deadline driven.

In fact, it seems here uncertainty is a good thing, because on average you'll get the ball into the hole with less energy (by playing intelligently, and being deadline driven!) than you do with 'deterministic mode'. It requires some skill to do this, more than the deterministic system, but by using your resources intelligently you can get more out of the system. However, if the uncertainty increases too much then regardless of your skill, you can't control the ball at all.

This simple game explains many of the behaviours we exhibit in real life. If a system is completely deterministic, then we can make a decision early on and be sure that the ball will 'drop in the hole'. However, if there is uncertainty in a system, it can make sense to delay our decision making until we've seen how events 'pan out'. Be careful though, as we also see that when the uncertainty is large, if you don't have the resources or the skill to be deadline-driven the uncertainty can overwhelm you and events can quickly move beyond our control.

I had hoped to include a description of the game in Chapter 6, *The Gremlins of Uncertainty*. But in the end, it didn't quite fit in with the rhythmn of the chapter. So, instead, here's the game for you to play directly!
<output id="kappenball-count"></output>
<div class="game-container">
    <div class="score-display">
        <span>Score: <output id="kappenball-score"></output></span>
        <span>Energy: <output id="kappenball-energy"></output></span>
        
    </div>
    
    <canvas id="kappenball-canvas" width="900" height="500"></canvas>

    <div class="game-controls">
        <div class="slider-container">
            <input type="range" min="0" max="100" value="0" class="slider" id="kappenball-stochasticity"/>
        </div>
        
        <div class="button-container">
            <button id="kappenball-newball" class="game-button" aria-label="Add a new ball">New Ball</button>
            <button id="kappenball-pause" class="game-button" aria-label="Pause the game">Pause</button>
            <button id="kappenball-fullscreen" class="game-button fullscreen-button" style="display:none" aria-label="Enter or exit fullscreen mode>Fullscreen</button>
        </div>
    </div>
    
</div>
<div class="instructions-container">
    <button class="instructions-toggle">Game Controls & Features</button>
    <div class="instructions-content">
        <h3>Tap Controls</h3>
        <ul>
            <li>Tap left side: Push ball right</li>
            <li>Tap right side: Push ball left</li>
        </ul>

        <h3>Game Instructions</h3>

        <p>Try the game first with low stochasticity. Then you can simply place the ball over a hole and let it drop through. This leads to the idea of "don't put off until tomorrow what you can do today". But try it with the stochasticity slider placed up, now you are best off delaying and seeing which hole the ball falls towards. This provides a mathematical justification for procrastination.</p>
        
        <h3>Advanced Controls</h3>
        <ul>
            <li><strong>Movement:</strong> Arrow Keys or WASD</li>
            <li><strong>Pause/Unpause:</strong> P or Spacebar</li>
            <li><strong>Reset Game:</strong> R</li>
            <li><strong>Random Ball:</strong> C</li>
            <li><strong>Random Atomic Eye:</strong>Shift C</li>
        </ul>

    </div>
</div>

<!-- External JavaScript Files -->
<script src="/assets/js/ballworld.js"></script>
<script src="/assets/js/kappenball.js"></script>

<!-- Inline JavaScript -->
<script>
// Fullscreen functionality and instructions toggle
document.addEventListener('DOMContentLoaded', function() {
    const fullscreenButton = document.getElementById('kappenball-fullscreen');
    const gameContainer = document.querySelector('.game-container');
    const instructionsToggle = document.querySelector('.instructions-toggle');
    const instructionsContent = document.querySelector('.instructions-content');
    
    // Instructions toggle functionality
    instructionsToggle.addEventListener('click', function() {
        instructionsContent.classList.toggle('active');
        instructionsToggle.classList.toggle('active');
    });

    // Fullscreen logic
    // Only show fullscreen button if the API is supported
    if (document.fullscreenEnabled || 
        document.webkitFullscreenEnabled || 
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled) {
        
        fullscreenButton.style.display = 'block';
        
        fullscreenButton.addEventListener('click', function() {
            if (!document.fullscreenElement) {
                if (gameContainer.requestFullscreen) {
                    gameContainer.requestFullscreen();
                } else if (gameContainer.webkitRequestFullscreen) {
                    gameContainer.webkitRequestFullscreen();
                } else if (gameContainer.mozRequestFullScreen) {
                    gameContainer.mozRequestFullScreen();
                } else if (gameContainer.msRequestFullscreen) {
                    gameContainer.msRequestFullscreen();
                }
                gameContainer.classList.add('fullscreen');
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                gameContainer.classList.remove('fullscreen');
            }
        });

        // Handle fullscreen change events
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);

        function handleFullscreenChange() {
            if (!document.fullscreenElement && 
                !document.webkitFullscreenElement && 
                !document.mozFullScreenElement && 
                !document.msFullscreenElement) {
                gameContainer.classList.remove('fullscreen');
            }
        }
    }
});
    
// Adjust canvas size based on device and fullscreen state
function resizeCanvas() {
    const canvas = document.getElementById('kappenball-canvas');
    const container = canvas.parentElement;
    const containerWidth = container.clientWidth;
        
    if (container.classList.contains('fullscreen')) {
        const containerHeight = container.clientHeight;
        const availableHeight = containerHeight - 150; // Account for controls
        const aspectRatio = 900/500;
            
        // Calculate dimensions that maintain aspect ratio and fit the container
        let width = containerWidth;
        let height = width / aspectRatio;
            
        if (height > availableHeight) {
            height = availableHeight;
            width = height * aspectRatio;
        }
            
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
    } else {
        // Normal mode
        const aspectRatio = 900/500;
        const height = containerWidth / aspectRatio;
            
        canvas.style.width = containerWidth + 'px';
        canvas.style.height = height + 'px';
    }
}

// Debounce sizing for better performance
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(resizeCanvas, 100);
});

// Initial canvas resize 
document.addEventListener('DOMContentLoaded', resizeCanvas);
</script>
