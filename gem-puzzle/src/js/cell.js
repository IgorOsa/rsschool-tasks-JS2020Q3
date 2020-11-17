export default function Cell(props) {
  const {
    top, left, height, width, inner,
  } = props;

  this.top = top;
  this.left = left;
  this.inner = inner;

  const item = document.createElement('div');
  item.style.width = `${width}%`;
  item.style.height = `${height}%`;
  item.style.top = `${this.top * height}%`;
  item.style.left = `${this.left * width}%`;
  item.classList.add('cell');
  item.innerHTML = inner || '';

  this.get = () => item;
}
