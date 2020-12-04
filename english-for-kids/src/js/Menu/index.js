import { renderMain, renderCategory } from '../Main';
import { toggleNav } from '../tools';
import './index.scss';

export default function Menu(props) {
  const storage = props;
  const [categories] = props.data;

  const aside = document.createElement('aside');
  aside.className = 'side-menu';
  aside.id = 'side-menu';

  const closeBtn = document.createElement('a');
  closeBtn.className = 'closebtn';
  closeBtn.innerHTML = '&times;';
  aside.appendChild(closeBtn);
  closeBtn.addEventListener('click', toggleNav);

  const mainPageLink = document.createElement('a');
  mainPageLink.href = '#';
  mainPageLink.innerHTML = 'Main page';
  mainPageLink.addEventListener('click', () => {
    const main = document.getElementById('main');
    renderMain({
      ...storage, main,
    });
    toggleNav();
  });
  aside.appendChild(mainPageLink);

  if (categories) {
    categories.forEach((el, i) => {
      const menuItem = document.createElement('a');
      menuItem.href = '#';
      menuItem.innerHTML = el.title;
      menuItem.addEventListener('click', () => {
        const node = document.getElementById('cards-container');
        renderCategory({
          words: props.data[i + 1], node,
        });
        toggleNav();
      });
      aside.appendChild(menuItem);
    });
  }

  // todo implement function to clome menu after click outside
  // eslint-disable-next-line no-unused-vars
  const checkOutsideClick = (event) => {
    const isClickInside = aside.contains(event.target);
    if (!isClickInside) {
      toggleNav();
      // document.removeEventListener('click', checkOutsideClick);
    }
  };

  // document.addEventListener('click', checkOutsideClick);

  return aside;
}
