
import './App.css';
import MainContent from './components/MainContent';
import React, { useState } from 'react';

// Erstelle neuen Context namens ThemeContext mit StandardWert 'light'
const ThemeContext = React.createContext('light');

function App() {

  // Erstelle Statevariable für das 'wobble' von Komponenten
  const [wobble, setWobble] = useState(false);

  return (
    <div className="App">
      {/* Bette bestimmte Kind-Komponenten in ThemeContext ein und gebe diesem einen Wert (dark) */}
      <ThemeContext.Provider value='dark'>
        <h1>Hallo Context!</h1>


        <button onClick={evt => {
          // Setze Statevariable auf true
          setWobble(true);

          // Setze nach einer halben Sekunde Statevariable auf false
          setTimeout(() => {
            setWobble(false);
          }, 500);

        }}>Click</button>

        {/* Uebergebe Statevariable an Kind-Komponente über die props */}
        <MainContent wobble={wobble} />
      </ThemeContext.Provider>
    </div>
  );
}

export { App, ThemeContext };
