import {loadImage} from "./load-image.js";

/** メイン処理 */
async function main() {
  const canvas = document.querySelector('.main-canvas') || document.createElement('canvas');
  const context = canvas.getContext('2d');
  const image = await loadImage('./image/image.png');
  const pos = {x: 0, y: 0};

  const gameLoop = time => {
    requestAnimationFrame(gameLoop);
    pos.x += 4;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, pos.x, pos.y);
  };
  requestAnimationFrame(gameLoop);
}

window.onload = () => {
  main();
};