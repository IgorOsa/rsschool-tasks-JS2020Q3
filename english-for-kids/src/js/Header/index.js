import Switch from '../Switch';

export default function Header() {
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
  menuBtn.innerHTML = '<span class="navbar-toggler-icon"></span>';
  container.appendChild(menuBtn);

  const headerLogo = document.createElement('a');
  headerLogo.className = 'navbar-brand';
  headerLogo.href = '#';
  headerLogo.innerText = 'English for kids';
  container.appendChild(headerLogo);

  const switchWrapper = document.createElement('div');
  switchWrapper.className = 'switch-wrapper align-middle';
  const switchNode = Switch();
  switchWrapper.appendChild(switchNode);
  container.appendChild(switchWrapper);

  return header;
}
