import { renderMain, renderCategory } from '../Main';
import { toggleNav, changeMenuCurrentSelection } from '../tools';
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
  closeBtn.addEventListener('click', () => toggleNav());

  const mainPageLink = document.createElement('a');
  mainPageLink.href = '#';
  mainPageLink.className = 'category-link';
  mainPageLink.dataset.id = 0;
  if (storage.currentPage === 0) {
    mainPageLink.classList.add('current');
  }
  mainPageLink.innerHTML = 'Main page';
  mainPageLink.addEventListener('click', () => {
    const main = document.getElementById('main');
    changeMenuCurrentSelection(0);
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
      menuItem.className = 'category-link';
      menuItem.dataset.id = i + 1;
      if (storage.currentPage === i + 1) {
        menuItem.classList.add('current');
        menuItem.dataset.id = i + 1;
      }
      menuItem.addEventListener('click', () => {
        const node = document.getElementById('cards-container');
        renderCategory({
          words: props.data[i + 1], node, categoryId: i + 1,
        });
        toggleNav();
      });
      aside.appendChild(menuItem);
    });
  }

  const checkOutsideClick = (event) => {
    const isClickInside = aside.contains(event.target);
    if (!isClickInside) {
      toggleNav(true);
    }
  };

  document.addEventListener('click', checkOutsideClick);

  return aside;
}
