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

dataWrapper.append(timer, counter, btnPause);

header.append(heading, dataWrapper);
