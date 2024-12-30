// File: assets/js/responsive-image-map.js

class ResponsiveImageMap {
  constructor(config) {
    this.imageId = config.imageId;
    this.mapName = config.mapName;
    this.originalWidth = config.originalWidth;
    this.debug = config.debug || false;
    
    this.initialize();
  }

  log(...args) {
    if (this.debug) {
      console.log(`[ResponsiveImageMap: ${this.imageId}]`, ...args);
    }
  }

  error(...args) {
    console.error(`[ResponsiveImageMap: ${this.imageId}]`, ...args);
  }

  initialize() {
    this.img = document.getElementById(this.imageId);
    if (!this.img) {
      this.error('Image element not found');
      return;
    }

    this.map = document.querySelector(`map[name="${this.mapName}"]`);
    if (!this.map) {
      this.error('Image map not found');
      return;
    }

    this.setupEventListeners();
    this.log('Initialized');
  }

  setupEventListeners() {
    // Scale on load
    if (this.img.complete) {
      this.scaleImageMap();
    } else {
      this.img.addEventListener('load', () => this.scaleImageMap());
    }

    // Scale on window resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => this.scaleImageMap(), 100);
    });

    // Debug click events if debug is enabled
    if (this.debug) {
      this.map.addEventListener('click', (e) => {
        this.log('Map clicked:', {
          target: e.target,
          coords: e.target.getAttribute('coords'),
          href: e.target.getAttribute('href')
        });
      });
    }
  }

  scaleImageMap() {
    const scale = this.img.offsetWidth / this.originalWidth;
    this.log('Scaling with factor:', scale);

    const areas = this.map.getElementsByTagName('area');
    
    Array.from(areas).forEach((area, index) => {
      try {
        // Store original coordinates if not already stored
        if (!area.getAttribute('data-original-coords')) {
          const originalCoords = area.getAttribute('coords');
          if (!originalCoords) {
            this.error(`No coordinates found for area ${index}`);
            return;
          }
          area.setAttribute('data-original-coords', originalCoords);
        }
        
        const originalCoords = area.getAttribute('data-original-coords');
        
        // Scale coordinates
        const scaledCoords = originalCoords.split(',').map(coord => 
          Math.round(parseFloat(coord) * scale)
        ).join(',');
        
        area.setAttribute('coords', scaledCoords);
        this.log(`Area ${index} scaled:`, { original: originalCoords, scaled: scaledCoords });
      } catch (error) {
        this.error(`Error scaling area ${index}:`, error);
      }
    });
  }
}

// Make available globally
window.ResponsiveImageMap = ResponsiveImageMap;
