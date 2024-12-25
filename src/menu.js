// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select the background music element
  let backgroundMusic = document.querySelector("#background-music");

  // Play background music when the page loads
  if (backgroundMusic) {
    backgroundMusic.volume = 0.5; // Adjust volume
    backgroundMusic.play();
  } else {
    console.error("Background music element not found.");
  }

  // Select the mute button element
  let muteButton = document.getElementById("mute-toggle");

  // Add mute/unmute functionality
  if (muteButton) {
    muteButton.addEventListener("click", () => {
      if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
        muteButton.innerHTML = "Mute Music"; // Update button text
      } else {
        backgroundMusic.muted = true;
        muteButton.innerHTML = "Unmute Music"; // Update button text
      }
    });
  } else {
    console.error("Mute button element not found.");
  }

  // Button functionality for navigation
  document.getElementById("start-btn").addEventListener("click", () => {
    window.location.href = "ingame.html"; // Redirect to the game page
  });

  document.getElementById("how-to-play-btn").addEventListener("click", () => {
    window.location.href = "instruction.html"; // Redirect to the instruction page
  });

  document.getElementById("about-btn").addEventListener("click", () => {
    window.location.href = "about.html"; // Redirect to the about page
  });

  document.getElementById("exit-btn").addEventListener("click", () => {
    if (confirm("Are you sure you want to exit?")) {
      window.close(); // Attempts to close the tab (may not work in all browsers)
    }
  });
});
