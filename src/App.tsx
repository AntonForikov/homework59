import { useState } from 'react';
import './App.css';
import AddMovie from "./Components/AddMovie/AddMovie";
import {Movie} from "./types";
import MovieList from "./Components/MovieList/MovieList";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (movie: Movie) => {
      setMovies(prevState => [...prevState, movie]);
  };

  const editMovie = (movieId: number, newName: string) => {
    setMovies((prevState) => {
      return prevState.map(movie => {
        if (movie.id === movieId) {
          movie.name = newName;
        }
        return movie;
      });
    });
  };

  const deleteMovie = (movieId: number) => {
    setMovies((prevState) => prevState.filter(movie => movie.id !== movieId));
  };

  return (
    <>
      <AddMovie handleAddMovie={addMovie} />
        <MovieList movies={movies} handleDeleteMovie={deleteMovie} handleEditMovie={editMovie} />
    </>
  );
}

export default App;
