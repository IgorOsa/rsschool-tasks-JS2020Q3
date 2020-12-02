// eslint-disable-next-line no-unused-vars
import { toggleNav } from '../tools';
import './index.scss';

export default function Menu(props) {
  const [categories] = props.data;

  const aside = document.createElement('aside');
  aside.className = 'side-menu';
  aside.id = 'side-menu';

  const closeBtn = document.createElement('a');
  closeBtn.className = 'closebtn';
  closeBtn.innerHTML = '&times;';
  aside.appendChild(closeBtn);
  closeBtn.addEventListener('click', toggleNav);

  if (categories) {
    categories.forEach((el) => {
      const menuItem = document.createElement('a');
      menuItem.href = '#';
      menuItem.innerHTML = el.title;
      aside.appendChild(menuItem);
    });
  }

  return aside;
}
