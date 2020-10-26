const disabledLinks = document.querySelectorAll('.navigation__link_disabled');

disabledLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.stopPropagation();
        event.preventDefault();
    })
})