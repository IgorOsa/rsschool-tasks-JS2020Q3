export default function app() {
  const root = document.getElementById('root');

  const wrapper = document.createElement('div');
  wrapper.innerHTML = '<h1>Webpack works!</h1>';

  root.appendChild(wrapper);
}
