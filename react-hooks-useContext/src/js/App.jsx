import { createContext, useEffect, useState } from 'react';
import '../scss/App.scss';
import Card from './components/Card';

export const THEMES = {
  dark: 'dark',
  light: 'light'
};

// Context erstellen mit createContext(initialWert)
export const ThemeContext = createContext(THEMES.light);

function App() {
  let [theme, setTheme] = useState(THEMES.light);

  useEffect(() => console.log(theme), [theme]);

  // super modern
  const toggleTheme = evt => setTheme(theme === THEMES.light ? THEMES.dark : THEMES.light);

  return (
    <div className="App">
      <div className='container mx-auto'>

        {/* Context-Provider anlegen mit Wert */}
        <ThemeContext.Provider value={theme}>
          {/* 
            Elemente, die den Wert des Context nutzen sollen
            in den Provider Einbetten.
          */}


          <h1 className='text-4xl text-center py-9'>Hallo Welt!</h1>
          <button className={theme} onClick={toggleTheme}>Toggle Theme</button>

          <Card
            // theme={theme}
            width='350px'
            // height='500px'
            image='https://picsum.photos/250/200'
            titleText='Hallo Welt'
            bodyText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dicta ullam expedita eveniet quasi quidem voluptas debitis, recusandae hic voluptatibus ipsum exercitationem magni quo quam error blanditiis rerum! Natus, fuga!'
          />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
