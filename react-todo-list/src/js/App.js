import '../css/App.css';
import { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    // State der App Komponente
    this.state = {
      todos: [],

    };


    /* ---------- this-Bindings ---------- */
    this.handleNewTodo = this.handleNewTodo.bind(this);
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

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>

        {/* Formular Komponente zum Hinzufuegen von Todos */}
        <TodoForm newTodoCallback={this.handleNewTodo} />

        {/* List Komponente zum Anzeigen der im State gespeicherten Todos */}
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
