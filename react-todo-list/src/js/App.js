import '../css/App.css';
import { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(props) {
    super(props);

    // State der App Komponente
    this.state = {
      todos: [],

    };


    /* ---------- this-Bindings ---------- */
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleCheckTodo = this.handleCheckTodo.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }

  // Submithandler fuer das TodoForm
  handleNewTodo(todo) {
    // State updaten mit neuem Todo Objekt
    this.setState((state) => {
      // Neues Todo Objekt dem Array der Todos im State beifuegen 
      let newTodoArray = state.todos.concat([todo]);
      return {
        todos: newTodoArray
      }
    });
  }


  // Handler zum Abhaken von Todo Objekten
  handleCheckTodo(checkedTodo) {
    this.setState((state) => {
      let todos = state.todos;

      let targetTodoIndex = todos.findIndex(todo => todo.todo === checkedTodo.todo);

      todos[targetTodoIndex] = checkedTodo;

      return {
        todos: todos
      };
    });
  }

  // Handler zum Loeschen von Todo Objekten
  handleDeleteTodo(deletedTodo) {
    this.setState(state => {
      let todos = [...state.todos];

      let targetTodoIndex = todos.findIndex(todo => todo.todo === deletedTodo.todo);

      todos.splice(targetTodoIndex, 1);

      return {
        todos: todos
      };
    });
  }

  render() {
    /* Erstelle Array von TodoItem Komponenten */
    let todoItems = this.state.todos.map(todo => {
      // Jede TodoItem Komponente erhaelt das entsprechende Todo Objekt als Prop
      // und bekommt den Callback-Handler aus den Props von TodoList ebenfalls als Prop uebergeben
      return <TodoItem 
          key={todo.todo} 
          todo={todo} 
          handleCheckTodo={this.handleCheckTodo}
          handleDeleteTodo={this.handleDeleteTodo}
      />;
    });

    return (
      <div className="App">
        <h1>Todo List</h1>

        {/* Formular Komponente zum Hinzufuegen von Todos */}
        <TodoForm newTodoCallback={this.handleNewTodo} />

        {/* 
          Listen Komponente zum Anzeigen der im State gespeicherten Todos.
          Erhaelt Array mit Todo Objekten als Prop uebergeben.
          Erhaelt Callback-Handler als Prop uebergeben.
        */}
        <TodoList 
          todos={this.state.todos} 
          handleCheckTodo={this.handleCheckTodo} 
          handleDeleteTodo={this.handleDeleteTodo}
        >
          {todoItems}
        </TodoList>
      </div>
    );
  }
}

export default App;
