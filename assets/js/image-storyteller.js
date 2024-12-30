// Linear interpolation helper
const lerp = (start, end, t) => start * (1 - t) + end * t;

class ImageStoryteller {
  constructor(container, options) {
    this.container = container;
    this.options = {
      initialDelay: 1000,
      transitionDuration: 1000,
      ...options
    };
    
    this.currentSection = 0;
    this.isPlaying = false;
    this.lastTransitionTime = Date.now();
    this.setup();
  }

  setup() {
    // Create DOM structure
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'w-full h-full relative overflow-hidden';
    
    this.imageContainer = document.createElement('div');
    this.imageContainer.className = 'absolute inset-0 transition-transform duration-1000';
    
    this.image = document.createElement('img');
    this.image.src = this.options.imageSrc;
    this.image.className = 'w-full h-auto';
    
    this.imageContainer.appendChild(this.image);
    this.wrapper.appendChild(this.imageContainer);
    
    // Add controls
    this.createControls();
    
    // Add content overlay
    this.createContentOverlay();
    
    // Replace container contents
    this.container.innerHTML = '';
    this.container.appendChild(this.wrapper);
    
    // Start animation loop
    this.animate();
  }

  createControls() {
    const controls = document.createElement('div');
    controls.className = 'absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10';
    
    const prevButton = document.createElement('button');
    prevButton.className = 'px-4 py-2 bg-gray-800 text-white rounded';
    prevButton.textContent = 'Previous';
    prevButton.onclick = () => this.navigate(Math.max(0, this.currentSection - 1));
    
    const playButton = document.createElement('button');
    playButton.className = 'px-4 py-2 bg-gray-800 text-white rounded';
    playButton.textContent = 'Play';
    playButton.onclick = () => this.togglePlay();
    
    const nextButton = document.createElement('button');
    nextButton.className = 'px-4 py-2 bg-gray-800 text-white rounded';
    nextButton.textContent = 'Next';
    nextButton.onclick = () => this.navigate(Math.min(this.options.sections.length - 1, this.currentSection + 1));
    
    controls.appendChild(prevButton);
    controls.appendChild(playButton);
    controls.appendChild(nextButton);
    this.wrapper.appendChild(controls);
  }

  createContentOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'absolute top-4 left-4 right-4 bg-white/80 p-4 rounded shadow-lg';
    this.wrapper.appendChild(this.overlay);
    this.updateContent();
  }

  updateContent() {
    if (this.currentSection < this.options.sections.length) {
      this.overlay.innerHTML = this.options.sections[this.currentSection].content;
    }
  }

  calculateTransform() {
    if (!this.image || this.currentSection >= this.options.sections.length) return '';
    
    const container = this.wrapper.getBoundingClientRect();
    const image = this.image.getBoundingClientRect();
    
    const currentViewBox = this.options.sections[this.currentSection].viewBox;
    const nextViewBox = this.options.sections[Math.min(this.currentSection + 1, this.options.sections.length - 1)].viewBox;
    
    const transitionProgress = Math.min((Date.now() - this.lastTransitionTime) / this.options.transitionDuration, 1);
    
    const section = {
      x: lerp(currentViewBox.x, nextViewBox.x, transitionProgress),
      y: lerp(currentViewBox.y, nextViewBox.y, transitionProgress),
      width: lerp(currentViewBox.width, nextViewBox.width, transitionProgress),
      height: lerp(currentViewBox.height, nextViewBox.height, transitionProgress)
    };
    
    const scaleX = container.width / section.width;
    const scaleY = container.height / section.height;
    const scale = Math.min(scaleX, scaleY);
    
    const translateX = -section.x + (container.width - section.width * scale) / (2 * scale);
    const translateY = -section.y + (container.height - section.height * scale) / (2 * scale);
    
    return `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }

  animate() {
    this.imageContainer.style.transform = this.calculateTransform();
    requestAnimationFrame(() => this.animate());
  }

  navigate(newSection) {
    this.lastTransitionTime = Date.now();
    this.currentSection = newSection;
    this.updateContent();
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.play();
    }
  }

  play() {
    if (this.isPlaying && this.currentSection < this.options.sections.length - 1) {
      setTimeout(() => {
        this.navigate(this.currentSection + 1);
        this.play();
      }, this.options.sections[this.currentSection].duration || 5000);
    }
  }
}

// Make available globally
window.ImageStoryteller = ImageStoryteller;
