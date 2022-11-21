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

        // let fileReader = new FileReader();
        // fileReader.addEventListener('load', evt => {
        //     img.src = evt.target.result;
        // });
        // fileReader.readAsDataURL(file);

        previewSection.appendChild(img);
    });
    console.timeEnd();

}

// Haenge EventListener (submit) an Formular an mit handleFormSubmit als Handler
form.addEventListener('submit', handleFormSubmit);


let workerBtn = document.querySelector('#btn-start-worker');

workerBtn.addEventListener('click', evt => {
    console.time();
    // ----------------------------------------------
    worker().then(result => {
        let resultParagraph = document.createElement('P');
        resultParagraph.textContent = result;
        document.body.append(resultParagraph);
        console.log('done');
    });

    // let result = worker(result => {
    //     let resultParagraph = document.createElement('P');
    //     resultParagraph.textContent = result;
    //     document.body.append(resultParagraph);
    // });

    // Synchron auf ergebnis warten
    // let result = worker();
    // let resultParagraph = document.createElement('P');
    // resultParagraph.textContent = result;
    // document.body.append(resultParagraph);
    // ----------------------------------------------
    console.timeEnd();

    console.log('Andere Arbeit');
});

function worker() {
    let promise = new Promise((resolve, reject) => {
        let result = 0;
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                for (let k = 0; k < 1000; k++) {
                    result += Math.random() * i * j * k;
                }
            }
        }

        resolve(result);
    });

    return promise;
    

    // callback(result);

    // return result;
}