import Storage from './storage';
import Cell from './cell';
import Menu from './menu';
import { header, timerData, counterData, btnPause, btnSound, setupGameArea } from './fieldTools';
import { formatTimer, createIconHTML } from './helpers';
import Popup from './popup';
import playSound from './sounds';

import imageSrc from '../images/125.jpg';

export default function Field() {
  this.storage = new Storage();

  this.isFinished = false;
  this.timerId = null;
  this.sounds = true;
  this.cells = [];
  this.dimension = parseInt(this.storage.getProp('dimension'), 10);
  this.totalCells = this.dimension ** 2 - 1;
  this.randomNumbers = [...Array(this.totalCells).keys()];

  const app = document.querySelector('#root');

  const menu = new Menu({
    storage: this.storage,
  });

  const updateTimer = () => {
    this.storage.incrementTime();
    timerData.innerHTML = formatTimer(this.storage.getProp('time'));
  };

  const clearGame = () => {
    this.cells = [];
    if (this.timerId) clearTimeout(this.timerId);
    app.innerHTML = '';
    counterData.innerHTML = '0';
    timerData.innerText = '00:00';
    this.storage.clearTime();
    this.storage.clearMoves();
    this.generate();
  };

  const isEven = (x) => x % 2;

  const isSolvable = () => {
    // check if solvable combination by formula
    const N = this.randomNumbers.reduce((acc, el, i, arr) => {
      const countElementsLowerOfCurrent = arr.slice(i + 1).filter((x) => x < el).length;
      return acc + countElementsLowerOfCurrent;
    }, 0) + this.dimension;
    // if result is even combination is solvable
    const result = isEven(N);

    return result;
  };

  const startNewGame = () => {
    let isSolvableCombination;
    do {
      this.randomNumbers.sort(() => 0.5 - Math.random());
      isSolvableCombination = isSolvable();
    } while (!isSolvableCombination);
    clearGame();
    this.timerId = setInterval(updateTimer, 1000);
    btnPause.classList.remove('disabled');
    menu.overlay.classList.add('hidden');
    menu.continueGame.classList.remove('disabled');
  };

  const continueGame = () => {
    this.timerId = setInterval(updateTimer, 1000);
    btnPause.classList.remove('disabled');
    menu.overlay.classList.toggle('hidden');
  };

  const isFinishedChecker = () => this.cells
    .filter((x) => !x.isEmpty)
    .every((cell) => {
      // every cell must be on proper position in row and column
      const { tileNumber } = cell;
      const tileRow = cell.top * this.dimension;
      const tileColumn = cell.left + 1;
      const tileIndex = tileRow + tileColumn;

      return tileNumber === tileIndex;
    });

  menu.newGame.addEventListener('click', startNewGame);
  menu.continueGame.addEventListener('click', continueGame);
  menu.dimentionSelect.addEventListener('change', (event) => {
    const dimension = parseInt(event.target.value, 10);
    this.storage.setProp('dimension', dimension);
    this.dimension = dimension;
    this.dimension = parseInt(this.storage.getProp('dimension'), 10);
    this.totalCells = this.dimension ** 2 - 1;
    this.randomNumbers = [...Array(this.totalCells).keys()];
    clearGame();
  });

  btnPause.addEventListener('click', () => {
    clearInterval(this.timerId);
    this.timerId = null;
    btnPause.classList.toggle('disabled');
    menu.overlay.classList.toggle('hidden');
  });

  btnSound.innerHTML = createIconHTML(this.sounds ? 'volume_up' : 'volume_off');
  btnSound.addEventListener('click', () => {
    this.sounds = !this.sounds;
    btnSound.innerHTML = createIconHTML(this.sounds ? 'volume_up' : 'volume_off');
  });

  this.generate = () => {
    const GAME_AREA_SIZE = 600;
    const itemSize = 100 / this.dimension;

    const gameArea = setupGameArea({
      app,
      gameAreaSize: GAME_AREA_SIZE,
    });

    app.append(header, gameArea);

    // create empty cell
    const empty = new Cell({
      height: itemSize,
      width: itemSize,
      dimension: this.dimension,
      top: this.dimension - 1,
      left: this.dimension - 1,
    });

    empty.isEmpty = true;
    empty.node.classList.add('cell-empty');
    this.cells.push(empty);
    gameArea.appendChild(empty.node);

    // create other cells
    for (let i = 0; i < this.totalCells; i += 1) {
      const left = i % this.dimension;
      const top = (i - left) / this.dimension;

      const item = new Cell({
        height: itemSize,
        width: itemSize,
        top,
        left,
        tileNumber: this.randomNumbers[i] + 1,
        imageSrc,
        dimension: this.dimension,
      });

      this.cells.push(item);

      gameArea.appendChild(item.node);

      item.node.addEventListener('click', () => {
        const leftDiff = Math.abs(item.left - empty.left);
        const topDiff = Math.abs(item.top - empty.top);
        if (leftDiff + topDiff === 1) {
          // play sound then swap
          if (this.sounds) {
            playSound();
          }
          // swap cell positions
          [item.top, empty.top] = [empty.top, item.top];
          [item.left, empty.left] = [empty.left, item.left];
          [item.node.style.top, empty.node.style.top] = [empty.node.style.top, item.node.style.top];
          [item.node.style.left, empty.node.style.left] = [empty.node.style.left, item.node.style.left];

          // update moves
          this.storage.incrementMoves();
          counterData.innerText = this.storage.getProp('moves');

          // check if current position win after each cell swap
          this.isFinished = isFinishedChecker();

          if (this.isFinished) {
            if (this.timerId) {
              clearInterval(this.timerId);
            }
            setTimeout(() => {
              const popupNode = new Popup({
                time: timerData.innerText,
                moves: counterData.innerText,
                menu,
                btnPause,
                finishGame: clearGame,
              });
              gameArea.appendChild(popupNode);
            }, 300);
          }
        }
      });
    }

    // append menu
    gameArea.append(menu.overlay);
  };
}
