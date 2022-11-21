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

    console.log(Math.round(Math.random() * 123));

    console.time();
    // ----------------------------------------------
    new Promise((resolve, reject) => {
        let result = 123;
        setTimeout(() => {
            if (Math.round(Math.random() * result) % 2 === 0) {
                resolve('Erfolg!')
            } else {
                reject('Fehler!');
            }
        }, 4000);
    }).then(result => {
        let resultParagraph = document.createElement('P');
        resultParagraph.textContent = result;
        resultParagraph.style.color = 'green';
        document.body.append(resultParagraph);
        console.log('done with success');
    }).catch(error => {
        let resultParagraph = document.createElement('P');
        resultParagraph.textContent = error;
        resultParagraph.style.color = 'red';
        document.body.append(resultParagraph);
        console.log('done with error');
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
    let result = 123;
    // for (let i = 0; i < 1000; i++) {
    //     for (let j = 0; j < 1000; j++) {
    //         for (let k = 0; k < 1000; k++) {
    //             result += Math.random() * i * j * k;
    //         }
    //     }
    // }


    return result;
}



let chuckNorrisSection = document.querySelector('#chucknorris');
chuckNorrisSection.querySelector('button').addEventListener('click', evt => {
    let fetchPromise = fetch('https://api.chucknorris.io/jokes/random/');
    // let fetchPromise = fetch('https://api.chucknorris.io/jokes/random/peter');
    // let fetchPromise = fetch('http://peter.pan.io/');
    fetchPromise
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            let error = '';
            if (response.status === 404) {
                error = `404 - Seite nicht gefunden`;
            }
            throw new Error(error);
        })
        .then(data => {
            chuckNorrisSection.querySelector('p').textContent = data.value;
        })
        .catch(error => {
            chuckNorrisSection.querySelector('p').style.color = 'red';
            chuckNorrisSection.querySelector('p').textContent = error;
        });
});