export default function Storage() {
  const defaultData = {
    time: '0',
    moves: '0',
    dimension: '4',
  };

  if (!JSON.parse(localStorage.getItem('gameData'))) {
    localStorage.setItem('gameData', JSON.stringify(defaultData));
  }

  const gameData = JSON.parse(localStorage.getItem('gameData'));

  const updateStorage = () => {
    localStorage.setItem('gameData', JSON.stringify(gameData));
  };

  this.getProp = (prop) => gameData[prop];

  this.setProp = (prop, value) => {
    gameData[prop] = value;
    updateStorage();
  };

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
