// Function to handle horizontal scroll with the mouse wheel
function transformScroll(event) {
  if (!event.deltaY) {
    return;
  }
 
 
  // Scroll horizontally based on mouse wheel input
  event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
  event.preventDefault();
 }
 
 
 // Add the horizontal scroll functionality when the document is ready
 var element = document.scrollingElement || document.documentElement;
 element.addEventListener('wheel', transformScroll);
 
 
 // Wait until the DOM content is fully loaded
 document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("groove");
  const overlay = document.getElementById("groove-overlay");
 
 
  // Show overlay when the video is clicked
  video.addEventListener("click", () => {
      overlay.classList.add("active");
  });
 
 
  // Hide overlay when clicked on the overlay
  overlay.addEventListener("click", () => {
      overlay.classList.remove("active");
  });
 });
 