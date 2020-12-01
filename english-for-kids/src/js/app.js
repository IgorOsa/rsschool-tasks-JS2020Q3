import Storage from './storage';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';
import data from './data';

export default function App() {
  const storage = new Storage({
    data,
  });

  const header = Header();
  const menu = Menu(storage);
  const main = Main(storage);
  const footer = Footer();

  const wrapper = document.createElement('div');
  wrapper.append(header, menu, main, footer);

  const root = document.getElementById('root');
  root.appendChild(wrapper);
}
