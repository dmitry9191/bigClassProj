const scrolling = (upSelector) => {
    const upElement = document.querySelector(upSelector);
    
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElement.classList.add('animated', 'fadeIn');
            upElement.classList.remove('fadeOut');
        } else {
            upElement.classList.add('fadeOut');
            upElement.classList.remove('fadeIn');
        }
    });

    // scrolling with request animation frame

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.7;

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault;

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top, // метод позволяет получить доступ к св-ву top, верхней координате элемента 
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress  = time - start;
            }
        });
    });
};

export default scrolling;


    //Pure js scrolling
/*     const element = document.documentElement,
          body = document.body;

    const calcScroll = () => {
        upElement.addEventListener('click', function(e) { // понадобится контекст this
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if (this.hash !== '') {
                e.preventDefault();
                
                let hashElement = document.querySelector(this.hash),
                    hashElementTop = 0;

                while (hashElement.offsetParent) { // offsetParent - элемент относительно которого позиционируется hashElement, его родитель
                    hashElementTop += hashElement.offsetTop; // offsetTop показывает сколько пикселей осталось от верхней граници родителя до hashElement
                    hashElement = hashElement.offsetParent; // перебираем всех родителей элемента
                }

                hashElementTop = Math.round(hashElementTop);
                smoothScroll(scrollTop, hashElementTop, this.hash);
            }
        });
    };

    const smoothScroll = (from, to, hash) => {
        let timeInterval = 1,
            prevScrollTop,
            speed;

        if (to > from) {
            speed = 30;
        } else {
            speed = -30;
        }

        let move = setInterval(function() {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if (
                prevScrollTop === scrollTop ||
                (to > from && scrollTop >= to) ||
                (to < from && scrollTop <= to)
            ) {
                clearInterval(move);
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
            } else {
                body.scrollTop += speed;
                element.scrollTop += speed;
                prevScrollTop = scrollTop;
            }
        }, timeInterval);
    };

    calcScroll(); */