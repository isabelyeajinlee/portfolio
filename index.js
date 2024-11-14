
document.addEventListener("scroll", () => {
    const images = document.querySelectorAll(".image-container");

    images.forEach((image, index) => {
        const imageTop = image.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 2; 

        if (imageTop < triggerPoint) {
            image.classList.add("visible"); 
        } else {
            image.classList.remove("visible"); 
        }
    });
});
// Get the elements
const slideButton = document.getElementById('slideButton');
const container = document.querySelector('.container');

// Function to toggle the sliding effect
function toggleSlide() {
    container.classList.toggle('shifted'); // Toggle the class to move the screen
}

// Add event listener to the button
slideButton.addEventListener('click', toggleSlide);
