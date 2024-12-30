import React, { useState, useEffect } from 'react';

const ImageStoryteller = ({ imageSrc, sections, initialDelay = 1000, transitionDuration = 1000 }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlaying && currentSection < sections.length - 1) {
      timer = setTimeout(() => {
        setCurrentSection(prev => prev + 1);
      }, sections[currentSection].duration);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentSection, sections]);

  const calculateTransform = () => {
    if (!sections[currentSection]) return '';
    const viewBox = sections[currentSection].viewBox;
    const scale = Math.min(
      1,
      window.innerWidth / viewBox.width,
      window.innerHeight / viewBox.height
    );
    return `scale(${scale}) translate(${-viewBox.x}px, ${-viewBox.y}px)`;
  };

  return (
    <div className="w-full h-96 relative overflow-hidden bg-gray-200 rounded-lg">
      <div 
        className="absolute inset-0 transition-transform duration-1000"
        style={{ transform: calculateTransform() }}
      >
        <img
          src={imageSrc}
          alt="Story image"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute top-4 left-4 right-4 bg-white/80 p-4 rounded shadow-lg">
        <div dangerouslySetInnerHTML={{ 
          __html: sections[currentSection]?.content || '' 
        }} />
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        <button
          onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
          disabled={currentSection === 0}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
          disabled={currentSection === sections.length - 1}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageStoryteller;
