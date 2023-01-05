import { useEffect, useState } from 'react';
import './App.css';
import { fetchAllArticles, fetchArticleById, postNewArticle } from './service/api-service';

function App() {
  let [articles, setArticles] = useState([]);
  let [inputValue, setInputValue] = useState('');

  // useEffect mit leerer Abhängigkeit ([]) kann gut für initiale API-Anfragen genutzt werden
  // also um Daten bei App Start zu holen
  useEffect(() => {
    getArticles();
    fetchArticleById("70");
  }, []);

  useEffect(() => {
    // console.log(articles);
  }, [articles]);

  // Kleine Hilfsfunktion zum fetchen der Daten und Speichern im State
  async function getArticles() {
    setArticles(await fetchAllArticles());
  }

  function handleInputChange(evt) {
    setInputValue(evt.target.value);
  }

  async function handleFormSubmit(evt) {
    evt.preventDefault();
    let data = {
      name: inputValue
    };

    // Daten per Post bei Submit versenden
    let respData = await postNewArticle(data);

    // Wieder neue Daten holen
    getArticles();
  }
  
  let articlesList = articles.map(article => {
    return <li key={article.id}>ID: {article.id} | name: {article.name} | categoryID: {article.categoryId}</li>
  });

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name-input">Name</label>
        <input type="text" id='name-input' value={inputValue} onChange={handleInputChange} />

        <button type='submit'>Create</button>
      </form>

      <ul>
        {articlesList}
      </ul>
    </div>
  )
}

export default App;


