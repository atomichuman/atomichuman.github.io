// File: assets/js/image-storyteller.js

class ImageStoryteller {
  constructor(config) {
    this.config = {
      storyContainerId: config.storyContainerId,
      textContainerId: config.textContainerId,
      controlContainerId: config.controlContainerId,
      imageId: config.imageId,
      sections: config.sections,
      transitionDuration: config.transitionDuration || 1000,
      originalWidth: config.originalWidth || 3508
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

    // Create SVG wrapper
    this.setupSVGWrapper(originalImg);
    this.setupControls();
    this.startStory();
  }

  setupSVGWrapper(originalImg) {
    // Wait for the original image to load to get its dimensions
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

    // Copy original image's usemap attribute if it exists
    if (originalImg.getAttribute("usemap")) {
      svgImage.setAttribute("usemap", originalImg.getAttribute("usemap"));
    }

    // Add image to SVG
    svg.appendChild(svgImage);

    // Replace original image with SVG
    originalImg.parentNode.replaceChild(svg, originalImg);

    // Store reference to SVG element
    this.svg = svg;
    this.svgImage = svgImage;
    this.viewBoxHeight = viewBoxHeight;
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
      this.animateViewBox(section.viewBox);
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
