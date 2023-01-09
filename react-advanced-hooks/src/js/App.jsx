import { useState } from 'react';
import '../scss/App.scss';
import MemoUser from './components/MemoUser';
import ReducerUser from './components/ReducerUser';

function App() {

  return (
    <div className="App">
      <div className='container mx-auto'>
        <h1 className='text-center py-9'>Hallo erweiterte Hooks</h1>
        <MemoUser />
        <br />
        <ReducerUser />
      </div>
    </div>
  );
}

export default App;
