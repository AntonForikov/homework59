import { useState } from 'react';
import './App.css';
import AddElem from "./AddElem/AddElem";
import {Movie} from "./types";
import MovieItem from "./MovieItem/MovieItem";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (movie: Movie) => {
      setMovies(prevState => [...prevState, movie]);
  };

  return (
    <>
      <AddElem onSubmit={addMovie} />
        <MovieItem movies={movies} />
    </>
  );
}

export default App;
