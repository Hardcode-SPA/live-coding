import { useEffect, useState } from 'react';
import '../scss/App.scss';

const API_URL = 'https://63b840c24d97e82aa3d45b4c.mockapi.io/api/v1/';


function App() {

  useEffect(() => {
    let todoUrl = API_URL + 'todos';
    
    // Loest HTTP 500 aus
    // let todoUrl = API_URL + 'todos/99';

/*     fetch(todoUrl)
      .then(response => {
        console.log(response);
        if (!response.ok) {
          let errObj = {
            status: response.status,
            statusText: response.statusText
          };

          throw new Error(JSON.stringify(errObj));
        }

        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => {
        console.log(JSON.parse(error.message));
        console.error(error);
      }); */


    async function fetchData() {
      let todoUrl = API_URL + 'todos';

      try {
        // Ausfuehrung fetch fuer einen GET Request (braucht keine Options, weil GET)
        let response = await fetch(todoUrl);
        if (!response.ok) {
          let errObj = {
            status: response.status,
            statusText: response.statusText
          };

          throw new Error(JSON.stringify(errObj));
        }

        let data = await response.json();

        console.log(data);


      } catch (error) {
        console.log(JSON.parse(error.message));
        console.error(error);
      }
    }

    fetchData();
  }, []);


  function handlePostData(evt) {
    let postUrl = API_URL + 'todos';

    // Daten fuer den Post request
    let data = {
      text: 'Fuer test ueben',
      completed: false
    };

    // Options Objekt fuer fetch mit den ALLERNOETIGSTEN Feldern
    let options = {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    };

    // Fetch Ausfuehrung
    fetch(postUrl, options)
      .then(response => {
        if (!response.ok) throw new Error(response.statusText);

        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => {
        console.error(error.message);
      })


  }


  return (
    <div className="App">
      <div className='container mx-auto'>
        <h1 className='text-4xl text-center py-9'>Hallo Welt!</h1>
        <button 
          onClick={handlePostData} 
          style={{border: '1px solid black'}}
        >Post Data</button>
      </div>
    </div>
  );
}

export default App;
