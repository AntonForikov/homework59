import {useState} from 'react';
import './App.css';
import AddMovie from "./Components/AddMovie/AddMovie";
import {Movie} from "./types";
import MovieList from "./Components/MovieList/MovieList";
import Joke from "./Components/Joke/Joke";

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
            <div className="tasksDiv">
                <h2>First task</h2>
                <AddMovie handleAddMovie={addMovie}/>
                <MovieList movies={movies} handleDeleteMovie={deleteMovie} handleEditMovie={editMovie}/>
            </div>
            <div className="tasksDiv">
                <h2>Second task</h2>
                <Joke />
            </div>

        </>
    );
}

export default App;
