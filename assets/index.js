const slide = document.querySelectorAll('.slider');
const btnPrev = document.querySelector('#prev-button');
const btnNext = document.querySelector('#next-button');

let currentSlide = 0;

function hideSlide(){
    slide.forEach(item => item.classList.remove('on'))
}

function showSlide() {
    slide[currentSlide].classList.add('on');
}

function nextSlide() {
    hideSlide();
    if (currentSlide === slide.length -1) {
        currentSlide = 0;
    } else {
        currentSlide++
    }

    showSlide();

}
function prevSlide() {
    hideSlide();
    if (currentSlide === 0 ) {
        currentSlide = slide.length -1;
    } else {
        (currentSlide--)
    }
    showSlide();

}

btnNext.addEventListener("click", prevSlide);
btnPrev.addEventListener("click", nextSlide);

setInterval(nextSlide, 3000)