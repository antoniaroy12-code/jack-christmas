// Play button for music
const btn = document.getElementById("playBtn");
const music = document.getElementById("bgMusic");
btn.addEventListener("click", () => {
  music.play();
  btn.style.display = "none";
});

// Popup Zoom
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
document.querySelectorAll(".zoom").forEach(img => {
  img.addEventListener("click", () => {
    popupImg.src = img.src;
    popup.style.display = "flex";
  });
});
popup.addEventListener("click", () => popup.style.display = "none");
