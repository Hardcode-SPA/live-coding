
// Das DOMContentLoad Event wird gefeuert, wenn der DOM aufgebaut wurde
window.addEventListener('DOMContentLoaded', evt => console.log('DOM geladen', Date.now()));

// Das load Event wird gefeuert, wenn der gesamte DOM aufgebaut wurde und alle eingebundenen Resourcen geladen wurden (CSS, Bilder, etc.)
window.addEventListener('load', evt => console.log('Gesamte Page geladen', Date.now(), evt));


function init() {
    // Irgendwelcher initaler Code bei Laden der Page
    let images = document.querySelectorAll('img');

    images.forEach(image => {
        console.log(image.src);
    });
}

window.addEventListener('load', evt => init());