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
    --kappenball-ground: rgba(56, 256, 56, 0.8);
    --kappenball-pin: rgba(256, 56, 56, 0.8);
    --kappenball-ball: rgba(200, 200, 200, 0.8);
    --kappenball-membrane: rgba(56, 256, 56, 0.8);
    --kappenball-hot: rgba(256, 56, 56, 0.8);
    --kappenball-cold: rgba(56, 56, 256, 0.8);
}

#myCanvas {
  margin-top: -20px;
}
</style>


## Kappenball

If you want to complete a task, should you do it now or should you put it off until tomorrow? Despite being told to not delay tasks, many of us are deadline driven. Why is this?

Kappenball is a simple game that illustrates that this behaviour can be optimal. It is inspired by an example in stochastic optimal control by [Bert Kappen](https://www.snn.ru.nl/~bertk/). The game is as follows: you need to place a falling balloon into one of two holes, but if the balloon misses the holes it will pop on pins placed in the ground. In 'deterministic mode', the balloon falls straight towards the ground and the game is easy. You simply choose which hole to place the ball in, and you can start to place it there as soon as the ball appears at the top of the screen. The game becomes more interesting as you increase the uncertainty. In Kappenball, the uncertainty takes the form of the balloon being blown left and right as it falls. This movement means that it is not sensible to decide early on which hole to place the balloon in. A better strategy is to wait and see which hole the ball falls towards. You can then place it in that hole using less energy than in deterministic mode. Sometimes, the ball even falls into the hole on its own, and you don't have to expend any energy, but it requires some skill to judge when you need to intervene. For this system Bert Kappen has shown mathematically that the best solution is to wait until the ball is close to the hole before you push it in. In other words, you should be deadline driven.

In fact, it seems here uncertainty is a good thing, because on average you'll get the ball into the hole with less energy (by playing intelligently, and being deadline driven!) than you do with 'deterministic mode'. It requires some skill to do this, more than the deterministic system, but by using your resources intelligently you can get more out of the system. However, if the uncertainty increases too much then regardless of your skill, you can't control the ball at all.

This simple game explains many of the behaviours we exhibit in real life. If a system is completely deterministic, then we can make a decision early on and be sure that the ball will 'drop in the hole'. However, if there is uncertainty in a system, it can make sense to delay our decision making until we've seen how events 'pan out'. Be careful though, as we also see that when the uncertainty is large, if you don't have the resources or the skill to be deadline-driven the uncertainty can overwhelm you and events can quickly move beyond our control.

<div>
  <div style="width:900px;text-align:center;display:inline">
    <span style="float:left;">Score: <output id="kappenball-score"></output></span>
    <span style="float:right;">Energy: <output id="kappenball-energy"></output></span>
    <div style="clear: both;"></div>
  </div>
  <canvas id="kappenball-canvas" width="900" height="500" style="display:inline;text-align:center"></canvas>
  <div>
    <input type="range" min="0" max="100" value="0" class="slider" id="kappenball-stochasticity" style="width:900px;"/>
  </div>
  <div>
    <button id="kappenball-newball" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">New Ball</button>
    <button id="kappenball-pause" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Pause</button>
  </div>
  <output id="kappenball-count"></output>
  <script src="/assets/js/ballworld.js"></script>
  <script src="/assets/js/kappenball.js"></script>
</div>

