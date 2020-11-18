// header
export const header = document.createElement('header');
header.className = 'header';

// heading
const heading = document.createElement('h1');
heading.className = 'heading';
heading.textContent = 'Gem Puzzle Game';

const dataWrapper = document.createElement('div');
dataWrapper.className = 'data-wrapper';

// timer
const timer = document.createElement('div');
timer.className = 'timer';

const timerText = document.createElement('span');
timerText.className = 'timer__text';
timerText.innerText = 'Timer';

export const timerData = document.createElement('span');
timerData.className = 'timer__data';
timerData.innerText = '00:00';
timer.append(timerText, timerData);

// counter
const counter = document.createElement('div');
counter.className = 'counter';

const counterText = document.createElement('span');
counterText.className = 'counter__text';
counterText.innerText = 'Moves';

export const counterData = document.createElement('span');
counterData.className = 'counter__data';
counterData.innerText = '0';

counter.append(counterText, counterData);

// pause btn
export const btnPause = document.createElement('div');
btnPause.className = 'btn-pause';
btnPause.classList.add('disabled');
btnPause.innerText = 'pause';
header.appendChild(btnPause);

dataWrapper.append(timer, counter, btnPause);

header.append(heading, dataWrapper);
