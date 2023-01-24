import { useEffect, useState } from 'react';
import '../scss/App.scss';
import axios from 'axios';
import config from './config';
import RecipeForm from './components/RecipeForm';

const API_URL = `${config.apiUrl}:${config.apiPort}`;
const RECIPES_ENDPOINT = '/recipes';

function App() {
  let [recipes, setRecipes] = useState([]);

  // Initiales Laden der Daten vom Server
  useEffect(() => {
    fetchRecipes()
      .then(data => {
        console.log(data);
        setRecipes(data);
      })
  }, []);

  async function fetchRecipes() {
    try {
      let resp = await axios.get(API_URL + RECIPES_ENDPOINT);
      return resp.data;

    } catch (error) {
      // TODO bessere Fehlerbehandlung
      console.error(error);
    }
  }


  async function postNewRecipe(recipe) {
    try {
      let resp = await axios.post(API_URL + RECIPES_ENDPOINT, recipe);
      return resp.data;


    } catch (error) {
      console.error(error);
    }
  }

  async function putRecipeUpdate(id, recipe) {
    try {
      let resp = await axios.put(API_URL + RECIPES_ENDPOINT + '/' + id, recipe);
      return resp.data;


    } catch (error) {
      console.error(error);
    }
  }


  // Funktion zum Einsenden eines neuen Recipes an den Server
  function createNewRecipe(recipe) {
    // Entferne ID Feld aus dem zu-sendenden Objekt, dar API diese nicht braucht
    delete recipe.id;
    console.log(recipe);

    postNewRecipe(recipe)
      .then(data => {
        // moeglich: Umleitung auf die Detail-Ansicht mit der ID des neuen Objekts
        console.log('New Recipe Object:', data);

        fetchRecipes()
          .then(data => {
            console.log(data);
            setRecipes(data);
          });
      });
  }


  function updateExistingRecipe(recipe) {
    let id = recipe.id;

    // Entferne ID Feld aus dem zu-sendenden Objekt, dar API diese nicht annimmt
    delete recipe.id;

    putRecipeUpdate(id, recipe)
      .then(data => {
        console.log('Updated Recipe Object:', data);

        fetchRecipes()
          .then(data => {
            console.log(data);
            setRecipes(data);
          });
      });
  }

  return (
    <div className="App">
      <div className='container mx-auto'>
        <h1 className='text-4xl text-center py-9'>Recipe React App</h1>
        <h3>Anzahl Recipes: {recipes.length}</h3>
        {/* <RecipeForm callback={createNewRecipe} /> */}
        <RecipeForm callback={updateExistingRecipe} origRecipe={recipes[0]} />
      </div>
    </div>
  );
}

export default App;
