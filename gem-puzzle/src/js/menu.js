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
    { itemName: 'New game', onClick: handler.newGame },
    { itemName: 'Continue', onClick: handler.continue },
    { itemName: 'Best scores', onClick: handler.bestScores },
    { itemName: 'Settings', onClick: handler.settings },
  ];

  menuItems.forEach((el) => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerText = el.itemName;
    menuItem.addEventListener('click', el.onClick);
    menuOverlay.appendChild(menuItem);
  });

  return {
    show: menuOverlay,
  };
}
