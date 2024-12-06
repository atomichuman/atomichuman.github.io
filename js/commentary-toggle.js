// Place this in assets/js/commentary-toggle.js
function createCommentaryToggle(rootElement, commentaryContent) {
  // Create the toggle button container
  const toggleContainer = document.createElement('div');
  toggleContainer.className = 'flex items-center gap-4 mb-4 mt-8';
  
  // Create the toggle button
  const toggleButton = document.createElement('button');
  toggleButton.className = 'px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors';
  toggleButton.textContent = 'Show Commentary';
  
  // Create the prompt text
  const promptText = document.createElement('p');
  promptText.className = 'text-sm text-gray-500 italic';
  promptText.textContent = 'Click to see what the machine says about the image and the book';
  
  // Create the commentary container (initially hidden)
  const commentaryContainer = document.createElement('div');
  commentaryContainer.className = 'hidden mt-4 p-6 bg-white rounded-lg shadow-md';
  commentaryContainer.innerHTML = `
    <h2 class="text-xl font-semibold mb-4">Commentary from ChatGPT</h2>
    <div class="prose max-w-none">
      ${commentaryContent}
    </div>
  `;
  
  // Add toggle functionality
  toggleButton.addEventListener('click', () => {
    const isHidden = commentaryContainer.classList.contains('hidden');
    if (isHidden) {
      commentaryContainer.classList.remove('hidden');
      toggleButton.textContent = 'Hide Commentary';
      toggleButton.className = 'px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors';
      promptText.classList.add('hidden');
    } else {
      commentaryContainer.classList.add('hidden');
      toggleButton.textContent = 'Show Commentary';
      toggleButton.className = 'px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors';
      promptText.classList.remove('hidden');
    }
  });
  
  // Assemble the elements
  toggleContainer.appendChild(toggleButton);
  toggleContainer.appendChild(promptText);
  rootElement.appendChild(toggleContainer);
  rootElement.appendChild(commentaryContainer);
}
