export default function Storage() {
  const defaultData = {
    time: 0,
    moves: 0,
  };
  localStorage.setItem('gameData', JSON.stringify(defaultData));
  const gameData = JSON.parse(localStorage.getItem('gameData'));

  const updateStorage = () => {
    localStorage.setItem('gameData', JSON.stringify(gameData));
  };

  this.getProp = (prop) => gameData[prop];

  this.incrementMoves = () => {
    gameData.moves += 1;
    updateStorage();
  };

  this.incrementTime = () => {
    gameData.time += 1;
    updateStorage();
  };

  this.clearTime = () => {
    gameData.time = 0;
    updateStorage();
  };

  this.clearMoves = () => {
    gameData.moves = 0;
    updateStorage();
  };
}
