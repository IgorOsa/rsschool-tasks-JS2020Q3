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
        top: 3,
        left: 3,
      };
      const cells = [...Array(15).keys()].sort(() => 0.5 - Math.random());

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
      const emptyNode = emptyCell.get();
      gameArea.appendChild(emptyNode);

      for (let i = 0; i < TOTAL_ITEMS; i += 1) {
        const left = i % ITEMS_IN_A_ROW;
        const top = (i - left) / ITEMS_IN_A_ROW;

        const item = new Cell({
          height: itemSize,
          width: itemSize,
          id: cells[i],
          top,
          left,
          inner: cells[i] + 1,
        });
        const itemNode = item.get();

        gameArea.appendChild(itemNode);
        itemNode.addEventListener('click', () => {
          const leftDiff = Math.abs(item.left - emptyCell.left);
          const topDiff = Math.abs(item.top - emptyCell.top);
          if (leftDiff + topDiff === 1) {
            [item.top, emptyCell.top] = [emptyCell.top, item.top];
            [item.left, emptyCell.left] = [emptyCell.left, item.left];
            [itemNode.style.top, emptyNode.style.top] = [emptyNode.style.top, itemNode.style.top];
            [itemNode.style.left, emptyNode.style.left] = [
              emptyNode.style.left,
              itemNode.style.left,
            ];
          }
        });
      }
    },
  };
}
