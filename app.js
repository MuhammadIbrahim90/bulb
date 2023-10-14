// script.js
const bulb = document.getElementById('bulb');

bulb.addEventListener('mouseenter', () => {
    bulb.src = 'nnn.png'; // Change the image source on hover
});

bulb.addEventListener('mouseleave', () => {
    bulb.src = 'fff.png'; // Restore the original image source on mouseout
});
