const scrolling = (upSelector) => {
    const upElement = document.querySelector(upSelector);
    
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) { // scrollTop показывает сколько px прокручено от верхней части элемента
            upElement.classList.add('animated', 'fadeIn');
            upElement.classList.remove('fadeOut');
        } else {
            upElement.classList.add('fadeOut');
            upElement.classList.remove('fadeIn');
        }
    });

    // scrolling with request animation frame

    let links = document.querySelectorAll('[href^="#"]'), // выбираются все строки у которых параметр href начинается с #
        speed = 0.3; // скорость прокрутки анимации, чем меньше значение, тем быстрее прокручивается

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault; // на случай если ссылка ведет к загрузке другой страницы

            let heightTop = document.documentElement.scrollTop, // scrollTop показывает сколько px прокручено от верхней части страницы
                hash = this.hash, // якорь страницы, начинается с # в адресной строке
                toBlock = document.querySelector(hash).getBoundingClientRect().top, // метод получает доступ к св-ву top, верхней координате элементаБ куда прошли по ссылке 
                start = null; // начальное время

                console.log(toBlock, heightTop);

            requestAnimationFrame(step); // вызываем вручную анимацию первый раз, потом вызывается коллбэк функцией step

            function step(time) { // аргумент time - это timestamp текущего времени
                if (start === null) {
                    start = time; // устанавливает для start время запуска функции, срабатывает один раз в самом начале
                }

                let progress  = time - start, // содержит время с начала анимации
                    r = (toBlock < 0 ? Math.max(heightTop - progress / speed, heightTop + toBlock) : Math.min(heightTop + progress / speed, heightTop + toBlock));
                    // r - значение пикселей на которое сдвигается кадр в каждое исполнение коллбэк-функции
                document.documentElement.scrollTo(0, r);

                if (r !== heightTop + toBlock) { 
                    requestAnimationFrame(step); // функция вызывается до тех пор...
                } else {
                    location.hash = hash; // пока значение r не становится равно сумме heightTop и toBlock,
                }                         // после чего в св-во hash объекта location записывается this.hash. то есть значение якоря href="#some" куда мы перешли
            }                             // и показывается в адресной строке
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
    