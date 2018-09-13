import {loadImage} from "./load-image.js";

function animation(pos) {
  return new TWEEN.Tween(pos)
    .to({x: 300, y: 300});
}

async function main() {
  const canvas = document.querySelector('.main-canvas') || document.createElement('canvas');
  const context = canvas.getContext('2d');
  const image = await loadImage('/image/image.png');
  const pos = {x: 0, y: 0};

  const tween = animation(pos);
  tween.start();

  const gameLoop = time => {
    requestAnimationFrame(gameLoop);
    TWEEN.update(time);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, pos.x, pos.y);
  };
  requestAnimationFrame(gameLoop);
}

window.onload = () => {
  main();
};