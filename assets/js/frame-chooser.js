const { useState, useRef } = React;

// Add new SelectionMode constant
const SelectionMode = {
  NONE: 'none',
  MAP: 'map',
  STORY: 'story'
};

const StartDialog = ({ onNewImage, onLoadExisting }) => {
  const handleLoadFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      // Read the markdown file
      const content = await file.text();
      // Parse the YAML front matter
      const frontMatter = content.split('---')[1];
      const imageData = jsyaml.load(frontMatter);
      
      onLoadExisting({
        suggestedPath: imageData.image.path,
        dimensions: {
          width: imageData.image.width,
          height: imageData.image.height
        },
        existingAreas: imageData.areas || [],
        existingStories: imageData.story_sections || []
      });
    } catch (error) {
      console.error('Error parsing markdown:', error);
      alert('Invalid markdown format');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-center">Image Map Builder</h2>
        
        <div className="space-y-4">
          <button
            onClick={onNewImage}
            className="block w-full p-4 bg-blue-500 text-white rounded hover:bg-blue-600 font-medium"
            type="button"
          >
            Create New Image Map
          </button>
          
          <div className="text-center">
            <label className="block w-full p-4 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 cursor-pointer font-medium">
              Load Existing Markdown
              <input
                type="file"
                accept=".md,.markdown,text/markdown"
                onChange={handleLoadFile}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageSelector = ({ onImageSelected }) => {
  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Create object URL for preview
    const imageUrl = URL.createObjectURL(file);
    
    // Get image dimensions
    const dimensions = await new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight
        });
      };
      img.src = imageUrl;
    });

    // Generate suggested path based on file name
    const fileName = file.name;
    const suggestedPath = `/assets/images/${fileName}`;

    onImageSelected({
      file,
      imageUrl,
      dimensions,
      suggestedPath
    });
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-xl mb-4">Select an image to begin</h2>
      <input 
        type="file" 
        accept="image/*"
        onChange={handleFileSelect}
        className="border p-2"
      />
    </div>
  );
};

const MarkdownPreview = ({ imageData }) => {
  const markdownContent = `---
title: ${imageData.suggestedPath.split('/').pop().replace(/\.[^/.]+$/, '')}
date: ${new Date().toISOString().split('T')[0]}
include_js:
  - /assets/js/image-storyteller.js
image:
  path: ${imageData.suggestedPath}
  width: ${imageData.dimensions.width}
  height: ${imageData.dimensions.height}
transition_duration: 500
areas: []
story_sections: []
---`;

  return (
    <div className="fixed bottom-0 right-0 p-4 bg-white border shadow-lg m-4 max-w-lg">
      <h3 className="font-bold mb-2">Generated Markdown:</h3>
      <pre className="text-sm bg-gray-100 p-2 overflow-auto max-h-48">
        {markdownContent}
      </pre>
      <div className="mt-2 text-sm text-gray-600">
        Save this as a .md file in your _image_maps directory
      </div>
    </div>
  );
};

const PolygonOverlay = ({ points, imageRef }) => {
  if (!points.length) return null;

  const getScreenCoordinates = (point) => {
    const rect = imageRef.current.getBoundingClientRect();
    const scaleX = rect.width / imageRef.current.naturalWidth;
    const scaleY = rect.height / imageRef.current.naturalHeight;
    
    return {
      x: point.x * scaleX,
      y: point.y * scaleY
    };
  };

  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {points.map((point, index) => {
        const screenCoords = getScreenCoordinates(point);
        return (
          <circle
            key={index}
            cx={screenCoords.x}
            cy={screenCoords.y}
            r="4"
            fill="red"
          />
        );
      })}
      {points.length > 1 && (
        <polyline
          points={points
            .map(point => {
              const screenCoords = getScreenCoordinates(point);
              return `${screenCoords.x},${screenCoords.y}`;
            })
            .join(' ')}
          fill="none"
          stroke="red"
          strokeWidth="2"
        />
      )}
    </svg>
  );
};

const ImageWorkspace = () => {
  const [imageData, setImageData] = useState(null);
  const [showStartDialog, setShowStartDialog] = useState(true);
  const [selectionMode, setSelectionMode] = useState(SelectionMode.NONE);
  const [currentPoints, setCurrentPoints] = useState([]);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const handleNewImage = () => {
    setShowStartDialog(false);
  };

  const handleLoadExisting = (data) => {
    setShowStartDialog(false);
    const img = new Image();
    img.onload = () => {
      setImageData({
        imageUrl: img.src,
        dimensions: data.dimensions,
        suggestedPath: data.suggestedPath,
        areas: data.existingAreas,
        stories: data.existingStories
      });
    };
    img.src = data.suggestedPath;
  };

  const handleImageSelected = (data) => {
    setImageData(data);
  };

  const getImageCoordinates = (screenX, screenY) => {
    if (!imageRef.current) return { x: 0, y: 0 };
  
    const rect = imageRef.current.getBoundingClientRect();
    const scaleX = imageData.dimensions.width / rect.width;
    const scaleY = imageData.dimensions.height / rect.height;
  
    return {
      x: Math.round((screenX - rect.left) * scaleX),
      y: Math.round((screenY - rect.top) * scaleY)
    };
  };

  const handleClick = (e) => {
    if (selectionMode === SelectionMode.NONE) return;

    const coords = getImageCoordinates(e.clientX, e.clientY);
    setCurrentPoints(prev => [...prev, coords]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setCurrentPoints([]);
      setSelectionMode(SelectionMode.NONE);
    } else if (e.key === 'Enter' && currentPoints.length >= 3) {
      // Save the polygon based on selection mode
      const newArea = {
        type: selectionMode,
        points: currentPoints
      };
      
      setImageData(prev => ({
        ...prev,
        areas: [...(prev.areas || []), newArea]
      }));
      
      setCurrentPoints([]);
      setSelectionMode(SelectionMode.NONE);
    }
  };

  // Add effect to handle keyboard events
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPoints, selectionMode]);

  if (showStartDialog) {
    return <StartDialog onNewImage={handleNewImage} onLoadExisting={handleLoadExisting} />;
  }

  if (!imageData) {
    return <ImageSelector onImageSelected={handleImageSelected} />;
  }

  return (
    <>
      <div className="fixed top-4 right-4 space-x-2">
        <button
          className={`px-4 py-2 rounded ${selectionMode === SelectionMode.MAP ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectionMode(SelectionMode.MAP)}
        >
          Add Map Area
        </button>
        <button
          className={`px-4 py-2 rounded ${selectionMode === SelectionMode.STORY ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectionMode(SelectionMode.STORY)}
        >
          Add Story Frame
        </button>
      </div>

      <div 
        ref={containerRef}
        className="w-full h-full flex items-center justify-center overflow-auto relative"
      >
        <img
          ref={imageRef}
          src={imageData.imageUrl}
          alt="Workspace"
          className="max-w-full h-auto"
          onClick={handleClick}
          style={{
            objectFit: 'contain',
            maxHeight: '100%'
          }}
        />
        <PolygonOverlay points={currentPoints} imageRef={imageRef} />
      </div>
      <MarkdownPreview imageData={imageData} />
    </>
  );
};

// Mount the React application
const root = ReactDOM.createRoot(document.getElementById('content'));
root.render(
  <React.StrictMode>
    <ImageWorkspace />
  </React.StrictMode>
); 