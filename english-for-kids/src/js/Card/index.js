import './index.scss';

function createCard({ title, word, translation, image, audioSrc, flipNode }) {
  const cardBody = document.createElement('div');

  if (image) {
    const cardImage = document.createElement('img');
    cardImage.src = image;
    cardImage.className = 'card-img-top mb-1';
    cardImage.alt = word || title || translation;
    cardBody.appendChild(cardImage);
  }

  if (title || word || translation) {
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title text-center';
    cardTitle.innerText = title || word || translation;
    cardBody.appendChild(cardTitle);
  }

  if (word) {
    const button = document.createElement('button');
    button.className = 'card-rotate';
    button.innerHTML = '<span class="card-rotate-icon"></span>';
    cardBody.appendChild(button);
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      flipNode.classList.toggle('active');
    });
  }

  if (audioSrc) {
    const audio = document.createElement('audio');
    audio.src = audioSrc;
    cardBody.addEventListener('click', () => {
      audio.play();
    });
    cardBody.appendChild(audio);
  }

  return cardBody;
}

export default function Card(props) {
  const { title, word, translation, image, audioSrc, back } = props;

  const cardColumn = document.createElement('div');
  cardColumn.className = 'col col-12 col-md-6 col-lg-4 col-xl-3';

  const card = document.createElement('div');
  card.className = 'card shadow mb-4';
  cardColumn.appendChild(card);

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body card__game-mode';
  card.appendChild(cardBody);

  const cardFront = createCard({
    title, word, image, audioSrc, flipNode: cardColumn,
  });
  cardFront.classList.add('card-front');
  cardBody.appendChild(cardFront);

  if (back) {
    cardColumn.classList.add('card-flip');
    card.classList.add('card-inner');

    const cardBack = createCard({
      translation, image, flipNode: cardColumn,
    });
    cardBack.classList.add('card-back');
    cardBody.appendChild(cardBack);
    cardColumn.addEventListener('mouseleave', () => {
      cardColumn.classList.remove('active');
    });
  }

  return cardColumn;
}
