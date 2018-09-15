import {animation} from "./animation.js";
import {waitUntilFinished} from "./wait-until-finished.js";

async function main() {
  const image1 = document.querySelector('.image01') || document.createElement("img");
  const image2 = document.querySelector('.image02') || document.createElement("img");
  const image3 = document.querySelector('.image03') || document.createElement("img");

  const a1 = animation(image1);
  a1.play();
  await waitUntilFinished(a1);

  const a2 = animation(image2);
  a2.play();
  await waitUntilFinished(a2);

  const a3 = animation(image3);
  a3.play();
  await waitUntilFinished(a3);
}

window.onload = () => {
  main();
};