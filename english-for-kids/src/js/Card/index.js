import './index.scss';

// eslint-disable-next-line no-unused-vars
function createCard({ title, word, translation, image, audioSrc }) {
  const card = document.createElement('div');
  card.className = 'card mb-4 shadow';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  if (image) {
    const cardImage = document.createElement('img');
    cardImage.src = image;
    cardImage.className = 'card-img-top mb-1';
    cardImage.alt = word || title;
    cardBody.appendChild(cardImage);
  }

  if (title || word || translation) {
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title text-center';
    cardTitle.innerText = title || word || translation;
    cardBody.appendChild(cardTitle);
  }

  if (word) {
    const button = document.createElement('a');
    button.innerHTML = '<a href="#" class="text-center">R</a>';
    cardBody.appendChild(button);
    button.addEventListener('click', () => {
      // todo: implement function for rotation card to see an answer
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

  card.append(cardBody);

  return card;
}

export default function Card(props) {
  // eslint-disable-next-line no-unused-vars
  const { title, word, translation, image, audioSrc, back } = props;

  const cardFront = createCard({
    title, word, image, audioSrc,
  });

  return cardFront;
}
