// Referenz auf file-Input
let avatarInput = document.querySelector('#avatar-input');
// Referenz auf img fuer das hochgeladene Bild
let avatarImg = document.querySelector('#avatar');

// Fuege dem file-Input einen EventListener (change) hinzu
avatarInput.addEventListener('change', evt => {
    // Extrahiere die Datei aus dem Filepicker
    let file = evt.target.files[0];

    // Erstelle neuen FileReader, der dazu in der Lage ist, Dateien einzulesen
    let reader = new FileReader();

    // Fuege dem FileReader einen EventListener (load) hinzu
    // das load-Event wird gefeuert, wenn der FileReader die Datei erfolgreich eingelesen hat
    reader.addEventListener("load", (evt) => {
        // Konvertiere die eingelesene Datei mittels des FileReaders
        // in einen Base64-kodierten String
        // Und hinterlege diesen Base64 String als image.src des Profilbilds
        avatarImg.src = reader.result;

        // Lasse img wieder anzeigen
        avatarImg.hidden = false;
    }, false);

    // Wenn Datei im Filepicker vorhanden
    if (file) {
        // Lese mittels FileReader Datei ein
        reader.readAsDataURL(file);
    }
});