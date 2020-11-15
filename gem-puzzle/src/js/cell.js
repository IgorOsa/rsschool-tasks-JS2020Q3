export default function Cell(props) {
  const {
    top, left, height, width, id, inner,
  } = props;

  this.top = top;
  this.left = left;

  const item = document.createElement('div');
  item.style.width = `${width}px`;
  item.style.height = `${height}px`;
  item.style.top = `${this.top * height}px`;
  item.style.left = `${this.left * width}px`;
  item.id = `cell-${id}`;
  item.classList.add('cell');
  item.innerHTML = inner || '';

  this.get = () => item;
}
