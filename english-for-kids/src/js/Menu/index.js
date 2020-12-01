import './index.scss';

export default function Menu() {
  const aside = document.createElement('aside');
  aside.className = 'menu';
  aside.innerHTML = 'Side menu';

  return aside;
}
