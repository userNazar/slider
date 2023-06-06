const downBtn = document.querySelector('.down-button')
const upBtn = document.querySelector('.up-button')

const sideBar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');


const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;


let activeSlide = 0;

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

upBtn.addEventListener('click', () => {
    changeSlide('up')
})


function changeSlide(direction) {
    if (direction === 'up') {
        activeSlide++;
        if (activeSlide === slidesCount) {
            activeSlide = 0;
        }
    } else if (direction === 'down') {
        activeSlide--;
        if (activeSlide < 0) {
            activeSlide = slidesCount - 1;
        }
    }

    let height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlide * height}px)`
    sideBar.style.transform = `translateY(${activeSlide * height}px)`
}