import './index.scss';

export default function Switch(props) {
  const storage = props;

  const switchButton = document.createElement('label');
  switchButton.className = 'switch';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  switchButton.appendChild(checkbox);
  const sliderSpan = document.createElement('span');
  sliderSpan.className = 'slider';
  sliderSpan.innerHTML = `
  <div style="padding-top: 6px; display:flex; align-items: center; justify-content: space-around;">
    <div>play</div>
    <div>train</div>
  </div>`;
  switchButton.appendChild(sliderSpan);

  sliderSpan.addEventListener('click', () => {
    const gameMode = storage.getState('gameMode');
    storage.setState('gameMode', !gameMode);

    if (document.body.classList.contains('game-mode')) {
      document.body.classList.remove('game-mode');
    } else {
      document.body.classList.add('game-mode');
    }
  }, true);

  return switchButton;
}
