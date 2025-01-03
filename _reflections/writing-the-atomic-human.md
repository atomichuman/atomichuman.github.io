---
title: Writing the Atomic Human
date: 2024-12-23
toggle_machine_commentary: false
contributed_by:
  initial:
    date: 2024-12-23
    type: human
    name: Neil D. Lawrence
featured_image: /assets/images/writing-the-atomic-human.png
---

Sometimes I'm asked "How long did it take you to write?" The answer is now visualised below.

<center>
<iframe width="630" height="482" src="https://www.youtube.com/embed/vMQPoC944jA">
</iframe>
<i>Visualisation of the writing process using the gource tool and the repositories where the book was written.</i>
</center>

The visualisation tool uses a half second per day, so now I can finally say that the material was edited on around 550 days across eight years with the initial repository created on GitHub on 21st May 2015. 

It's created using the [gource source code visualisation tool](https://gource.io/). Because the book was initially written in one repository, before moving it to another, the first thing I do is combine the logs of the repositories.  


````bash
gource --output-custom-log log1.txt ~/riseofthealgorithm/riseofthealgorithm.github.io
gource --output-custom-log log2.txt ~/lawrennd/the-atomic-human
cat log1.txt log2.txt | sort -n > combinedlog.txt
```

Then `gource` is used to visualise the result which is uploaded to YouTube. 

```bash
gource combinedlog.txt \
    --seconds-per-day 0.5 \
    -1280x720 \
    --auto-skip-seconds .3 \
    --multi-sampling \
    --stop-at-end \
    --key \
    --highlight-users \
    --file-idle-time 1500 \
    --background-colour 000000 \
    --font-size 25 \
    --title "The Atomic Human" \
    --user-image-dir .git/avatar \
    --user-scale 6.0 \
    --user-font-size 30 \
    -e 2.5 \
    --output-framerate 60 \
    --output-ppm-stream - \
    | ffmpeg -y -f image2pipe \
        -framerate 60 \
        -i - \
        -c:v libx264 \
        -preset medium \
        -pix_fmt yuv420p \
        -crf 18 \
        -movflags +faststart \
        atomic_human_visualization.mp4
```
