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


/* --------------- Auf Eltern-Elemente zugreifen ----------------------- */

let innerImage = article.querySelector('#inner-image');
// parentElement holt DIREKTES Eltern-Element
let imageParent = innerImage.parentElement;
console.log(imageParent);

// closest sucht anhand eines uebergebenen Querys nach dem 
// naechst-passenden Eltern-Element (kann auch mehrere Stufen hoeher sein)
console.log(innerImage.closest('article'));


/* --------------- Elemente pruefen ----------------------- */
// matches gibt als Rueckgabewert zurueck, ob das entsprechende Element
// dem uebergebenen Selektor entspricht
let matchesSelector = innerParagraph.matches('.inner');
console.log(matchesSelector);

/* --------------- Elemente aus JS heraus stylen ----------------------- */
// Die style Property eines jeden HTML Elements gibt uns vollen Zugriff
// auf alle bereits aus CSS bekannten Styling-Attribute
// ACHTUNG: In CSS ist die Worttrennung immer mit einem Bindestrich (bla-blub)
//          in JS hingegeben als Camel Case (blaBlub)
innerParagraph.style.backgroundColor = 'green';
innerParagraph.style.color = 'white';
innerParagraph.style.fontSize = '20pt';

// Auch Klassen lassen sich problemlos hinzufuegen oder entfernen
paragraph.classList.add('green-white-large');
innerParagraph.classList.remove('inner');

// Das Verstellen der ID ist auch moeglich ueber den Zugriff auf die .id Property
innerParagraph.id = 'inner-p';

// Attribute von HTML-Elementen lassen sich via getAttribute(NAME_DES_ATTRIBUTS) abrufen
console.log(title.getAttribute('data-value'));
// Attribute von HTML-Elementen lassen sich via setAttribute(NAME_DES_ATTRIBUTS, NEUER_WERT) veraendern
title.setAttribute('data-value', 'thomas');
console.log(title.getAttribute('data-value'));

// Fuer data-* Attribute gibt es das dataset, 
// das uns komfortablen Lese- u. Schreibzugriff auf diese Attribute gewaehrt
console.log(title.dataset);
console.log(title.dataset.value);
title.dataset.value = 'Matze';
console.log(title.dataset.value);


/* --------------- Elemente in JS erstellen ----------------------- */
// Mit document.createElement(NAME_DES_ELEMENTS) kann ein neues HTML-Element erstellt werden
let newSpan = document.createElement('span');
console.log(newSpan);

// Das neue Element laesst sich natuerlich auch befuellen und stylen
newSpan.innerText = 'Hallo Welt!';
newSpan.style.backgroundColor = 'red';
newSpan.classList.add('inner-span');

// Mit appendChild(NEUES_ELEMENT) laesst sich das zuvor erstellte Element als Kind-Element anhaengen
innerParagraph.appendChild(newSpan);

// Mit insertBefore(NEUES_ELEMENT, REFERENZ_ELEMENT) laesst sich das zuvor erstellte Element
// als Kind-Element vor einem Referenz-Element einfuegen
article.insertBefore(newSpan, innerParagraph);



