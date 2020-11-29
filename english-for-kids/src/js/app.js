import Main from './Main';

export default function App() {
  const root = document.getElementById('root');

  const wrapper = document.createElement('div');
  wrapper.innerHTML = Main();

  root.appendChild(wrapper);
}
