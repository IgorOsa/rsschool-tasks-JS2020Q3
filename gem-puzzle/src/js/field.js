import Storage from './storage';
import Cell from './cell';
import Menu from './menu';
import {
  header, timerData, counterData, btnPause,
} from './fieldTools';
import { createDOMElement, timeFormatter } from './helpers';
import popup from './popup';

export default function Field() {
  this.storage = new Storage();
  this.cells = [];
  this.isFinished = false;
  this.timerId = null;

  const randomNumbers = [...Array(15).keys()];
  const app = document.querySelector('#root');
  const menu = new Menu();

  const updateTimer = () => {
    this.storage.incrementTime();
    timerData.innerHTML = timeFormatter(this.storage.getProp('time'));
  };

  const clearGame = () => {
    if (this.timerId) clearTimeout(this.timerId);
    app.innerHTML = '';
    counterData.innerHTML = '0';
    timerData.innerText = '00:00';
    this.storage.clearTime();
    this.storage.clearMoves();
    this.generate();
  };

  const startNewGame = () => {
    randomNumbers.sort(() => 0.5 - Math.random());
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

  menu.newGame.addEventListener('click', startNewGame);
  menu.continueGame.addEventListener('click', continueGame);

  btnPause.addEventListener('click', () => {
    clearInterval(this.timerId);
    this.timerId = null;
    btnPause.classList.toggle('disabled');
    menu.overlay.classList.toggle('hidden');
  });

  this.generate = () => {
    const GAME_AREA_SIZE = 600;
    const ITEMS_IN_A_ROW = 4;
    const TOTAL_ITEMS = 15;
    const itemSize = 100 / ITEMS_IN_A_ROW;
    const EMPTY_ITEM = {
      top: 3,
      left: 3,
    };

    // game area
    const gameArea = createDOMElement('div', null, 'game-area', 'game-area');

    const setGameAreaSize = () => {
      const viewport = window.innerWidth - parseInt(getComputedStyle(app).getPropertyValue('padding'), 10) * 2;
      if (viewport <= GAME_AREA_SIZE) {
        gameArea.style.width = `${viewport}px`;
        gameArea.style.height = `${viewport}px`;
      } else {
        gameArea.style.width = `${GAME_AREA_SIZE}px`;
        gameArea.style.height = `${GAME_AREA_SIZE}px`;
      }
    };

    setGameAreaSize();

    // resize field on resize window
    window.addEventListener('resize', setGameAreaSize);

    app.append(header, gameArea);

    // empty cell
    const emptyCell = new Cell({
      height: itemSize,
      width: itemSize,
      ...EMPTY_ITEM,
    });
    const emptyNode = emptyCell.get();
    emptyNode.classList.add('cell-empty');
    gameArea.appendChild(emptyNode);

    // cells
    for (let i = 0; i < TOTAL_ITEMS; i += 1) {
      const left = i % ITEMS_IN_A_ROW;
      const top = (i - left) / ITEMS_IN_A_ROW;

      const item = new Cell({
        height: itemSize,
        width: itemSize,
        top,
        left,
        inner: randomNumbers[i] + 1,
      });
      const itemNode = item.get();

      this.cells.push(item);

      gameArea.appendChild(itemNode);

      itemNode.addEventListener('click', () => {
        const leftDiff = Math.abs(item.left - emptyCell.left);
        const topDiff = Math.abs(item.top - emptyCell.top);
        if (leftDiff + topDiff === 1) {
          // swap cell positions
          [item.top, emptyCell.top] = [emptyCell.top, item.top];
          [item.left, emptyCell.left] = [emptyCell.left, item.left];
          [itemNode.style.top, emptyNode.style.top] = [emptyNode.style.top, itemNode.style.top];
          [itemNode.style.left, emptyNode.style.left] = [emptyNode.style.left, itemNode.style.left];

          // update moves
          this.storage.incrementMoves();
          counterData.innerText = this.storage.getProp('moves');

          // check if current position win
          this.isFinished = this.cells.every(
            (cell) => cell.inner === cell.top * ITEMS_IN_A_ROW + cell.left + 1,
          );

          if (this.isFinished) {
            if (this.timerId) {
              clearInterval(this.timerId);
            }
            setTimeout(() => {
              const popupNode = popup({
                time: timerData.innerText,
                moves: counterData.innerText,
                menu: menu.show,
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
