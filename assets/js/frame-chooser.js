const { useState, useRef } = React;

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

const ImageWorkspace = () => {
  const [imageData, setImageData] = useState(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

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
    const coords = getImageCoordinates(e.clientX, e.clientY);
    console.log('Image coordinates:', coords);
  };

  if (!imageData) {
    return <ImageSelector onImageSelected={handleImageSelected} />;
  }

  return (
    <>
      <div 
        ref={containerRef}
        className="w-full h-full flex items-center justify-center overflow-auto"
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