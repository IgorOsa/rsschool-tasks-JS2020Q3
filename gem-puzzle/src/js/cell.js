export default function Cell(props) {
  const {
    top, left, height, width, inner,
  } = props;

  this.top = top;
  this.left = left;
  this.inner = inner;

  const item = document.createElement('div');
  item.style.width = `${width}px`;
  item.style.height = `${height}px`;
  item.style.top = `${this.top * height}px`;
  item.style.left = `${this.left * width}px`;
  item.classList.add('cell');
  item.innerHTML = inner || '';

  this.get = () => item;
}
