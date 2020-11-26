export default function popup({ time, moves, menu, finishGame, btnPause }) {
  const winPopUp = document.createElement('span');

  winPopUp.className = 'popup-overlay';
  winPopUp.innerHTML = `<div class="popup__text">Hurray!<br>You solved the puzzle in ${time} and ${moves} moves.</div>`;

  const closeBtn = document.createElement('div');
  closeBtn.className = 'popup__btn-close';
  closeBtn.innerText = 'X';
  btnPause.classList.add('disabled');

  closeBtn.addEventListener('click', () => {
    winPopUp.classList.toggle('hidden');
    menu.overlay.classList.remove('hidden');
    menu.continueGame.classList.add('disabled');
    finishGame();
  });

  winPopUp.appendChild(closeBtn);

  return winPopUp;
}
