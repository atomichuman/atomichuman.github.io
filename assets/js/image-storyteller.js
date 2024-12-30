class ImageStoryteller {
  constructor(container, options) {
    this.container = container;
    this.options = {
      imageSrc: options.imageSrc,
      sections: options.sections,
      initialDelay: options.initialDelay || 1000,
      transitionDuration: options.transitionDuration || 1000
    };
    
    this.currentSection = 0;
    this.isPlaying = false;
    this.setup();
  }

  setup() {
    // Set container style
    this.container.style.position = 'relative';
    this.container.style.overflow = 'hidden';
    
    // Create image container
    this.imageWrapper = document.createElement('div');
    this.imageWrapper.style.position = 'relative';
    this.imageWrapper.style.width = '100%';
    this.imageWrapper.style.height = '100%';
    
    // Create and setup image
    this.image = document.createElement('img');
    this.image.src = this.options.imageSrc;
    this.image.style.width = '100%';
    this.image.style.height = 'auto';
    this.image.style.transition = `transform ${this.options.transitionDuration}ms ease-in-out`;
    
    // Create content overlay
    this.overlay = document.createElement('div');
    this.overlay.style.position = 'absolute';
    this.overlay.style.top = '20px';
    this.overlay.style.left = '20px';
    this.overlay.style.right = '20px';
    this.overlay.style.background = 'rgba(255, 255, 255, 0.9)';
    this.overlay.style.padding = '20px';
    this.overlay.style.borderRadius = '8px';
    this.overlay.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    
    // Create controls
    this.controls = document.createElement('div');
    this.controls.style.position = 'absolute';
    this.controls.style.bottom = '20px';
    this.controls.style.left = '0';
    this.controls.style.right = '0';
    this.controls.style.display = 'flex';
    this.controls.style.justifyContent = 'center';
    this.controls.style.gap = '10px';
    
    // Create buttons
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
    
    // Assemble DOM
    this.controls.appendChild(this.prevButton);
    this.controls.appendChild(this.playButton);
    this.controls.appendChild(this.nextButton);
    
    this.imageWrapper.appendChild(this.image);
    this.container.appendChild(this.imageWrapper);
    this.container.appendChild(this.overlay);
    this.container.appendChild(this.controls);
    
    // Initial content update
    this.updateContent();
    this.updateTransform();
    
    // Handle window resize
    window.addEventListener('resize', () => this.updateTransform());
  }

  updateContent() {
    if (this.currentSection < this.options.sections.length) {
      this.overlay.innerHTML = this.options.sections[this.currentSection].content;
    }
  }

  updateTransform() {
    if (this.currentSection >= this.options.sections.length) return;
    
    const viewBox = this.options.sections[this.currentSection].viewBox;
    const containerRect = this.container.getBoundingClientRect();
    const imageRect = this.image.getBoundingClientRect();
    
    // Calculate scale
    const scaleX = containerRect.width / viewBox.width;
    const scaleY = containerRect.height / viewBox.height;
    const scale = Math.min(scaleX, scaleY);
    
    // Calculate translation
    const translateX = -viewBox.x + (containerRect.width - viewBox.width * scale) / (2 * scale);
    const translateY = -viewBox.y + (containerRect.height - viewBox.height * scale) / (2 * scale);
    
    // Apply transform
    this.image.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }

  prev() {
    if (this.currentSection > 0) {
      this.currentSection--;
      this.updateContent();
      this.updateTransform();
    }
  }

  next() {
    if (this.currentSection < this.options.sections.length - 1) {
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
    
    if (this.currentSection < this.options.sections.length - 1) {
      setTimeout(() => {
        this.next();
        this.play();
      }, this.options.sections[this.currentSection].duration || 5000);
    } else {
      this.isPlaying = false;
      this.playButton.textContent = 'Play';
    }
  }
}

// Make available globally
window.ImageStoryteller = ImageStoryteller;
