import Cell from './cell';

export default function Field() {
  return {
    generate() {
      const GAME_AREA_WIDTH = 600;
      const GAME_AREA_HEIGHT = 600;
      const ITEMS_IN_A_ROW = 4;
      const TOTAL_ITEMS = 15;
      const itemSize = GAME_AREA_WIDTH / ITEMS_IN_A_ROW;
      const EMPTY_ITEM = {
        top: 0,
        left: 0,
      };
      const cells = [];
      cells.push(EMPTY_ITEM);

      const gameArea = document.createElement('div');
      gameArea.id = 'game-area';
      gameArea.style.width = `${GAME_AREA_WIDTH}px`;
      gameArea.style.height = `${GAME_AREA_HEIGHT}px`;

      const app = document.querySelector('#root');
      const heading = document.createElement('h1');
      heading.textContent = 'Gem Puzzle Game';
      app.append(heading, gameArea);

      const emptyCell = new Cell({
        height: itemSize,
        width: itemSize,
        id: 'empty',
        ...EMPTY_ITEM,
      });
      gameArea.appendChild(emptyCell);

      for (let i = 1; i <= TOTAL_ITEMS; i += 1) {
        const left = i % ITEMS_IN_A_ROW;
        const top = (i - left) / ITEMS_IN_A_ROW;

        const item = new Cell({
          height: itemSize,
          width: itemSize,
          id: i,
          top,
          left,
          inner: i,
        });
        gameArea.appendChild(item);
      }
    },
  };
}
