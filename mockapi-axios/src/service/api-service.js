import axios from "axios";

const API_ARTICLE_URL = 'https://63b5c3391907f863aae3b95a.mockapi.io/articles/';

// Funktion zum Holen aller Articles
export async function fetchAllArticles() {
    // Axios liefert wie auch fetch einen Promise, 
    // den man mit await oder .then und .catch verarbeiten kann
    let resp = await axios.get(API_ARTICLE_URL);

    // Rückgabe der von der API gelieferten Daten
    return resp.data;
}

export function fetchArticleById(id) {
    // axios.get(API_ARTICLE_URL+id)
    axios.get('https://github.com/pmndrs/zustand/papa')
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });

    // return resp.data;
}

export async function postNewArticle(article) {
    // POST Request mit axios. Die zu sendenden Daten können als zweiter Parameter mitgegeben werden
    let resp = await axios.post(API_ARTICLE_URL, article);

    console.log(resp);

    return resp.data;
}