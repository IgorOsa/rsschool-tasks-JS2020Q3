import './index.scss';

export default function Switch() {
  const switchButton = document.createElement('label');
  switchButton.className = 'switch';
  switchButton.innerHTML = `
  <input type="checkbox">
  <span class="slider"></span>
  `;

  return switchButton;
}
