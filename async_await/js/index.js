import { setAlarm } from "./alarmAPI.js";

const nameInput = document.querySelector('#input-name');
const delayInput = document.querySelector('#input-delay');
const output = document.querySelector('#output');
const button = document.querySelector('#set-alarm');
const fetchArticlesBtn = document.querySelector('#fetch-articles-btn');

// Click-Listener fuer den Stelle-Alarm Button
// Markiere die Callback-Funktion als async fuer await
button.addEventListener('click', async () => {
    // Erwarte Promise Ergebnis von setAlarm und speichere in Variable
    let response = await setAlarm(nameInput.value, delayInput.value)
    .catch(err => { // Wenn ein Fehler vom Promise geworfen wird, fangen wir den hier
        console.log(err);
    });

    // Falls das Ergebnis in response aufgrund eines geworfenen Fehlers nicht erhalten wurde
    // pruefe, ob es ueberhaupt vorhanden ist bevor es benutzt wird
    if (response) {
        output.textContent = response + 'asdasdasd';
        output.style.color = 'black';
    }
    

    /* try {
        let response = await setAlarm(nameInput.value, delayInput.value);
        output.textContent = response;
        output.style.color = 'black';

    } catch (error) {
        output.textContent = error;
        output.style.color = 'red';

    } finally {
        console.log('fertig');
    } */


    

    /* setAlarm(nameInput.value, delayInput.value)
        .then(result => {
            output.textContent = result;
            output.style.color = 'black';
        })
        .catch(error => {
            output.textContent = error;
            output.style.color = 'red';
        }); */
});

// Click-Listener fuer den Hole-Artikel Button
// Markiere die Callback-Funktion als async fuer await
fetchArticlesBtn.addEventListener('click', async evt => {
    // Hole Daten vom Server via fetch
    // 'Klassisch' mit .then und .catch
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then(body => console.log(body));

    // Mit Async/Await
    // let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    // let body = await response.json();

    // Await Chaining
    let body = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json();
    console.log(body);
});