// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Import our custom JS
import { example } from './data.js';
/* -------------------------------------------------------------------------------  */
let btn = document.createElement('button');
btn.classList.add('btn', 'btn-primary');
btn.textContent = 'click me';
document.querySelector('#app').appendChild(btn);

btn.addEventListener('click', async evt => {
    // example()
    //     .then(result => {
    //         console.log(result);
    //        console.log('State: Fulfilled');
    //     })
    //     .catch(error => {
    //         console.error(error);
    //         console.log('State: Rejected');
    //     })
    //     .finally(() => {
    //         console.log('Boar, endlisch feddisch mit janze Kaese hier...');
    //         console.log('State: Settled');
    //     });

    try {
        let result = await example();
        console.log('State: Fulfilled');
        console.log(result);

    } catch (error) {
        console.log('State: Rejected');
        console.error(error);

    } finally {
        console.log('State: Settled');
        console.log('Boar, endlisch feddisch mit janze Kaese hier...');
    }
});



