export default function Menu(props) {
  const menuOverlay = document.createElement('span');
  menuOverlay.className = 'menu-overlay';

  const handler = {
    newGame: () => {
      props.startNewGame();
      menuOverlay.classList.add('hidden');
    },
  };

  const menuItems = [
    { itemName: 'New game', onClick: handler.newGame },
    { itemName: 'Continue', onClick: (event) => handler(event) },
    { itemName: 'Best scores', onClick: (event) => handler(event) },
    { itemName: 'Settings', onClick: (event) => handler(event) },
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
