export const timeFormatter = (time) => `${Math.floor(time / 60)
  .toString()
  .padStart(2, '0')}:${Math.floor(time % 60)
  .toString()
  .padStart(2, '0')}`;

export const createDOMElement = (
  itemType = 'div',
  itemInnerText,
  itemClassName = '',
  itemId = '',
  disabled = false,
) => {
  const item = document.createElement(itemType);
  if (itemInnerText) {
    item.innerText = itemInnerText;
  }
  if (itemClassName) {
    item.className = itemClassName;
  }
  if (itemId) {
    item.id = itemId;
  }
  if (disabled) item.classList.add('disabled');

  return item;
};

export const createIconHTML = (iconName) => `<i class="material-icons">${iconName}</i>`;
