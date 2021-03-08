function toggleNav(onlyHide = false) {
  const sideMenu = document.getElementById('side-menu');
  if (onlyHide) {
    sideMenu.classList.remove('show');
  } else {
    sideMenu.classList.toggle('show');
  }
}

function changeMenuCurrentSelection(categoryId) {
  const menuItems = document.querySelectorAll('.category-link');
  menuItems.forEach((mi) => {
    mi.classList.remove('current');
  });
  const menuItem = document.querySelector(`.category-link[data-id='${categoryId}']`);
  menuItem.classList.add('current');
}

module.exports = {
  toggleNav,
  changeMenuCurrentSelection,
};
