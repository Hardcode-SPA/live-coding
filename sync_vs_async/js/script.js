// Referenz auf Formular
let form = document.querySelector('form');

// EventHandler Funktion fuer das Formular
function handleFormSubmit(evt) {
    // Verhindere Standard Submit Verhalten des Browsers
    evt.preventDefault();


    let albumName = evt.target.querySelector('input[type="text"]').value.trim();
    let albumDescription = evt.target.querySelector('textarea').value.trim();
    let photoFiles = evt.target.querySelector('input[type="file"]').files;

    let previewSection = document.querySelector('#photos-preview');
    previewSection.querySelector('h1 > span').textContent = albumName;
    previewSection.querySelector('p').textContent = albumDescription;

    console.time();
    Array.from(photoFiles).forEach(file => {
        let img = document.createElement('IMG');
        img.width = '300';

        img.src = URL.createObjectURL(file);

        previewSection.appendChild(img);
    });
    console.timeEnd();
}

// Haenge EventListener (submit) an Formular an mit handleFormSubmit als Handler
form.addEventListener('submit', handleFormSubmit);