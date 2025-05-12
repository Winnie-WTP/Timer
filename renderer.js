// Handle Close Button Click
document.getElementById('close-btn').addEventListener('click', () => {
    console.log('Close button clicked');
    window.electron.closeWindow(); // Use the exposed API from preload.js
});

// Handle Minimize Button Click
document.getElementById('shrink-btn').addEventListener('click', () => {
    console.log('Minimize button clicked');
    window.electron.minimizeWindow(); // Use the exposed API from preload.js
});