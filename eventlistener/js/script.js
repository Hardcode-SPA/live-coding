// Hole Referenz auf Button mit der ID #event-button
let eventButton = document.querySelector('#event-button');
console.log(eventButton);

// Definiere onclick-Handler fuer eventButton
// eventButton.onclick = function(clickEvent) {
//     console.log('Ich wurde geklickt!');

//     if (clickEvent.target.tagName === 'BUTTON') {
//         console.log('Der Button wurde geklickt!');
//     }
// };


eventButton.addEventListener('click', function(clickEvent) {
    console.log('Ich wurde geklickt!');

    // ueber das uebergebene Eventobjekt haben wir Zugriff
    // auf das Element, das dieses Event ausgeloest hat
    let geklickterButton = clickEvent.target;

    // if (clickEvent.target.tagName === 'BUTTON') {
    //     console.log('Der Button wurde geklickt!');
    // }

    // clickEvent.target.style.backgroundColor = 'green';
});

// Zaehler fuer mouseover Ereignisse
let mouseOverCounter = 0;
// Hole Referenz auf div
let mouseoverDiv = document.querySelector('.moveover-div');
// EventHandler fuer mouseover Ergeignis (also mit der Maus drueberhovern)
mouseoverDiv.addEventListener('mouseover', mouseoverEvent => {
    console.log('Mouse over!');

    mouseOverCounter++;
    console.log(mouseOverCounter);

    mouseoverEvent.target.style.backgroundColor = 'red';
});

// EventHandler fuer mouseleave Ergeignis (also mit der Maus das div verlassen)
mouseoverDiv.addEventListener('mouseleave', mouseoverEvent => {
    console.log('Mouse leave!');

    mouseoverEvent.target.style.backgroundColor = 'green';
});



let onChangeInput = document.querySelector('#onchange-input');
// onChange EventHandler fuer Eingabefeld
// reagiert erst bei Verlassen des Eingabefelds
onChangeInput.addEventListener('change', evt => {
    console.log(evt.target.value);
});

// onInput EventHandler fuer Eingabefeld
// reagiert bei jeder Wertaenderung des Eingabefelds
let onInputInput = document.querySelector('#oninput-input');
onInputInput.addEventListener('input', evt => {
    console.log(evt.target.value);
});

// onChange EventHandler fuer Select
let onChangeSelect = document.querySelector('#onchange-select');
onChangeSelect.addEventListener('change', evt => {
    console.log(evt.target.value);
});

// Beispielhafte Liste von Tieren zum Durchsuchen
const animals = [
    'Hawk',
    'Bear'
];
// Referenz auf Eingabefeld fuer die Datalist
let dlInput = document.querySelector('#dl-input');

// EventHandler onChange fuer Auswahl von Optionen
dlInput.addEventListener('change', evt => console.log('Change:', evt.target.value));

// EventHandler onInput fuer Eingabe in das Suchfeld
// Als sehr vereinfachtes Beispiel fuer eine Live-Search
dlInput.addEventListener('input', evt => {
    console.log('Input:', evt.target.value);

    datalist = document.querySelector('#datalist');

    let searchTerm = evt.target.value.toLocaleLowerCase();

    let foundAnimal = animals.find(animal => animal.toLocaleLowerCase().includes(searchTerm));

    if (foundAnimal) {
        let newOption = document.createElement('option');
        newOption.value = foundAnimal;
        newOption.innerText = foundAnimal;

        datalist.appendChild(newOption);
    }
});

let header = document.querySelector('header');

// Merke letzte Scrollposition
let lastScrollPos = 0;

// EventHandler fuer Scrollen
document.addEventListener('scroll', scrollEvt => {

    // Wenn aktuelle vertikale Scrollposition groesser als letzte (nach unten also)
    if (window.scrollY > lastScrollPos) {
        // verstecke header
        header.style.padding = '0';
    } else {
        // scroll nach oben -> zeige header wieder an
        header.style.padding = '1em';
    }

    // Speichere Scrollposition
    lastScrollPos = window.scrollY;
});