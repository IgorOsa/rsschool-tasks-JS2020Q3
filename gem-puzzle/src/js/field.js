import Storage from './storage';
import Cell from './cell';
import Menu from './menu';
import { header, timerData, counterData } from './fieldData';
import { timeFormatter } from './helpers';

export default function Field() {
  this.storage = new Storage();
  this.cells = [];
  this.isFinished = false;
  this.timerId = null;

  const app = document.querySelector('#root');

  // let timerId;

  const updateTimer = () => {
    this.storage.incrementTime();
    timerData.innerHTML = timeFormatter(this.storage.getProp('time'));
  };

  const startNewGame = () => {
    if (this.timerId) clearTimeout(this.timerId);
    this.cells.sort(() => 0.5 - Math.random());
    app.innerHTML = '';
    this.generate();
    this.timerId = setInterval(updateTimer, 1000);
  };

  const handlers = {
    startNewGame,
  };

  const menu = new Menu(handlers);

  this.generate = () => {
    const GAME_AREA_WIDTH = 600;
    const GAME_AREA_HEIGHT = 600;
    const ITEMS_IN_A_ROW = 4;
    const TOTAL_ITEMS = 15;
    const itemSize = GAME_AREA_WIDTH / ITEMS_IN_A_ROW;
    const EMPTY_ITEM = {
      top: 3,
      left: 3,
    };
    this.cells = [];

    // game area
    const gameArea = document.createElement('div');
    gameArea.id = 'game-area';
    gameArea.className = 'game-area';
    gameArea.style.width = `${GAME_AREA_WIDTH}px`;
    gameArea.style.height = `${GAME_AREA_HEIGHT}px`;

    app.append(header, gameArea);

    // empty cell
    const emptyCell = new Cell({
      height: itemSize,
      width: itemSize,
      id: 'empty',
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
        id: i + 1,
        top,
        left,
        inner: i + 1,
      });
      const itemNode = item.get();

      this.cells.push(item);

      gameArea.appendChild(itemNode);
      itemNode.addEventListener('click', () => {
        const leftDiff = Math.abs(item.left - emptyCell.left);
        const topDiff = Math.abs(item.top - emptyCell.top);
        if (leftDiff + topDiff === 1) {
          [item.top, emptyCell.top] = [emptyCell.top, item.top];
          [item.left, emptyCell.left] = [emptyCell.left, item.left];
          [itemNode.style.top, emptyNode.style.top] = [emptyNode.style.top, itemNode.style.top];
          [itemNode.style.left, emptyNode.style.left] = [emptyNode.style.left, itemNode.style.left];
          // update moves
          this.storage.incrementMoves();
          counterData.innerText = this.storage.getProp('moves');
          // check if current position win
          this.isFinished = this.cells.every((cell) => cell.inner === cell.top * 4 + cell.left + 1);

          if (this.isFinished) {
            if (this.timerId) {
              clearInterval(this.timerId);
            }
            setTimeout(() => alert('You won!'), 300);
          }
        }
      });
    }

    // append menu
    gameArea.append(menu.show);
  };
}
