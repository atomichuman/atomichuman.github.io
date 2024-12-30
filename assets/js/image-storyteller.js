
class ImageStoryteller {
  constructor(config) {
    this.config = {
      storyContainerId: config.storyContainerId,
      textContainerId: config.textContainerId,
      controlContainerId: config.controlContainerId,
      imageId: config.imageId,
      sections: config.sections.map(section => ({
        ...section,
        textPosition: section.textPosition || 'center' // Default to center if not specified
      })),
      transitionDuration: config.transitionDuration || 1000,
      originalWidth: config.originalWidth || 3508,
      exactZoom: config.exactZoom || false
    };

    this.state = {
      currentSectionIndex: -1,
      isPlaying: false,
      timeoutId: null,
      isTextVisible: true
    };

    // Initialize after setting up config and state
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

    // Make container position relative for absolute positioning
    this.container.style.position = 'relative';

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

    // Handle image map if it exists
    if (this.originalMap) {
      this.handleImageMap(svg, svgNS);
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

  handleImageMap(svg, svgNS) {
    const areas = Array.from(this.originalMap.getElementsByTagName('area'));
    areas.forEach(area => {
      const coords = area.getAttribute('coords').split(',').map(Number);
      const shape = area.getAttribute('shape');
      const href = area.getAttribute('href');
      const title = area.getAttribute('title');
      
      let svgElement;
      if (shape === 'poly') {
        svgElement = this.createPolygon(svgNS, coords);
      } else if (shape === 'rect') {
        svgElement = this.createRectangle(svgNS, coords);
      }
      
      if (svgElement) {
        this.setupSVGElement(svgElement, svgNS, href, title);
        svg.appendChild(svgElement);
      }
    });
  }

  createPolygon(svgNS, coords) {
    const svgElement = document.createElementNS(svgNS, 'path');
    const pathData = 'M ' + coords.reduce((acc, coord, i) => {
      if (i % 2 === 0) {
        return acc + (i > 0 ? ' L ' : '') + coord;
      }
      return acc + ' ' + coord;
    }, '') + ' Z';
    svgElement.setAttribute('d', pathData);
    return svgElement;
  }

  createRectangle(svgNS, coords) {
    const svgElement = document.createElementNS(svgNS, 'rect');
    svgElement.setAttribute('x', coords[0]);
    svgElement.setAttribute('y', coords[1]);
    svgElement.setAttribute('width', coords[2] - coords[0]);
    svgElement.setAttribute('height', coords[3] - coords[1]);
    return svgElement;
  }

  setupSVGElement(svgElement, svgNS, href, title) {
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
    if (href) {
      svgElement.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(href, '_blank');
      });
    }
    
    // Add tooltip
    if (title) {
      const titleElement = document.createElementNS(svgNS, 'title');
      titleElement.textContent = title;
      svgElement.appendChild(titleElement);
    }
  }

  setupControls() {
    // Create wrapper div for SVG
    const svgWrapper = document.createElement('div');
    svgWrapper.className = 'svg-wrapper';
    svgWrapper.style.position = 'relative';
    
    // Move SVG into wrapper
    if (this.svg) {
      const parent = this.svg.parentNode;
      svgWrapper.appendChild(this.svg);
      parent.appendChild(svgWrapper);
    }

    // Set up text container styles
    this.setupTextContainer();

    // Create and setup all control buttons
    this.setupControlButtons(svgWrapper);

    // Add styles
    this.addStyles();

    // Move text container into SVG wrapper for proper positioning
    svgWrapper.appendChild(this.textContainer);
  }

  setupTextContainer() {
    this.textContainer.style.position = 'absolute';
    this.textContainer.style.zIndex = '10';
    this.textContainer.style.maxWidth = '80%';
    this.textContainer.style.background = 'rgba(255, 255, 255, 0.9)';
    this.textContainer.style.padding = '20px';
    this.textContainer.style.borderRadius = '8px';
    this.textContainer.style.fontSize = '16px';
    this.textContainer.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
  }

  updateTextPosition(position) {
    // Reset all positioning styles
    this.textContainer.style.left = '';
    this.textContainer.style.right = '';
    this.textContainer.style.top = '';
    this.textContainer.style.bottom = '';
    this.textContainer.style.transform = '';

    switch (position) {
      case 'top':
        this.textContainer.style.left = '50%';
        this.textContainer.style.top = '20px';
        this.textContainer.style.transform = 'translateX(-50%)';
	this.textContainer.style.width='100%';
        break;
      case 'bottom':
        this.textContainer.style.left = '50%';
        this.textContainer.style.bottom = '20px';
        this.textContainer.style.transform = 'translateX(-50%)';
	this.textContainer.style.width='100%';
        break;
      case 'left':
        this.textContainer.style.left = '20px';
        this.textContainer.style.top = '50%';
        this.textContainer.style.transform = 'translateY(-50%)';
        break;
      case 'right':
        this.textContainer.style.right = '20px';
        this.textContainer.style.top = '50%';
        this.textContainer.style.transform = 'translateY(-50%)';
        break;
      case 'center':
      default:
        this.textContainer.style.left = '50%';
        this.textContainer.style.top = '50%';
        this.textContainer.style.transform = 'translate(-50%, -50%)';
        break;
    }
  }

  setupControlButtons(svgWrapper) {
    // Create toggle text button
    const toggleTextButton = document.createElement('button');
    toggleTextButton.innerHTML = '👁️ Hide Text';
    toggleTextButton.className = 'story-control toggle-text';
    toggleTextButton.style.position = 'absolute';
    toggleTextButton.style.top = '10px';
    toggleTextButton.style.right = '10px';
    toggleTextButton.style.zIndex = '20';
    toggleTextButton.addEventListener('click', () => this.toggleText());
    
    // Create navigation buttons
    const prevButton = document.createElement('button');
    const playPauseButton = document.createElement('button');
    const nextButton = document.createElement('button');

    prevButton.innerHTML = '⏮ Previous';
    playPauseButton.innerHTML = '⏵ Play';
    nextButton.innerHTML = 'Next ⏭';

    prevButton.className = 'story-control';
    playPauseButton.className = 'story-control';
    nextButton.className = 'story-control';

    prevButton.addEventListener('click', () => this.previousSection());
    playPauseButton.addEventListener('click', () => this.togglePlayPause());
    nextButton.addEventListener('click', () => this.nextSection());

    this.playPauseButton = playPauseButton;

    // Create control container
    const navigationControls = document.createElement('div');
    navigationControls.className = 'navigation-controls';
    navigationControls.style.display = 'flex';
    navigationControls.style.justifyContent = 'center';
    navigationControls.style.gap = '1rem';
    navigationControls.style.marginTop = '1rem';
    
    navigationControls.appendChild(prevButton);
    navigationControls.appendChild(playPauseButton);
    navigationControls.appendChild(nextButton);

    // Add all elements to the control container
    this.controlContainer.appendChild(toggleTextButton);
    this.controlContainer.appendChild(navigationControls);
  }

  addStyles() {
    const style = document.createElement('style');
    style.textContent = `
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
      .toggle-text {
        opacity: 0.9;
      }
      #${this.config.textContainerId} h3 {
        font-size: 1.5rem;
        margin: 0 0 1rem 0;
      }
      #${this.config.textContainerId} p {
        font-size: 1rem;
        margin: 0;
        line-height: 1.5;
      }
    `;
    document.head.appendChild(style);
  }

  toggleText() {
    this.state.isTextVisible = !this.state.isTextVisible;
    this.textContainer.style.display = this.state.isTextVisible ? 'block' : 'none';
    const toggleButton = this.controlContainer.querySelector('.toggle-text');
    toggleButton.innerHTML = this.state.isTextVisible ? '👁️ Hide Text' : '👁️ Show Text';
  }

  startStory() {
    this.showSection(-1);
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
      this.animateViewBox({
        x: 0,
        y: 0,
        width: this.config.originalWidth,
        height: this.viewBoxHeight
      });
      this.textContainer.innerHTML = '<h3>Overview</h3><p>Click play to start the tour, or click on areas of interest in the image.</p>';
      this.updateTextPosition('center');
    } else {
      const section = this.config.sections[index];
      
      let targetViewBox;
      if (this.config.exactZoom) {
        targetViewBox = { ...section.viewBox };
      } else {
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
      this.updateTextPosition(section.textPosition);
    }
  }

  animateViewBox(targetViewBox) {
    if (!this.svg) return;

    const currentViewBox = this.svg.getAttribute('viewBox').split(' ').map(Number);
    const startTime = performance.now();
    const duration = this.config.transitionDuration;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

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
      this.showSection(-1);
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
