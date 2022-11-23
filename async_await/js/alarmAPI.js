function setAlarm(name, delay) {
    return new Promise((resolve, reject) => {
        if (name.trim().length <= 0) reject('Der Name ist zu kurz!');
        if (delay <= 0) reject(`Die Alarmzeit von ${delay} ms ist zu kurz!`);

        setTimeout(() => {
            resolve(`${name}, aufwachen!`);
        }, delay);
    });
}


export { setAlarm };