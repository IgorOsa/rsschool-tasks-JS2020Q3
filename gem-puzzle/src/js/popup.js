export default function popup(props) {
  const { time, moves, menu } = props;
  const winPopUp = document.createElement('span');

  winPopUp.className = 'popup-overlay';
  winPopUp.innerHTML = `<div class="popup__text">Ура!<br>Вы решили головоломку за ${time} и ${moves} ходов</div>`;

  const closeBtn = document.createElement('div');
  closeBtn.className = 'popup__btn-close';
  closeBtn.innerText = 'X';
  closeBtn.addEventListener('click', () => {
    winPopUp.classList.toggle('hidden');
    menu.classList.toggle('hidden');
  });

  winPopUp.appendChild(closeBtn);

  return winPopUp;
}
