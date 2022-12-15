import { useState } from 'react';
import '../css/App.css';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {
  let [todos, setTodos] = useState([
    {
      todo: 'React Hooks lernen',
      done: false
    },
    {
      todo: 'Dick Pause machen',
      done: false
    },
    {
      todo: 'Ferien vorbereiten',
      done: true
    }
  ]);


  // Funktion zum Speichern eines neuen Todos
  function handleNewTodo(newTodo) {
    // Neues Todo Objekt dem Array der Todos im State beifuegen 
    let newTodoArray = todos.concat([newTodo]);

    // Ueberschreibe Todo-Array im State mit dem neu-zusammengesetzten
    setTodos(newTodoArray);
  }


  // Handler zum Abhaken von Todo Objekten
  function handleCheckTodo(checkedTodo) {
    // Lokale Kopie des todos-Arrays aus dem State
    let todosCopy = [...todos];

    // Finde Index des gesuchten Todos
    let targetTodoIndex = todosCopy.findIndex(todo => todo.todo === checkedTodo.todo);

    // Ersetze gesuchtes Todo mit bearbeitetem Todo
    todosCopy[targetTodoIndex] = checkedTodo;

    // Ueberschreibe todos-Array im State mit dem ueberarbeiteten
    setTodos(todosCopy);
  }

  // Handler zum Loeschen von Todo Objekten
  function handleDeleteTodo(deletedTodo) {
    // Lokale Kopie des todos-Arrays aus dem State
    let todosCopy = [...todos];

    // Finde Index des gesuchten Todos
    let targetTodoIndex = todosCopy.findIndex(todo => todo.todo === deletedTodo.todo);
    
    // Entferne gesuchtes Todo aus der Array-Kopie
    todosCopy.splice(targetTodoIndex, 1);

    // Ueberschreibe todos-Array im State mit dem ueberarbeiteten
    setTodos(todosCopy);
  }


  /* Erstelle Array von TodoItem Komponenten */
  let todoItems = todos.map(todo => {
    // Jede TodoItem Komponente erhaelt das entsprechende Todo Objekt als Prop
    // und bekommt den Callback-Handler aus den Props von TodoList ebenfalls als Prop uebergeben
    return <TodoItem 
        key={todo.todo} 
        todo={todo} 
        checkTodoCallback={handleCheckTodo}
        deleteTodoCallback={handleDeleteTodo}
    />;
  });

  return (
    <div className="App">
      <h1>Todo List</h1>

      {/* Formular Komponente zum Hinzufuegen von Todos */}
      <TodoForm newTodoCallback={handleNewTodo} />

      {/* 
          Listen Komponente zum Anzeigen der im State gespeicherten Todos.
          Erhaelt Array mit Todo Objekten als Prop uebergeben.
          Erhaelt Callback-Handler als Prop uebergeben.
        */}
        <TodoList todos={todos}>
          {todoItems}
        </TodoList>
    </div>
  );
}

export default App;
