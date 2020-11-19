import audioSrc from '../sounds/tink.wav';

export default function playSound() {
  const audio = new Audio();
  audio.src = audioSrc;
  audio.currentTime = 0;
  audio.play();
}
