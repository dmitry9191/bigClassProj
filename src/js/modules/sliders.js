const sliders = (slides, direction, prev, next) => {
    let slideIndex = 1,
        paused = false;

    const items = document.querySelectorAll(slides);

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block'; 
    }

    showSlides(slideIndex);

    function changeSlides(n) {
       showSlides(slideIndex += n);
    }

    function activateAnimation() {
        if (direction === 'vertical') {
            paused = setInterval(function() {
                changeSlides(1);
                items[slideIndex - 1].classList.add('slideInUp');
            }, 10000);
        } else {
            paused = setInterval(function() {
                changeSlides(1);
                items[slideIndex - 1].classList.add('slideInRight');
            }, 10000);
        }
    }

    activateAnimation();

    try {
        const prevButton = document.querySelector(prev),
              nextButton = document.querySelector(next);

        prevButton.addEventListener('click', () => {
            changeSlides(-1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });

        nextButton.addEventListener('click', () => {
            changeSlides(1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });
    } catch(e) {}

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });

};

export default sliders; 