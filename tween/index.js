function loadImage(src) {
  return new Promise(resolve => {
    const image = new Image();
    image.src = src;
    image.onload = () => resolve(image);
  });
}

async function main() {
  const canvas = document.querySelector('.main-canvas') || document.createElement('canvas');
  const context = canvas.getContext('2d');
  const image = await loadImage('./image.png');
  context.drawImage(image, 0, 0);
}

window.onload = () => {
  main();
};