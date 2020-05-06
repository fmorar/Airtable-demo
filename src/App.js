import React, { useState, useEffect } from 'react';
import Card from './Components/Card'

function App() {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    fetch('https://api.airtable.com/v0/app9l6Q2S6XVq6fbg/Movies?api_key=keynasaprJtAl4PCc')
        .then(response => response.json())
        .then(data => setMovies(data.records));
  }, []);

  return (
    <div className="container mt-5">
      {console.log(movies)}
    <div className="row">
      <div className="col">
        <div className="card-deck">
          {movies.map(movie => <Card {...movie.fields} /> )}
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
