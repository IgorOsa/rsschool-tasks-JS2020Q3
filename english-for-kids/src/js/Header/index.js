import Switch from '../Switch';
import { toggleNav } from '../tools';
import './index.scss';

export default function Header(props) {
  const header = document.createElement('header');

  const nav = document.createElement('nav');
  nav.className = 'navbar navbar-dark bg-primary';
  header.appendChild(nav);

  const container = document.createElement('div');
  container.className = 'container-fluid';
  nav.appendChild(container);

  const menuBtn = document.createElement('button');
  menuBtn.classList = 'navbar-toggler';
  menuBtn.type = 'button';

  const navbarToggler = document.createElement('span');
  navbarToggler.className = 'navbar-toggler-icon';

  navbarToggler.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleNav();
  });

  menuBtn.appendChild(navbarToggler);

  container.appendChild(menuBtn);

  const headerLogo = document.createElement('a');
  headerLogo.className = 'navbar-brand';
  headerLogo.href = '#';
  headerLogo.innerText = 'English for kids';
  container.appendChild(headerLogo);

  const switchWrapper = document.createElement('div');
  switchWrapper.className = 'switch-wrapper align-middle';
  const switchNode = Switch(props);
  switchWrapper.appendChild(switchNode);
  container.appendChild(switchWrapper);

  return header;
}
