import Field from './field';

export default function game() {
  const gameField = new Field();
  gameField.generate();
}
