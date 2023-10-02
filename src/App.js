import './App.css';
import {useEffect, useState} from 'react';
import MovieCard from './MovieCard';

function App() {
  const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=79d50d0b258ce81609b056767b5f5166'

  const [movies, setMovies] = useState([])

  useEffect(()=>{
   fetch(API_URL)
    .then(res => res.json())
    .then(data => setMovies(data.results))
       
  },[])
  console.log(movies)

  return (
    <div className="App">
    <div className="nav">
     <div>
     <h1>Movies</h1>
     </div>
     <div className="form-input"> 
      <form>
      <input/>
      <button>Search</button>
      </form>
     </div>
    </div>
     <div className="movies">
       {
        movies.map((movie)=>
          <MovieCard {...movie}/>
        )
       }
     </div>
      
    </div>
  );
}

export default App;
