

function example() {
    return new Promise((resolve, reject) => {
        console.log('start work...');

        console.log('State: Pending');

        setTimeout(() => {
            console.log('done working!');

            let randomInt = Math.floor(Math.random() * 10 + 1);

            if (randomInt % 2 === 0) resolve({
                evenInt: randomInt
            });
            else reject({
                error: 'hihi, kleiner fehler'
            });
        }, 2000);
    });
}

export { example };