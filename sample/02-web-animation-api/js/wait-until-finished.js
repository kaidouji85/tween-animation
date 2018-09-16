export function waitUntilFinished(animation) {
  return new Promise(resolve => {
    animation.onfinish = () => resolve();
  });
}