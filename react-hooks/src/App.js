
import { useState } from 'react';
import './App.css';

function App() {
  let [color, setColor] = useState('nothing');
  let [name, setName] = useState('');

  function handleColorBtn(evt) {
    setColor(evt.target.textContent);
  }

  function handleNameInput(evt) {
    setName(evt.target.value);
  }

  return (
    <div className="App">
      <h1>Hallo Hooks</h1>
      <button onClick={handleColorBtn}>Red</button>
      <button onClick={handleColorBtn}>Green</button>
      <button onClick={handleColorBtn}>Blue</button>

      <p>You chose the color {color}</p>

      <input type="text" value={name} onChange={handleNameInput} />
      <p>You're name is {name}</p>
    </div>
  );
}

export default App;
