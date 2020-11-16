export default function Menu(props) {
  const menuOverlay = document.createElement('span');
  menuOverlay.className = 'menu-overlay';

  const handler = {
    newGame: () => {
      props.startNewGame();
      menuOverlay.classList.add('hidden');
    },
    continue: () => {},
    bestScores: () => {},
    settings: () => {},
  };

  const menuItems = [
    { itemName: 'New game', onClick: handler.newGame, disabled: false },
    { itemName: 'Continue', onClick: handler.continue, disabled: true },
    { itemName: 'Best scores', onClick: handler.bestScores, disabled: true },
    { itemName: 'Settings', onClick: handler.settings, disabled: true },
  ];

  menuItems.forEach((el) => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerText = el.itemName;
    if (el.disabled) {
      menuItem.classList.add('disabled');
    }
    menuItem.addEventListener('click', el.onClick);
    menuOverlay.appendChild(menuItem);
  });

  return {
    show: menuOverlay,
  };
}
