const modals = (state) => {
    
    let btnPressed;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll("[data-modal]"),
              /* lastForm = document.querySelector("[data-calc]"), */
              scroll = calcScroll();

       /*  let checkInputsResult = true; */

        const closeWindows = () => {
            windows.forEach(item => {
                item.style.display = 'none';
                item.classList.add('animated', 'fadeIn');
            });
        };

        /* const checkInputs = (trigger) => {
            const stateKeys = Object.keys(state);
            
            switch(trigger) {
                case "button popup_calc_button":
                    stateKeys.length >= 4 ? checkInputsResult = true : checkInputsResult = false;
                    break;
                case "button popup_calc_profile_button":
                    stateKeys.length === 5 ? checkInputsResult = true : checkInputsResult = false;
                    break;
                default:
                    checkInputsResult = true;
            }
        }; */

/*         lastForm.addEventListener('submit', (e) => {
            setTimeout(() => {
                closeWindows();
                document.body.classList.remove('modal-open');
                for (let key in state) {
                    if (key === 'type' || key === 'form') {
                        continue;
                    }
                    delete state[key];
                }
            }, 2000);
        });
 */
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                if (destroy) {
                    item.remove();
                }

                closeWindows();
                modal.style.display = "block";
                document.body.classList.add('modal-open');
                document.body.style.marginRight = `${scroll}px`;
                /* document.body.style.overflow = "hidden"; */
            });
        });

        close.addEventListener('click', () => {
            closeWindows();
            modal.style.display = "none";
            document.body.classList.remove('modal-open');
            document.body.style.marginRight = `0px`;
      /*    document.body.style.overflow = ""; */
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeWindows();
                modal.style.display = "none";
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = `0px`;
          /*       document.body.style.overflow = ""; */
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            let display;
            
            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });

            if (!display) {
                document.querySelector(selector).style.display = "block";
                document.body.classList.add('modal-open');

                let scroll = calcScroll();

                document.body.style.marginRight = `${scroll}px`;
            //       document.body.style.overflow = "";
            } 
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function openByScroll(selector, destroingTrigger) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); // для старых браузеров

            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                document.querySelector(selector).style.display = 'block';
                document.body.classList.add('modal-open');

                let scroll = calcScroll();

                document.body.style.marginRight = `${scroll}px`;
                document.querySelector(destroingTrigger).style.display = 'none';
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    showModalByTime('.popup-consultation', 60001); 
    openByScroll('.popup-gift', '.fixed-gift');
};  

export default modals;