export default function Card(props) {
  // eslint-disable-next-line no-unused-vars
  const { title, word, translation, image, audioSrc } = props;

  const card = document.createElement('div');
  card.className = 'card mb-4';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  if (image) {
    const cardImage = document.createElement('img');
    cardImage.src = image;
    cardImage.className = 'card-img-top mb-1';
    cardImage.alt = word || title;
    cardBody.appendChild(cardImage);
  }

  if (title) {
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title text-center';
    cardTitle.innerText = title;
    cardBody.appendChild(cardTitle);
  }

  // const button = `<a href="#" class="btn btn-primary">Go somewhere</a>`;

  card.appendChild(cardBody);

  return card;
}
