function toggleNav(onlyHide = false) {
  const sideMenu = document.getElementById('side-menu');
  if (onlyHide) {
    sideMenu.classList.remove('show');
  } else {
    sideMenu.classList.toggle('show');
  }
}

module.exports = {
  toggleNav,
};
