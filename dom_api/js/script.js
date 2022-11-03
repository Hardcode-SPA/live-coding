console.log('Hallo externes JavaScript!');

// Holen der DOM-Element-Referenz auf bestimmtes HTML-Element mittels querySelector
let title = document.querySelector('h1');
console.log(title);


// Holen der DOM-Element-Referenz auf nachfolgendes Nachbarelement mittels nextElementSibling 
// von einem bereits existierenden Element
let paragraph = title.nextElementSibling;
console.log(paragraph);

// Holen der DOM-Element-Referenz auf vorhergegangenes Nachbarelement mittels previousElementSibling 
// von einem bereits existierenden Element
let paragraphPredecessor = paragraph.previousElementSibling;
console.log(paragraphPredecessor);

/* 
    Der querySelector ist auf jedem HTML-Element (nicht nur dem document) ausfuehrbar.
    Dabei durchsucht er mit Hilfe des angegebenen Querys immer nur den Kontext
    des Elements auf dem er ausgefuehrt wird.

    Das heisst, man kann ihn fuer eingrenzende Suchen sehr gut verwenden.
*/
// Durchsucht den GESAMTEN DOM nach einem article
let article = document.querySelector('article');
console.log(article);

// Durchsucht den GESAMTEN DOM nach einem p
let p = document.querySelector('p');
console.log(p);

// Durchsucht nur den DOM innerhalb des articles nach einem p
let innerParagraph = article.querySelector('p');
console.log(innerParagraph);
innerParagraph.style.backgroundColor = 'green';



/* --------------- Auf Kind-Elemente zugreifen ----------------------- */

// Durchsucht nur den DOM innerhalb des articles nach einem h1
let innerTitle = article.querySelector('h1');
console.log(innerTitle); // null, weil kein h1 in article vorhanden

// children gibt alle Kind-Elemente (nur HTML-Elemente) zurueck
// Benutzt man meistens
let articleChildren = article.children;
console.log(articleChildren);

// childNodes gibt alle Kind-Knoten (nicht nur HTML-Elemente) zurueck
// Es muss einen Grund geben wieso man dies nutzen will
let articleChildNodes = article.childNodes;
console.log(articleChildNodes);


// for (let child of articleChildren) {
//     child.style.backgroundColor = 'orange';
// }
Array.from(articleChildren).forEach(child => child.style.backgroundColor = 'orange');

let innerImage = article.querySelector('#inner-image');
// parentElement holt DIREKTES Eltern-Element
let imageParent = innerImage.parentElement;
console.log(imageParent);

// closest sucht anhand eines uebergebenen Querys nach dem 
// naechst-passenden Eltern-Element (kann auch mehrere Stufen hoeher sein)
console.log(innerImage.closest('article'));