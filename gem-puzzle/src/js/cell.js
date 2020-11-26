export default function Cell({
  top, left, height, width, tileNumber, imageSrc, dimension,
}) {
  this.top = top;
  this.left = left;
  this.tileNumber = tileNumber;
  this.isEmpty = false;

  const item = document.createElement('div');
  item.style.width = `${width}%`;
  item.style.height = `${height}%`;
  item.style.top = `${this.top * height}%`;
  item.style.left = `${this.left * width}%`;
  item.classList.add('cell');
  item.innerHTML = tileNumber || '';
  item.style.fontSize = `${4 / dimension}em`;

  // background image
  if (imageSrc) {
    const backgroundSize = dimension * 100;
    const backgroundPositionLeft = ((tileNumber - 1) % dimension) * 100;
    const backgroundPositionTop = Math.floor((tileNumber - 1) / dimension) * 100;

    item.style.backgroundSize = `${backgroundSize}% ${backgroundSize}%`;
    item.style.backgroundImage = `url(${imageSrc})`;
    item.style.backgroundPosition = `-${backgroundPositionLeft}% -${backgroundPositionTop}%`;
  }

  this.get = () => item;
  this.node = this.get();
}
