let redBox = document.querySelector('#red');
let greenBox = document.querySelector('#green');
let blueBox = document.querySelector('#blue');
let blackBox = document.querySelector('#black');

let colorBoxes = document.querySelectorAll('.color-box');

// Horche auf Tastendruck der Tastatur mit demselben Handler
// das keydown-Event reagiert auf das Herunterdruecken einer Taste
document.addEventListener('keydown', toggleHighlightHandler);
// das keyUP-Event reagiert auf das Loslassen einer Taste
document.addEventListener('keyup', toggleHighlightHandler);

// Ein Handler fuer keydown und keyup
function toggleHighlightHandler(keyEvent) {
    // Hole gedrueckte Taste
    let keyName = keyEvent.key;

    // .repeat gibt an, ob Taste gedrueckt gehalten wird
    if (keyEvent.repeat) return;

    console.log(keyName);

    // reagiere je nach Taste
    switch(keyName) {
        case 'a':
            // Schalte die Klasse highlight fuer die box um (an/aus)
            redBox.classList.toggle('highlight');
            break;
        case 's':
            greenBox.classList.toggle('highlight');
            break;
        case 'd':
            blueBox.classList.toggle('highlight');
            break;
        case 'f':
            blackBox.classList.toggle('highlight');
            break;
    }
}
