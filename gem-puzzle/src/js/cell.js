export default function Cell(props) {
  const { height, width, top, left, id, inner } = props;

  const item = document.createElement('div');
  item.style.width = `${width}px`;
  item.style.height = `${height}px`;
  item.style.top = `${top * height}px`;
  item.style.left = `${left * width}px`;
  item.id = `cell-${id}`;
  item.classList.add('cell');
  item.innerHTML = inner || '';

  return item;
}
