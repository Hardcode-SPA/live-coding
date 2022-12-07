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

// example();

// Eine Rekursion ist eine Funktion, die sich selbst wieder aufruft
let initialInt = 10;

function divideByTwo(evenInt) {
    if (evenInt % 2 !== 0) return evenInt;

    let result = evenInt / 2;
    return divideByTwo(result);
}


// console.log(divideByTwo(initialInt));


function divideIterativeByTwo(evenInt) {
    while (evenInt % 2 === 0) {
        evenInt /= 2;
    }

    return evenInt;
}

// console.log(divideIterativeByTwo(initialInt));


function countDown(number) {
    // display the number
    console.log(number);

    // base case
    if (number > 0) {
        countDown(number - 1);
    }
}

countDown(4);


function countDownLoop(number) {
    let newNumber = number;

    while (newNumber > 0) {
        console.log(newNumber);

        newNumber -= 1;
    }
}

countDownLoop(4);