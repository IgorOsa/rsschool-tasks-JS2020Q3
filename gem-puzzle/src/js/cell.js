export default function Cell({
  top, left, height, width, inner,
}) {
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
  item.dataset.top = top;
  item.dataset.left = left;

  this.get = () => item;
}
