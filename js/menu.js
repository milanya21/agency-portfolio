const popupButton = document.querySelector('.popup-menu__button');
const popupMenu = document.querySelector('.popup-menu__list');

popupButton.addEventListener('click', openMenu);

function openMenu() {
    popupMenu.classList.toggle('hide');
}
