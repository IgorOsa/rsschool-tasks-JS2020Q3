import { createDOMElement } from './helpers';

export default function Menu({ storage }) {
  const MIN_DIMENSION = 3;
  const MAX_DIMENSION = 10;
  const dimension = parseInt(storage.getProp('dimension'), 10);

  const overlay = createDOMElement('span', null, 'menu-overlay');
  const newGame = createDOMElement('div', 'New game', 'menu-item', 'new-game');
  const continueGame = createDOMElement('div', 'Continue', 'menu-item', 'continue-game', true);
  const saveGame = createDOMElement('div', 'Save game', 'menu-item', 'save-game', true);
  const loadGame = createDOMElement('div', 'Load game', 'menu-item', 'load-game', true);
  // select dimenion section
  const dimensionMenu = createDOMElement('div', null, 'dimension', '');
  dimensionMenu.innerHTML = 'Board dimension<br>';
  const dimentionSelect = createDOMElement('select', null, 'dimension__select');
  dimensionMenu.appendChild(dimentionSelect);

  for (let i = MIN_DIMENSION; i <= MAX_DIMENSION; i += 1) {
    const option = createDOMElement('option', `${i}x${i}`);
    option.value = i;
    if (i === dimension) option.selected = true;
    dimentionSelect.appendChild(option);
  }

  // append all items into menu
  overlay.append(newGame, continueGame, saveGame, loadGame, dimensionMenu);

  return {
    overlay,
    newGame,
    continueGame,
    saveGame,
    loadGame,
    dimentionSelect,
  };
}
