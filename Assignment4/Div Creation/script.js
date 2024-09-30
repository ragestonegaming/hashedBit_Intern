document.addEventListener('DOMContentLoaded', function () {
    function createDiv(width, height, text) {
        // Create a new div element
        const newDiv = document.createElement('div');
        
        // Set width and height as inline styles
        newDiv.style.width = width + 'px';
        newDiv.style.height = height + 'px';
        
        // Set the text content inside the div
        newDiv.textContent = text;
        
        // Append the new div to the container
        const container = document.getElementById('container');
        if (container) {
            container.appendChild(newDiv);
        } else {
            console.error('Container not found!');
        }
    }

    // Attach the function to the global window object
    window.createDiv = createDiv;
    
});
