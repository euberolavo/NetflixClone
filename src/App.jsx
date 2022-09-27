import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [filmes, setFilmes] = useState([]);

  const apiKey = '629ee278eb099adb4f3c781b6d09a669';
  const apiLanguage = 'pt-BR';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=${apiLanguage}`
    )
      .then((r) => r.json())
      .then((json) => {
        setFilmes(json.genres);
      });
  }, []);

  console.log(filmes);

  return (
    <div className="App">
      <h1>KhoalaFlix</h1>
      <div className="tabela">
        <table width="300">
          <thead>
            <tr>
              <th>Gênero</th>
            </tr>
          </thead>
          <tbody>
            {filmes.map(({ name }, key) => (
              <tr key={key}>
                <td>{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
