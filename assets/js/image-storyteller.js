class ImageStoryteller {
  constructor(config) {
    this.config = {
      storyContainerId: config.storyContainerId,
      textContainerId: config.textContainerId,
      controlContainerId: config.controlContainerId,
      imageId: config.imageId,
      sections: config.sections,
      transitionDuration: config.transitionDuration || 1000,
      originalWidth: config.originalWidth || 3508,
      exactZoom: config.exactZoom || false // false means maintain full height (new default)
    };

    this.state = {
      currentSectionIndex: -1,
      isPlaying: false,
      timeoutId: null
    };

    this.initialize();
  }

  initialize() {
    // Get DOM elements
    this.container = document.getElementById(this.config.storyContainerId);
    this.textContainer = document.getElementById(this.config.textContainerId);
    this.controlContainer = document.getElementById(this.config.controlContainerId);
    const originalImg = document.getElementById(this.config.imageId);

    if (!this.container || !this.textContainer || !this.controlContainer || !originalImg) {
      console.error('Required elements not found');
      return;
    }

    // Store the original image map if it exists
    const mapName = originalImg.getAttribute('usemap')?.substring(1);
    this.originalMap = mapName ? document.querySelector(`map[name="${mapName}"]`) : null;

    // Setup SVG wrapper
    this.setupSVGWrapper(originalImg);
    this.setupControls();
    this.startStory();
  }

  setupSVGWrapper(originalImg) {
    if (originalImg.complete) {
      this.createSVGWrapper(originalImg);
    } else {
      originalImg.onload = () => this.createSVGWrapper(originalImg);
    }
  }

  createSVGWrapper(originalImg) {
    const aspectRatio = originalImg.naturalHeight / originalImg.naturalWidth;
    const svgNS = "http://www.w3.org/2000/svg";
    
    // Create SVG element
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "auto");
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    
    // Set initial viewBox
    const viewBoxHeight = this.config.originalWidth * aspectRatio;
    svg.setAttribute("viewBox", `0 0 ${this.config.originalWidth} ${viewBoxHeight}`);

    // Create image element within SVG
    const svgImage = document.createElementNS(svgNS, "image");
    svgImage.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", originalImg.src);
    svgImage.setAttribute("width", this.config.originalWidth);
    svgImage.setAttribute("height", viewBoxHeight);
    svgImage.setAttribute("x", "0");
    svgImage.setAttribute("y", "0");

    // Add image to SVG
    svg.appendChild(svgImage);

    // If we have an image map, create clickable areas in the SVG
    if (this.originalMap) {
      const areas = Array.from(this.originalMap.getElementsByTagName('area'));
      areas.forEach(area => {
        const coords = area.getAttribute('coords').split(',').map(Number);
        const shape = area.getAttribute('shape');
        const href = area.getAttribute('href');
        const title = area.getAttribute('title');
        
        let svgElement;
        if (shape === 'poly') {
          // Create path for polygon
          svgElement = document.createElementNS(svgNS, 'path');
          const pathData = 'M ' + coords.reduce((acc, coord, i) => {
            if (i % 2 === 0) {
              return acc + (i > 0 ? ' L ' : '') + coord;
            }
            return acc + ' ' + coord;
          }, '') + ' Z';
          svgElement.setAttribute('d', pathData);
        } else if (shape === 'rect') {
          // Create rectangle
          svgElement = document.createElementNS(svgNS, 'rect');
          svgElement.setAttribute('x', coords[0]);
          svgElement.setAttribute('y', coords[1]);
          svgElement.setAttribute('width', coords[2] - coords[0]);
          svgElement.setAttribute('height', coords[3] - coords[1]);
        }
        
        if (svgElement) {
          svgElement.setAttribute('fill', 'transparent');
          svgElement.setAttribute('stroke', 'transparent');
          svgElement.setAttribute('cursor', 'pointer');
          svgElement.setAttribute('pointer-events', 'all');
          
          // Add hover effect
          svgElement.addEventListener('mouseenter', () => {
            svgElement.setAttribute('fill', 'rgba(255, 255, 255, 0.2)');
            svgElement.setAttribute('stroke', 'white');
          });
          
          svgElement.addEventListener('mouseleave', () => {
            svgElement.setAttribute('fill', 'transparent');
            svgElement.setAttribute('stroke', 'transparent');
          });
          
          // Add click handler
          svgElement.addEventListener('click', (e) => {
            e.preventDefault();
            if (href) {
              window.open(href, '_blank');
            }
          });
          
          // Add tooltip
          if (title) {
            const titleElement = document.createElementNS(svgNS, 'title');
            titleElement.textContent = title;
            svgElement.appendChild(titleElement);
          }
          
          svg.appendChild(svgElement);
        }
      });
    }

    // Replace original image with SVG
    originalImg.parentNode.replaceChild(svg, originalImg);

    // Store reference to SVG element
    this.svg = svg;
    this.svgImage = svgImage;
    this.viewBoxHeight = viewBoxHeight;
    
    // Remove the original map since we're now using SVG elements
    if (this.originalMap) {
      this.originalMap.remove();
    }
  }

  setupControls() {
    // Create control buttons
    const prevButton = document.createElement('button');
    const playPauseButton = document.createElement('button');
    const nextButton = document.createElement('button');

    prevButton.innerHTML = '⏮ Previous';
    playPauseButton.innerHTML = '⏵ Play';
    nextButton.innerHTML = 'Next ⏭';

    // Add classes for styling
    prevButton.className = 'story-control';
    playPauseButton.className = 'story-control';
    nextButton.className = 'story-control';

    // Add event listeners
    prevButton.addEventListener('click', () => this.previousSection());
    playPauseButton.addEventListener('click', () => this.togglePlayPause());
    nextButton.addEventListener('click', () => this.nextSection());

    // Store reference to play/pause button
    this.playPauseButton = playPauseButton;

    // Add buttons to control container
    this.controlContainer.appendChild(prevButton);
    this.controlContainer.appendChild(playPauseButton);
    this.controlContainer.appendChild(nextButton);

    // Add basic styles
    const style = document.createElement('style');
    style.textContent = `
      #${this.config.controlContainerId} {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
      }
      .story-control {
        padding: 0.5rem 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: white;
        cursor: pointer;
      }
      .story-control:hover {
        background: #f0f0f0;
      }
      #${this.config.textContainerId} {
        margin: 1rem 0;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 4px;
        position: relative;
        font-size: 16px;
        line-height: 1.5;
        width: 100%;
        box-sizing: border-box;
      }
      
      #${this.config.textContainerId} h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      
      #${this.config.textContainerId} p {
        font-size: 1rem;
        margin: 0;
      }
    `;
    document.head.appendChild(style);
  }

  startStory() {
    // Show full image first
    this.showSection(-1);
    // Start autoplay after a delay
    setTimeout(() => {
      this.togglePlayPause();
    }, 1000);
  }

  showSection(index) {
    this.state.currentSectionIndex = index;

    if (!this.svg) {
      console.error('SVG not initialized');
      return;
    }

    if (index === -1) {
      // Show full image
      this.animateViewBox({
        x: 0,
        y: 0,
        width: this.config.originalWidth,
        height: this.viewBoxHeight
      });
      this.textContainer.innerHTML = '<h3>Overview</h3><p>Click play to start the tour, or click on areas of interest in the image.</p>';
    } else {
      const section = this.config.sections[index];
      
      let targetViewBox;
      if (this.config.exactZoom) {
        // Use exact viewBox from section
        targetViewBox = { ...section.viewBox };
      } else {
        // Calculate new viewBox that maintains proportional height to width
        const originalAspectRatio = this.viewBoxHeight / this.config.originalWidth;
        const targetWidth = section.viewBox.width;
        const targetHeight = targetWidth * originalAspectRatio;
        const targetX = section.viewBox.x;
        const targetY = Math.max(0, section.viewBox.y - (targetHeight - section.viewBox.height) / 2);
        
        targetViewBox = {
          x: targetX,
          y: targetY,
          width: targetWidth,
          height: targetHeight
        };
      }
      
      this.animateViewBox(targetViewBox);
      this.textContainer.innerHTML = section.content;
    }
  }

  animateViewBox(targetViewBox) {
    if (!this.svg) return;

    // Get current viewBox
    const currentViewBox = this.svg.getAttribute('viewBox').split(' ').map(Number);

    const startTime = performance.now();
    const duration = this.config.transitionDuration;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease function (ease-in-out)
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      // Interpolate viewBox values
      const currentX = currentViewBox[0] + (targetViewBox.x - currentViewBox[0]) * eased;
      const currentY = currentViewBox[1] + (targetViewBox.y - currentViewBox[1]) * eased;
      const currentWidth = currentViewBox[2] + (targetViewBox.width - currentViewBox[2]) * eased;
      const currentHeight = currentViewBox[3] + (targetViewBox.height - currentViewBox[3]) * eased;

      this.svg.setAttribute('viewBox', `${currentX} ${currentY} ${currentWidth} ${currentHeight}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  nextSection() {
    const nextIndex = this.state.currentSectionIndex + 1;
    if (nextIndex >= this.config.sections.length) {
      this.showSection(-1); // Loop back to full image
    } else {
      this.showSection(nextIndex);
    }
  }

  previousSection() {
    const prevIndex = this.state.currentSectionIndex - 1;
    this.showSection(prevIndex < -1 ? this.config.sections.length - 1 : prevIndex);
  }

  togglePlayPause() {
    this.state.isPlaying = !this.state.isPlaying;
    this.playPauseButton.innerHTML = this.state.isPlaying ? '⏸ Pause' : '⏵ Play';

    if (this.state.isPlaying) {
      this.play();
    } else {
      this.pause();
    }
  }

  play() {
    const nextSection = () => {
      this.nextSection();
      if (this.state.isPlaying) {
        const currentSection = this.config.sections[this.state.currentSectionIndex];
        this.state.timeoutId = setTimeout(nextSection, currentSection ? currentSection.duration : 5000);
      }
    };

    nextSection();
  }

  pause() {
    if (this.state.timeoutId) {
      clearTimeout(this.state.timeoutId);
      this.state.timeoutId = null;
    }
  }
}

// Make available globally
window.ImageStoryteller = ImageStoryteller;
