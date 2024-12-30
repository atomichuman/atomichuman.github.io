class ImageStoryteller {
  constructor(options) {
    this.containerId = options.containerId;
    this.imageId = options.imageId;
    this.sections = options.sections;
    this.transitionDuration = options.transitionDuration || 1000;
    
    this.container = document.getElementById(this.containerId);
    this.image = document.getElementById(this.imageId);
    
    if (!this.container || !this.image) {
      console.error('Container or image element not found');
      return;
    }
    
    this.currentSection = 0;
    this.isPlaying = false;
    this.setup();
  }

  setup() {
    // Container setup
    this.container.style.position = 'relative';
    this.container.style.overflow = 'hidden';
    
    // Image setup
    this.image.style.transition = `transform ${this.transitionDuration}ms ease-in-out`;
    this.image.style.width = '100%';
    this.image.style.height = 'auto';
    this.image.style.display = 'block';
    
    // Create overlay
    this.overlay = document.createElement('div');
    this.overlay.style.position = 'absolute';
    this.overlay.style.top = '20px';
    this.overlay.style.left = '20px';
    this.overlay.style.right = '20px';
    this.overlay.style.background = 'rgba(255, 255, 255, 0.9)';
    this.overlay.style.padding = '20px';
    this.overlay.style.borderRadius = '8px';
    this.overlay.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    this.overlay.style.zIndex = '1';
    
    // Create controls
    this.controls = document.createElement('div');
    this.controls.style.position = 'absolute';
    this.controls.style.bottom = '20px';
    this.controls.style.left = '0';
    this.controls.style.right = '0';
    this.controls.style.display = 'flex';
    this.controls.style.justifyContent = 'center';
    this.controls.style.gap = '10px';
    this.controls.style.zIndex = '1';
    
    const buttonStyles = `
      padding: 8px 16px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    `;
    
    this.prevButton = document.createElement('button');
    this.prevButton.textContent = 'Previous';
    this.prevButton.style.cssText = buttonStyles;
    this.prevButton.onclick = () => this.prev();
    
    this.playButton = document.createElement('button');
    this.playButton.textContent = 'Play';
    this.playButton.style.cssText = buttonStyles;
    this.playButton.onclick = () => this.togglePlay();
    
    this.nextButton = document.createElement('button');
    this.nextButton.textContent = 'Next';
    this.nextButton.style.cssText = buttonStyles;
    this.nextButton.onclick = () => this.next();
    
    this.controls.appendChild(this.prevButton);
    this.controls.appendChild(this.playButton);
    this.controls.appendChild(this.nextButton);
    
    this.container.appendChild(this.overlay);
    this.container.appendChild(this.controls);
    
    // Initial state
    this.updateContent();
    this.updateTransform();
    
    // Handle window resize
    window.addEventListener('resize', () => this.updateTransform());
  }

  updateTransform() {
    if (this.currentSection >= this.sections.length) return;
    
    const viewBox = this.sections[this.currentSection].viewBox;
    const containerRect = this.container.getBoundingClientRect();
    const imageRect = this.image.getBoundingClientRect();
    
    // Calculate the scale needed to fit the viewBox in the container
    const scaleX = containerRect.width / viewBox.width;
    const scaleY = containerRect.height / viewBox.height;
    const scale = Math.min(scaleX, scaleY);
    
    // Calculate the position to center the viewBox
    const viewBoxCenterX = viewBox.x + (viewBox.width / 2);
    const viewBoxCenterY = viewBox.y + (viewBox.height / 2);
    
    // Calculate the image's current dimensions
    const currentImageWidth = imageRect.width;
    const currentImageHeight = imageRect.height;
    
    // Calculate translations to center the viewBox
    const translateX = -(viewBoxCenterX / this.image.naturalWidth * currentImageWidth - containerRect.width / 2);
    const translateY = -(viewBoxCenterY / this.image.naturalHeight * currentImageHeight - containerRect.height / 2);
    
    // Apply the transform
    this.image.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }

  updateContent() {
    if (this.currentSection < this.sections.length) {
      this.overlay.innerHTML = this.sections[this.currentSection].content;
    }
  }

  prev() {
    if (this.currentSection > 0) {
      this.currentSection--;
      this.updateContent();
      this.updateTransform();
    }
  }

  next() {
    if (this.currentSection < this.sections.length - 1) {
      this.currentSection++;
      this.updateContent();
      this.updateTransform();
    }
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    this.playButton.textContent = this.isPlaying ? 'Pause' : 'Play';
    if (this.isPlaying) {
      this.play();
    }
  }

  play() {
    if (!this.isPlaying) return;
    
    if (this.currentSection < this.sections.length - 1) {
      setTimeout(() => {
        this.next();
        this.play();
      }, this.sections[this.currentSection].duration || 5000);
    } else {
      this.isPlaying = false;
      this.playButton.textContent = 'Play';
    }
  }
}

// Make available globally
window.ImageStoryteller = ImageStoryteller;
