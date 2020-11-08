import example from './images/example.png';
import './styles/styles.scss';

// index.js
// создание свойства класса без конструктора
class Game {
    name = 'Puzzle Game';
}
const myGame = new Game();

// создаем параграф
const p = document.createElement('p');
p.textContent = `I like ${myGame.name}.`;

// создаем элемент заголовка
const heading = document.createElement('h1');
heading.textContent = 'Very interesting!';

// добавляем параграф и заголовок в DOM
const root = document.querySelector('#root');
root.append(heading, p);