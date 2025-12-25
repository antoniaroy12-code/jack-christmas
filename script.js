// Snow effect
const snowContainer = document.createElement('div');
snowContainer.classList.add('snow');
document.body.appendChild(snowContainer);

for (let i = 0; i < 80; i++) {
  let snowflake = document.createElement('span');
  snowflake.className = 'snowflake';
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
  snowflake.style.opacity = Math.random();
  snowContainer.appendChild(snowflake);
}

// Gallery zoom effect
const imgs = document.querySelectorAll('.gallery img');
imgs.forEach(img => {
  img.addEventListener('click', () => {
    img.style.transform = img.style.transform === 'scale(1.2)' ? 'scale(1)' : 'scale(1.2)';
  });
});
