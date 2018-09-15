import {waitUntilFinished} from "./wait-until-finished.js";

export async function animation(image) {
  const rotate = image.animate(
    [
      {'transform': 'rotate(0deg)'},
      {'transform': 'rotate(720deg)'},
    ], {
      duration: 1000,
    }
  );
  await waitUntilFinished(rotate);

  const move = image.animate(
    [
      {'transform': 'translateY(0px)'},
      {'transform': 'translateY(200px)'},
      {'transform': 'translateY(0px)'},
    ], {
      duration: 1000,
      easing: 'ease-in-out'
    });
  await waitUntilFinished(move);
}