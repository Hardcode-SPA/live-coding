'use strict';

// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Import our custom JS
import { fetchAllTodos, fetchPagedTodos, postNewTodo, updateTodo, deleteTodo } from './data.js';
/* -------------------------------------------------------------------------------  */

// Globale Variable zum Festlegen der Pagesize
// also der Anzahl an Todos bei einer Anfrage
let pageSize = 10;

// Funktion zum Laden der ersten Todopage
async function getTodos() {
    // Hole erste Page der Daten
    let todosPage = await fetchPagedTodos(pageSize, 0).catch(err => {
        console.log(err);
    });
    
    // render alle erhaltenen Todos
    renderTodos(todosPage);
}
// Initial einmal am Anfang ausfuehren 
// damit beim Laden der Page schon Todos da sind
getTodos();

// Referenz auf den Button zum Laden weiterer Todo-Eintraege
let moreTodosBtn = document.querySelector('#app > #btn-more-todos');
// Anhaengen Eventhandler (click) an den Button fuer weitere Eintraege
moreTodosBtn.addEventListener('click', async evt => {
    // die globale Pagesize um 10 erhoehen
    pageSize += 10;

    // Noch mal erste Page an Todos holen
    getTodos();
});

// Funktion zum rendern von Todos in die Todoliste
// bekommt Array mit Todoobjekten uebergeben
function renderTodos(todos) {
    // Referenz auf UL der Todoliste
    let todosList = document.querySelector('#todos-list');

    // Erstelle Array mit ListItems (li) fuer die Todos
    let todoItems = todos.map(todo => {
        return createTodoItem(todo);
    });

    // Ersetze die Listitems in der Todoliste mit den neuen
    todosList.replaceChildren(...todoItems);
}

// Hilfsfunktion zum Erstellen eines Listitems (li) fuer ein Todoobjekt
function createTodoItem(todo) {
    // Erstelle Listitem
    let todoItem = document.createElement('li');
    // Fuege noetige Klassen zum Listitem hinzu
    todoItem.classList.add('list-group-item');
    // Wenn Todo abgehakt, streiche Text im Todo durch
    if (todo.done) todoItem.classList.add('strike-through', 'text-muted');
    // Speichere TodoId im Dataset des Listitems
    todoItem.dataset.id = todo.prio; // eigentlich ID

    //<button class="btn btn-outline-danger">Delete</button>
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-outline-danger');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', async evt => {
        let todos = await deleteTodo(todo.prio).catch(err => {
            console.log(err);
        });

        // Noch mal erste Page an Todos holen
        getTodos();
    });
    todoItem.appendChild(deleteBtn);

    // Fuege Todotext in Listitem ein
    todoItem.append(todo.todo);

    // Fuege dem Listitem einen Eventhandler (click) zum Abhaken hinzu
    todoItem.addEventListener('click', async evt => {
        // Extrahiere Tododaten
        let todoId = todoItem.dataset.id;
        let todoText = todoItem.childNodes[1].nodeValue;
        let isDone = !todoItem.classList.contains('strike-through');

        // Sende PUT Anfrage an API zum Abhaken
        let todos = await updateTodo(todoId, todoText, isDone).catch(err => {
            console.log(err);
        });

        // Hole und render alle Todos im DOM
        getTodos();
    });

    // Gebe erstelles Listitem zurueck
    return todoItem;
}

// Referenz auf Formular zum Anlegen eines neuen Todos
let todoForm = document.querySelector('#new-todo-form');
// Fuege dem Formular einen Eventhandler (submit) zum Absenden
// eines neuen Todos hinzu
todoForm.addEventListener('submit', async evt => {
    // Browser-Standard-Verhalten fuer submit-Event unterbinden
    evt.preventDefault();

    // Hole Todoinput
    let todoInput = todoForm.querySelector('#input-new-todo');
    // Extrahiere Todotext
    let todoText = todoInput.value.trim();
    // Pruefe, ob Eingabe nicht leer
    if (todoText.length < 1) return;
    // Setze Input zurueck
    todoInput.value = '';

    // POST Anfrage an API zum Anlegen des neuen Todos
    // Server liefert uns in der Antwort als Payload
    // die gesamte Liste aller Todos mit
    let todos = await postNewTodo(todoText).catch(err => {
        // TODO Fehlerbehandlung fuer doppelte Todos
        console.log(err);
    });

    // Hole und render alle Todos im DOM
    getTodos();

});


// TODO loeschen von Todos
