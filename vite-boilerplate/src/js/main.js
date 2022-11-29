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

example();
