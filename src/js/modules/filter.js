const filter = () => {
    
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'), 
          no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };  

    const bindBtnWithMark = (btn) => {
        if (btn === '.grandmother' || btn === '.granddad') {
            menu.querySelector(btn).addEventListener('click', () => {
                typeFilter();
            }); 
        } else {
            menu.querySelector(btn).addEventListener('click', () => {
                typeFilter(wrapper.querySelectorAll(btn));
            });
        }
    };

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if(target && target.tagName === "LI") {
            items.forEach(btn => {
                btn.classList.remove('active');
            });
            target.classList.add('active');
        }
    }); 
    
    bindBtnWithMark('.lovers');
    bindBtnWithMark('.chef');
    bindBtnWithMark('.girl');
    bindBtnWithMark('.guy');
    bindBtnWithMark('.grandmother');
    bindBtnWithMark('.granddad');
    bindBtnWithMark('.all');

};

export default filter;