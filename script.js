// Create Falling Snow ❄
function createSnow() {
  const snow = document.createElement("div");
  snow.classList.add("snowflake");
  snow.innerHTML = "❄";

  snow.style.left = Math.random() * 100 + "vw";
  snow.style.animationDuration = (Math.random() * 4 + 3) + "s";
  snow.style.fontSize = (Math.random() * 14 + 10) + "px";

  document.querySelector(".snow-container").appendChild(snow);

  setTimeout(() => snow.remove(), 7000);
}

setInterval(createSnow, 120);
