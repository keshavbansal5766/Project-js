// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openBtn = document.querySelector('.modal-btn')
const closeBtn = document.querySelector('.close-btn')
const overlay = document.querySelector('.modal-overlay')

openBtn.addEventListener('click', function() {
    overlay.classList.add('open-modal')
})

closeBtn.addEventListener('click', function() {
    overlay.classList.remove('open-modal')
})