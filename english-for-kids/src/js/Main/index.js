import Card from '../Card';
import './index.scss';

export default function Main(props) {
  const [categories, cards] = props.data;

  const main = document.createElement('main');
  main.className = 'container-fluid pt-3 pb-3';

  if (categories) {
    const cardSection = document.createElement('section');

    const cardsRow = document.createElement('div');
    cardsRow.className = 'row';
    cardSection.appendChild(cardsRow);

    categories.forEach((el) => {
      const cardColumn = document.createElement('div');
      cardColumn.className = 'col col-12 col-md-6 col-lg-4 col-xl-3';
      const item = Card({
        ...el,
      });
      cardColumn.appendChild(item);
      cardsRow.appendChild(cardColumn);
    });

    main.appendChild(cardSection);
  }

  if (cards) {
    // eslint-disable-next-line no-console
    // console.log(cards);
  }

  return main;
}
