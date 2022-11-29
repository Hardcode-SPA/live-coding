'use strict';

// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Import our custom JS
import { example } from './data.js';
/* --------------------------------------------------------------------- */

// Ausfuehrung sobald Javascript vom Browser heruntergeladen wurde
console.log('Global');

function diesdas() {
    console.log('Der DOM ist evtl. noch nicht ganz geladen');
}
diesdas();

let wichtigeDaten;

(function() {
    console.log('Der DOM ist evtl. noch nicht ganz geladen');

    wichtigeDaten = JSON.parse(window.localStorage.getItem('wichtig'));

    console.log(wichtigeDaten);
})();

// Ausfuehrung wenn DOM vollstaendig eingelesen und geladen,
// externe Ressourcen wie Bilder, Links, etc. sind zu dem Zeitpunkt
// evtl. noch nicht ganz geladen
window.addEventListener('DOMContentLoaded', evt => {
    console.log('Jetzt ist der gesamte DOM geladen, externe Bilder etc. kommen evtl. noch');

    let btn = document.createElement('button');
    btn.classList.add('btn', 'btn-primary');
    btn.textContent = 'click me';
    document.querySelector('#app').appendChild(btn);
});

// Ausfuehrung wenn DOM vollstaendig eingelesen und geladen,
// sowie externe Ressourcen wie Bilder, Links, etc.
window.addEventListener('load', evt => {
    console.log('Jetzt ist ALLES vom Browser geladen wurden');

    let daten = document.createElement('p');
    daten.textContent = wichtigeDaten.info.peter;
    document.querySelector('#app').appendChild(daten);
});





