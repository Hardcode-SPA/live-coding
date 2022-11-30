
// API Basisurl
const API_BASE_URL = 'https://test.100best.guide/locations/dci-students';
// const API_BASE_URL = 'https://dummyjson.com';
// API Endpoint fuer Todos
const API_TODOS_URL = 'todos';

// API-Kommunikations-Funktion zum Holen aller Todos
async function fetchAllTodos() {
    // Die Anfrage-URL zusammensetzen
    let reqUrl = `${API_BASE_URL}/${API_TODOS_URL}?limit=1000`;

    // Ausfuehren der GET-Anfrage via fetch
    let res = await fetch(reqUrl);

    // Parsen der Antwort-Payload
    let body = await res.json();

    // Wenn GET-Antwort Statuscode 2XX hat
    if (res.ok) {
        // Loese den Promise positiv auf und gebe die Payload vom Server zurueck
        // Payload enthaelt Array mit Todos
        return Promise.resolve(body);
    
    } else {
        // Negative Antwort vom Server (HTTP 4XX)

        // Loese den Promise negativ auf und gebe die Payload vom Server zurueck
        // Payload enthaelt ein Fehlerobjekt
        return Promise.reject(body);
    }
}

// API-Kommunikations-Funktion zum Holen einer bestimmten Anzahl von Todos
async function fetchPagedTodos(limit, skip) {
    // Die Anfrage-URL zusammensetzen
    let reqUrl = `${API_BASE_URL}/${API_TODOS_URL}?limit=${limit}&skip=${skip}`;

    // Ausfuehren der GET-Anfrage via fetch
    let res = await fetch(reqUrl);

    // Parsen der Antwort-Payload
    let body = await res.json();

    // Wenn GET-Antwort Statuscode 2XX hat
    if (res.ok) {
        // Loese den Promise positiv auf und gebe die Payload vom Server zurueck
        // Payload enthaelt Array mit Todos
        return Promise.resolve(body);
    
    } else {
        // Negative Antwort vom Server (HTTP 4XX)

        // Loese den Promise negativ auf und gebe die Payload vom Server zurueck
        // Payload enthaelt ein Fehlerobjekt
        return Promise.reject(body);
    }
}

// API-Kommunikations-Funktion zum Einreichen eines neuen Todos
// erhaelt den Todotext als Parameter
async function postNewTodo(todo) {
    // Bilde Options-Objekt fuer fetch
    let options = {
        // HTTP Methode
        method: 'POST',
        headers: {
            // Angabe der Form des Bodys (JSON)
            'Content-Type': 'application/json'
        },
        // Der gesendete Body (auch Payload genannt)
        body: JSON.stringify({
            todo: todo
        })
    };

    // Die Anfrage-URL zusammensetzen
    let reqUrl = `${API_BASE_URL}/${API_TODOS_URL}`;

    // Ausfuehren der POST-Anfrage via fetch
    let res = await fetch(reqUrl, options);

    // Parsen der Antwort-Payload
    let body = await res.json();

    // Wenn POST-Antwort Statuscode 2XX hat
    if (res.ok) {
        // Loese den Promise positiv auf und gebe die Payload vom Server zurueck
        // Payload enthaelt Array mit Todos
        return Promise.resolve(body);
    
    } else {
        // Negative Antwort vom Server (HTTP 4XX)

        // Loese den Promise negativ auf und gebe die Payload vom Server zurueck
        // Payload enthaelt ein Fehlerobjekt
        return Promise.reject('fehler');
    }
}

// API-Kommunikations-Funktion zum Updaten eines bestehenden Todos
// erhaelt die TodoId, den Todotext und den done-Zustand als Parameter
async function updateTodo(id, todo, isDone) {
    // Bilde Options-Objekt fuer fetch
    let options = {
        // HTTP Methode
        method: 'PUT',
        headers: {
            // Angabe der Form des Bodys (JSON)
            'Content-Type': 'application/json'
        },
        // Der gesendete Body (auch Payload genannt)
        body: JSON.stringify({
            todo: todo,
            done: isDone
        })
    };

    // Die Anfrage-URL zusammensetzen
    let reqUrl = `${API_BASE_URL}/${API_TODOS_URL}/${id}`;
    
    // Ausfuehren der PUT-Anfrage via fetch
    let res = await fetch(reqUrl, options);

    // Parsen der Antwort-Payload
    let body = await res.json();

    // Wenn POST-Antwort Statuscode 2XX hat
    if (res.ok) {
        // Loese den Promise positiv auf und gebe die Payload vom Server zurueck
        // Payload enthaelt Array mit Todos
        return Promise.resolve(body);
    
    } else {
        // Negative Antwort vom Server (HTTP 4XX)

        // Loese den Promise negativ auf und gebe die Payload vom Server zurueck
        // Payload enthaelt ein Fehlerobjekt
        return Promise.reject(body);
    }
}

// API-Kommunikations-Funktion zum Loeschen eines bestehenden Todos
// erhaelt die TodoId als Parameter
async function deleteTodo(id) {
    // Bilde Options-Objekt fuer fetch
    let options = {
        // HTTP Methode
        method: 'DELETE',
        headers: {
            // Angabe der Form des Bodys (JSON)
            'Content-Type': 'application/json'
        }
    };

    // Die Anfrage-URL zusammensetzen
    let reqUrl = `${API_BASE_URL}/${API_TODOS_URL}/${id}`;
    
    // Ausfuehren der PUT-Anfrage via fetch
    let res = await fetch(reqUrl, options);

    // Parsen der Antwort-Payload
    let body = await res.json();

    // Wenn POST-Antwort Statuscode 2XX hat
    if (res.ok) {
        // Loese den Promise positiv auf und gebe die Payload vom Server zurueck
        // Payload enthaelt Array mit Todos
        return Promise.resolve(body);
    
    } else {
        // Negative Antwort vom Server (HTTP 4XX)

        // Loese den Promise negativ auf und gebe die Payload vom Server zurueck
        // Payload enthaelt ein Fehlerobjekt
        return Promise.reject(body);
    }
}

export { fetchAllTodos, fetchPagedTodos, postNewTodo, updateTodo, deleteTodo };