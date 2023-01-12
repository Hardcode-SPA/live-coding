import { useState } from 'react';
import '../scss/App.scss';
import Reactangle from './components/Reactangle';

function App() {

  // explizites Style-Objekt fuer inline-styles im JSX
  let styles = {
    backgroundColor: 'red',
    width: '300px',
    height: '200px'
  };

  return (
    <div className="App">
      <div className='container mx-auto'>
        <h1 className='text-4xl text-center py-9'>Hallo Welt!</h1>
        {/* 
          Als Wert des style-Attributs wird 
          die Variable des Style-Objekts eingefuegt
        */}
        <div style={styles}></div>

        {/* 
          Als Wert des style-Attributs wird
          direkt ein style-Objekt eingefuegt
        */}
        <div style={{
          backgroundColor: 'green',
          width: '350px',
          height: '200px'
        }}></div>


        <Reactangle
          backgroundColor='blue'
          width='500px'
          height='250px'
        />
        <Reactangle
          backgroundColor='black'
          width='500px'
          height='250px'
        />
        <Reactangle
          backgroundColor='white'
          width='500px'
          height='250px'
        />
      </div>
    </div>
  );
}

export default App;
