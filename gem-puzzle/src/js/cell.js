export default function Cell({
  top, left, height, width, inner, imageSrc, dimension,
}) {
  this.top = top;
  this.left = left;
  this.inner = inner;
  this.isEmpty = false;

  const item = document.createElement('div');
  item.style.width = `${width}%`;
  item.style.height = `${height}%`;
  item.style.top = `${this.top * height}%`;
  item.style.left = `${this.left * width}%`;
  item.classList.add('cell');
  item.innerHTML = inner || '';
  item.style.fontSize = `${4 / dimension}em`;

  // background image
  if (imageSrc) {
    const backgroundSize = dimension * 100;
    item.style.backgroundSize = `${backgroundSize}% ${backgroundSize}%`;
    item.style.backgroundImage = `url(${imageSrc})`;
    item.style.backgroundPosition = `-${((inner - 1) % dimension) * 100}% -${
      Math.floor((inner - 1) / dimension) * 100
    }%`;
  }

  this.get = () => item;
  this.node = this.get();
}
