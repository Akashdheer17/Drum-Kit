// Function to play sound based on button key
function playSound(key) {
  const button = document.querySelector("." + key);

  if (button) {
    button.style.color = "white";
    setTimeout(() => {
      button.style.color = "";
    }, 200);

    const bgImage = window.getComputedStyle(button).backgroundImage;
    console.log("Full BG Image:", bgImage);

    const imageName = bgImage.split('/').pop().replace(/["')]/g, "");
    console.log("Extracted image name:", imageName);

    const audioName = imageName.replace(".png", ".mp3");
    console.log("Final audio file name:", audioName);

    const audio = new Audio("./sounds/" + audioName);
    audio.play().catch(err => console.log("Audio play error:", err));
  }
}

// Mouse click event
document.querySelectorAll(".drum").forEach(button => {
  button.addEventListener("click", () => {
    const key = button.innerHTML.toLowerCase();
    playSound(key);
  });
});

// Keyboard press event
document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  playSound(key);
});
