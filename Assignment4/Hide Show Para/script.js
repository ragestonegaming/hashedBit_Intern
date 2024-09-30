// your js code goes here
function toggleVisibility() {
    // Get the paragraph element by its id
const paragraph = document.getElementById('useless-paragraph');

// Check if the paragraph is currently visible
if (paragraph.style.display === 'none') {
    // If it's hidden, make it visible
    paragraph.style.display = 'block';
} else {
    // If it's visible, hide it
    paragraph.style.display = 'none';
}
}