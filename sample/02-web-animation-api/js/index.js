import {animation} from "./animation.js";

async function main() {
  const image1 = document.querySelector('.image01') || document.createElement("img");
  const image2 = document.querySelector('.image02') || document.createElement("img");
  const image3 = document.querySelector('.image03') || document.createElement("img");

  await animation(image1);
  await animation(image2);
  await animation(image3);
}

window.onload = () => {
  main();
};