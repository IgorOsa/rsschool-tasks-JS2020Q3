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
  switchButton.appendChild(sliderSpan);

  sliderSpan.addEventListener('click', () => {
    const gameMode = storage.getState('gameMode');
    storage.setState('gameMode', !gameMode);
  });

  return switchButton;
}
