import Card from '../Card';
import './index.scss';

export function renderCategory(props) {
  const { words, node } = props;
  node.innerHTML = '';

  words.forEach((el) => {
    const cardColumn = document.createElement('div');
    cardColumn.className = 'col col-12 col-md-6 col-lg-4 col-xl-3';
    const item = Card({
      ...el,
    });
    item.addEventListener('click', () => {
      // eslint-disable-next-line no-console
      console.log('word click', el);
    });
    cardColumn.appendChild(item);
    node.appendChild(cardColumn);
  });
}

function renderCategories(props) {
  const { main } = props;
  const categories = props.data[0];
  const cardsRow = document.createElement('div');
  cardsRow.className = 'row';
  cardsRow.id = 'cards-container';
  main.appendChild(cardsRow);

  categories.forEach((el, i) => {
    const cardColumn = document.createElement('div');
    cardColumn.className = 'col col-12 col-md-6 col-lg-4 col-xl-3';
    const item = Card({
      ...el,
    });
    item.addEventListener('click', () => {
      renderCategory({
        words: props.data[i + 1],
        main,
        node: cardsRow,
      });
    });
    cardColumn.appendChild(item);
    cardsRow.appendChild(cardColumn);
  });
}

export function renderMain(props) {
  const categories = props.data[0];
  const { main } = props;

  main.innerHTML = '';

  if (categories) {
    renderCategories({
      ...props, main,
    });
  }
}

export default function Main(props) {
  const main = document.createElement('main');
  main.className = 'container-fluid pt-3 pb-3';
  main.id = 'main';

  renderMain({
    ...props, main,
  });

  return main;
}
