import {getData} from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener('click', function() { // здесь функция не стрелочная...
        getData('assets/db.json')
            .then(res => createCards(res.styles))
            .catch(error => showError(error));  /* (error => console.log(error)) */;

        this.remove(); // ...чтобы this ссылался на btn
    });

    function createCards(responds) {
        responds.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `
            document.querySelector(wrapper).appendChild(card);
        });
    }

    function showError(error) {
        
        const errMessage = document.createElement('div');

        errMessage.innerHTML = `
            <img src="assets/img/error.png">
        `;
        errMessage.querySelector('img').style = 'margin-left: 30%';
        document.querySelector(wrapper).appendChild(errMessage);
        console.log(error);
    }

};

export default showMoreStyles;