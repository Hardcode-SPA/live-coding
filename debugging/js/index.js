'use strict';

let x;
// delete x;

const obj = {
    get x() {
      return 17;
    },
};
// obj.x = 5; // TypeError
console.log(obj.x);

let peter;

peter = 'pan';
console.log(peter);

class Peter {
    constructor(name) {
        this.name = name;
    }
    
    blub() {
        delete Peter.prototype;
    }

    static bla = 'blub';

    static neuerPeter(name) {
        return new Peter(name);
    }

    static isPeterInstance(instance) {
        return instance instanceof Peter;
    }
}



// new Peter().blub();

// delete Peter.prototype;



function berechneKompliziertenKram(startWert) {
    let zwischenWert = startWert * 2;

    zwischenWert = startWert * zwischenWert * 3;

    zwischenWert--;

    return zwischenWert/startWert;
}

console.log(berechneKompliziertenKram(2));


function machMaPause(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('So, genug Pause fuer heude!');
        }, timeout);
    });
}

function arbeitArbeit() {
    console.log('Voll am malochen...');
}


async function alltag() {
    arbeitArbeit();
    arbeitArbeit();
    console.log('Maurerpause');
    arbeitArbeit();

    let pause = await machMaPause(5000);

    console.log(pause);

    arbeitArbeit();

    arbeitArbeit();
}

alltag();