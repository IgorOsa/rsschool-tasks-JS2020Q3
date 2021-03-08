import { createDOMElement } from './helpers';

// header
export const header = createDOMElement('header', null, 'header');

// heading
const heading = createDOMElement('h1', 'Gem Puzzle Game', 'heading');
const dataWrapper = createDOMElement('div', null, 'data-wrapper');

// timer
const timer = createDOMElement('div', null, 'timer');
const timerText = createDOMElement('span', 'Timer', 'timer__text');
export const timerData = createDOMElement('span', '00:00', 'timer__data');
timer.append(timerText, timerData);

// counter
const counter = createDOMElement('div', null, 'counter');
const counterText = createDOMElement('span', 'Moves', 'counter__text');
export const counterData = createDOMElement('span', '0', 'counter__data');

counter.append(counterText, counterData);

// pause btn
export const btnPause = createDOMElement('div', 'Pause', 'btn-pause', null, true);
header.appendChild(btnPause);

// sound on/off icon
export const btnSound = createDOMElement('div', 'Sound', 'btn-sound');

dataWrapper.append(btnSound, timer, counter, btnPause);

header.append(heading, dataWrapper);

// game area
export const setupGameArea = ({ app, gameAreaSize }) => {
  const gameArea = createDOMElement('div', null, 'game-area', 'game-area');

  const setGameAreaStyle = (source) => {
    gameArea.style.width = `${source}px`;
    gameArea.style.height = `${source}px`;
    gameArea.style.fontSize = `${source / 100}rem`;
  };

  const setGameAreaSize = () => {
    const viewport = window.innerWidth - parseInt(getComputedStyle(app).getPropertyValue('padding'), 10) * 2;
    if (viewport <= gameAreaSize) {
      setGameAreaStyle(viewport);
    } else {
      setGameAreaStyle(gameAreaSize);
    }
  };

  setGameAreaSize();

  // resize field on resize window
  window.addEventListener('resize', setGameAreaSize);

  // message at the field bottom
  const tmp = document.createElement('div');
  tmp.style.fontSize = '1.2rem';
  tmp.innerText = '* Цифры оставлены для удобства проверки!';

  return gameArea;
};
