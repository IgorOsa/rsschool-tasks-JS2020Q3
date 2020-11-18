import { createDOMElement } from './helpers';

export default function Menu() {
  const overlay = createDOMElement('span', null, 'menu-overlay');
  const newGame = createDOMElement('div', 'New game', 'menu-item', 'new-game');
  const continueGame = createDOMElement('div', 'Continue', 'menu-item', 'continue-game', true);
  const saveGame = createDOMElement('div', 'Save game', 'menu-item', 'save-game', true);
  const loadGame = createDOMElement('div', 'Load game', 'menu-item', 'load-game', true);

  overlay.append(newGame, continueGame, saveGame, loadGame);

  return {
    overlay,
    newGame,
    continueGame,
    saveGame,
    loadGame,
  };
}
