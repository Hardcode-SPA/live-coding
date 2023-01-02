
import { useEffect, useState } from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';

function App() {
  let [showChild, setShowChild] = useState(false);

  return (
    <div className="App">
      <button onClick={evt => setShowChild(!showChild)}>Toggle Show Child</button>

      {showChild && <ChildComponent />}
    </div>
  );
}

export default App;
