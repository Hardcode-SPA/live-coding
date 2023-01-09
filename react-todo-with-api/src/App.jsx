import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import axios from 'axios';


const API_URL_TODOS = 'https://63b840c24d97e82aa3d45b4c.mockapi.io/api/v1/todos';

async function fetchTodos() {
  try {
    let resp = await axios.get(API_URL_TODOS);
    return resp.data;

  } catch (error) {
    console.error(error);
  }
}

async function postTodo(todoText) {
  try {
    let resp = await axios.post(API_URL_TODOS, {
      text: todoText,
      completed: false
    });

    return resp.data;


  } catch (error) {
    console.error(error)
  }
}

async function putTodo(todo) {
  try {
    let resp = await axios.put(API_URL_TODOS+'/'+todo.id, todo);
    return resp.data;

  } catch (error) {
    console.error(error);
  }
}

async function deleteTodo(id) {
  try {
    let resp = await axios.delete(API_URL_TODOS+'/'+id);
    return resp.data;


  } catch (error) {
    console.error(error);
  }
}

function App() {
  let [todos, setTodos] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => console.log(todos), [todos]);


  function loadTodos() {
    fetchTodos().then(todoData => {
      setTodos(todoData);
      setIsLoading(false);
    });
  }

  function handleNewTodo(todoText) {
    setIsLoading(true);
    postTodo(todoText)
      .then(data => {
        loadTodos();
      });
  }


  function handleTodoComplete(id) {
    setIsLoading(true);

    let todoCopy = {...todos.find(todo => todo.id === id)};
    console.log(`Todo mit ID ${id}: Completed ${todoCopy.completed} -> ${!todoCopy.completed}`);

    todoCopy.completed = !todoCopy.completed;

    putTodo(todoCopy)
      .then(resp => {
        loadTodos();
      });
  }

  function handleTodoDelete(id) {
    setIsLoading(true);

    deleteTodo(id)
      .then(data => {
        loadTodos();
      });
  }


  let spinner = <svg className="animate-spin mx-auto h-12 w-12 text-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>;

  return (
    <div className="App">
      <h1>Meine Todo Liste</h1>
      {isLoading && spinner}
      <TodoForm newTodoCallback={handleNewTodo} />
      <TodoList 
        todos={todos} 
        todoCompleteCallback={handleTodoComplete} 
        todoDeleteCallback={handleTodoDelete}
      />
    </div>
  )
}

export default App;
