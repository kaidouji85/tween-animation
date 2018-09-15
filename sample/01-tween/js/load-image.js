/**
 * キャンバス用に画像を読み込む
 *
 * @param {string} src 画像のパス
 * @return {Promise<Image>} 画像
 */
export function loadImage(src) {
  return new Promise(resolve => {
    const image = new Image();
    image.src = src;
    image.onload = () => resolve(image);
  });
}