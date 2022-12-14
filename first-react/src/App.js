import React from 'react';
import './App.css';
import Welcome from './components/Welcome';


/* Auesserste Komponente, die in der index.js als root gerendert wird */
function App() {
  function printWelcomeInput(input) {
    console.log(input);
  }

  return (
    // {/* // JSX - sieht aus wie HTML, ist in Wirklichkeit aber Javascript */}
    <div className="App">
      <Welcome name="Anneliese" age="28" parentCallback={printWelcomeInput} />
      <Welcome name="Peter" age="35" parentCallback={printWelcomeInput} />
      <Welcome name="Ewald" age="12" parentCallback={printWelcomeInput} />
    </div>
  );
}

export default App;
