export function animation(image) {
  return image.animate(
    [
      {'opacity': 1},
      {'opacity': 0},
      {'opacity': 1},
    ], {
      duration: 1000
    });
}