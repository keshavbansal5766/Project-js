// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const video = document.querySelector('.video-container')
const btn = document.querySelector('.switch-btn')
const preLoader = document.querySelector('.preloader')

btn.addEventListener('click', function () {
    if(!btn.classList.contains('slide')) {
        btn.classList.add('slide')
        video.pause()
    } else {
        btn.classList.remove('slide')
        video.play()
    }
})

window.addEventListener('DOMContentLoaded', function () {
    preLoader.classList.add('hide-preloader')
    // if(!preLoader.classList.contains('show-preloader')) {
    //     preLoader.classList.add('hide-preloader')
    // } else {
    //     preLoader.classList.remove('hide-preloader')
    // }
})