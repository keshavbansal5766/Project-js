const button = document.querySelector('button');
const popupContainer = document.querySelector('.popup-container');
const popup = document.querySelector('.popup');
const closeIcon = document.querySelector('.close-icon');


button.addEventListener('click', () => {
   popupContainer.classList.add('popup-open');
});

closeIcon.addEventListener('click', () => {
    popupContainer.classList.remove('popup-open');
});

popupContainer.addEventListener('click', () => {
    popupContainer.classList.remove('popup-open');
});

popup.addEventListener('click', (e) => {
    e.stopPropagation();
});

