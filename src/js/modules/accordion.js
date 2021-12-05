const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);
    
    btns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');
            
            if (this.classList.contains('active-style')) {
                btns.forEach(btn => {
                    btn.classList.remove('active-style');
                    btn.nextElementSibling.classList.remove('active-content');
                    btn.nextElementSibling.style.maxHeight = '0px';
                });
                this.classList.add('active-style');
                this.nextElementSibling.classList.add('active-content');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
            
        });
    });
};

export default accordion;

/*  Первый способ создания через изменение в css.
    const btns = document.querySelectorAll(triggersSelector)
    const blocks = document.querySelectorAll(itemsSelector);
    blocks.forEach(block => { 
        block.classList.add('animated', 'fadeInDown'); 
    });

    btns.forEach(btn => {
        btn.addEventListener('click', function() { // будет использоваться контекст this
            if (!this.classList.contains('active')) {
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style');
                });
                this.classList.add('active', 'active-style'); в css прописывается что блок с следующий за span  с классом active получает display: none
            }
        });
    }); */