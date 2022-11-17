// Referenz auf file-Input
let avatarInput = document.querySelector('#avatar-input');
// Referenz auf img fuer das hochgeladene Bild
let avatarImg = document.querySelector('#avatar');

// Fuege dem file-Input einen EventListener (change) hinzu
avatarInput.addEventListener('change', evt => {
    // Extrahiere Dateinamen aus dem Event
    let fileName = evt.target.value.replace('C:\\fakepath\\', '');
    
    // Erstelle Pfad fuer das img
    let srcUrl = 'img/' + fileName;

    // Setze src-Pfad im img
    avatarImg.src = srcUrl;
    // Lasse img wieder anzeigen
    avatarImg.hidden = false;
});