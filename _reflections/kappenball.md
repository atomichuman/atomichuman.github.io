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
}

#kappenball-canvas {
    width: 100%;
    height: auto;
    max-width: 900px;
    max-height: 500px;
    margin-top: -20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.fullscreen #kappenball-canvas {
    max-width: none;
    max-height: none;
    flex: 1;
    margin: 10px 0;
}

.game-controls {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 0;
    max-width: 900px;
}

.score-display {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
    max-width: 900px;
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
        touch-action: none; /* Prevents default touch behaviors on mobile */
    }
}

@media (min-width: 768px) {
    .fullscreen-button {
        display: block;
    }
}
</style>


## Kappenball

If you want to complete a task, should you do it now or should you put it off until tomorrow? Despite being told to not delay tasks, many of us are deadline driven. Why is this?

Kappenball is a simple game that illustrates that this behaviour can be optimal. It is inspired by an example in stochastic optimal control by [Bert Kappen](https://www.snn.ru.nl/~bertk/). The game is as follows: you need to place a falling balloon into one of two holes, but if the balloon misses the holes it will pop on pins placed in the ground. In 'deterministic mode', the balloon falls straight towards the ground and the game is easy. You simply choose which hole to place the ball in, and you can start to place it there as soon as the ball appears at the top of the screen. The game becomes more interesting as you increase the uncertainty. In Kappenball, the uncertainty takes the form of the balloon being blown left and right as it falls. This movement means that it is not sensible to decide early on which hole to place the balloon in. A better strategy is to wait and see which hole the ball falls towards. You can then place it in that hole using less energy than in deterministic mode. Sometimes, the ball even falls into the hole on its own, and you don't have to expend any energy, but it requires some skill to judge when you need to intervene. For this system Bert Kappen has shown mathematically that the best solution is to wait until the ball is close to the hole before you push it in. In other words, you should be deadline driven.

In fact, it seems here uncertainty is a good thing, because on average you'll get the ball into the hole with less energy (by playing intelligently, and being deadline driven!) than you do with 'deterministic mode'. It requires some skill to do this, more than the deterministic system, but by using your resources intelligently you can get more out of the system. However, if the uncertainty increases too much then regardless of your skill, you can't control the ball at all.

This simple game explains many of the behaviours we exhibit in real life. If a system is completely deterministic, then we can make a decision early on and be sure that the ball will 'drop in the hole'. However, if there is uncertainty in a system, it can make sense to delay our decision making until we've seen how events 'pan out'. Be careful though, as we also see that when the uncertainty is large, if you don't have the resources or the skill to be deadline-driven the uncertainty can overwhelm you and events can quickly move beyond our control.

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
            <button id="kappenball-newball" class="game-button">New Ball</button>
            <button id="kappenball-pause" class="game-button">Pause</button>
            <button id="kappenball-fullscreen" class="game-button fullscreen-button" style="display:none">Fullscreen</button>
        </div>
    </div>
    <output id="kappenball-count"></output>

    <button class="instructions-toggle">Game Controls & Features</button>
    <div class="instructions-content">
        <h3>Keyboard Controls</h3>
        <ul>
            <li><strong>Movement:</strong> Arrow Keys or WASD</li>
            <li><strong>Pause/Unpause:</strong> P or Spacebar</li>
            <li><strong>Reset Game:</strong> R</li>
            <li><strong>New Ball:</strong> C</li>
            <li><strong>Toggle Physics:</strong> G (gravity/drag)</li>
            <li><strong>Toggle Sound:</strong> M</li>
            <li><strong>Toggle Trails:</strong> K</li>
            <li><strong>Toggle Ball Size:</strong> X</li>
        </ul>

        <h3>Mouse Controls</h3>
        <ul>
            <li>Click left side: Push ball right</li>
            <li>Click right side: Push ball left</li>
        </ul>

        <h3>Game Objects</h3>
        <ul>
            <li><strong>Balls:</strong> Physics-enabled objects affected by gravity and collisions</li>
            <li><strong>Posts:</strong> Static circular obstacles</li>
            <li><strong>Boxes:</strong> Rectangular boundaries</li>
            <li><strong>Membranes:</strong> Semi-permeable barriers</li>
        </ul>
    </div>
</div>

<script src="/assets/js/ballworld.js"></script>
<script src="/assets/js/kappenball.js"></script>
<script>
// Add fullscreen functionality
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
    
    // Call on load and resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
});
</script>
