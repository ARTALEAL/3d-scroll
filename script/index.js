//3D scroll

const zSpacing = -1000;
let lastPos = zSpacing / 4;
const $frames = document.getElementsByClassName('frame');
const frames = Array.from($frames);
const zVals = [];

window.onscroll = function () {
  let top = document.documentElement.scrollTop;
  let delta = lastPos - top;
  lastPos = top;

  frames.forEach((n, i) => {
    zVals.push(i * zSpacing + zSpacing);
    zVals[i] += delta * -5.4;
    let frame = frames[i];
    let transform = `translateZ(${zVals[i]}px)`;
    let opacity = zVals[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0;
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
  });
};

window.scrollTo(0, 1);

// Audio

const soundButton = document.querySelector('.sound-button');
const audio = document.querySelector('.audio');

soundButton.addEventListener('click', () => {
  soundButton.classList.toggle('paused');
  audio.paused ? audio.play() : audio.pause();
});

// Audio play logic in browser
window.onfocus = function () {
  soundButton.classList.contains('paused') ? audio.pause() : audio.play();
};

window.onblur = function () {
  audio.pause();
};
