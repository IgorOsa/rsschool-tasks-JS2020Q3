import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';

export default function App() {
  const root = document.getElementById('root');
  const wrapper = document.createElement('div');
  const header = Header();
  const menu = Menu();
  const main = Main();
  const footer = Footer();

  wrapper.append(header, menu, main, footer);

  root.appendChild(wrapper);
}
