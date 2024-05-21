const rotatingImage = document.getElementById('rotating-image');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
let rotation = 0;
leftButton.addEventListener('click', () => {
  rotation -= 90;
  rotatingImage.style.transform = `rotate(${rotation}deg)`;
});
rightButton.addEventListener('click', () => {
  rotation += 90;
  rotatingImage.style.transform = `rotate(${rotation}deg)`;
});