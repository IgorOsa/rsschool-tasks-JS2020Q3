export default function Storage() {
  const defaultData = {
    time: 0,
    moves: 0,
  };
  localStorage.setItem('gameData', JSON.stringify(defaultData));
  const gameData = JSON.parse(localStorage.getItem('gameData'));

  this.getProp = (prop) => gameData[prop];

  this.incrementMoves = () => {
    gameData.moves += 1;
    localStorage.setItem('gameData', JSON.stringify(gameData));
  };

  this.incrementTime = () => {
    gameData.time += 1;
    localStorage.setItem('gameData', JSON.stringify(gameData));
  };
}
