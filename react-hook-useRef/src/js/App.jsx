import { useState, useRef } from 'react';
import '../scss/App.scss';

import StopWatch from './StopWatch';
import Form from './Form';

function App() {
  // Statevariable, die bei Aenderung einen Re-Render hervorruft
  let [someState, setSomeState] = useState(0);

  // Ref-Variable mit Initalwert 0
  let counterRef = useRef(0);

  // Lose Top-Level Variable mit Initalwert 0 (wird mit jedem Re-Render zurueckgesetzt)
  let counter = 0;

  // Clickhandler zum Hochzaehlen des Counters
  function handle(evt) {
    // Zaehle einfache Top-Level Variable um 1 hoch
    counter++;
    console.log('counter', counter);

    // Zaehle Variable in Ref-Variable um 1 hoch
    counterRef.current++;
    console.log('counterRef', counterRef.current);
  }

  // Clickhandler, der die Statevariable aendert und dadurch einen Re-Render ausloest
  function reRender(evt) {
    setSomeState(someState+1);
  }

  // Ausgabe bei Re-Render
  console.log('I rendered!');


  return (
    <div className="App">
      <div className='container mx-auto'>
        <h1 className='text-4xl text-center py-9'>React Hook useRef()</h1>
        <button onClick={handle}>Increment Counter</button>

        <button onClick={reRender}>Re-render</button>
        <p>{someState}</p>

        <StopWatch />
        
        
        <Form propInputs={['firstname', 'lastname', 'age', 'city']}/>


      </div>
    </div>
  );
}

export default App;
