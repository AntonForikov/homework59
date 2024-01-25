import React from 'react';
import {Movie} from "../../types";
import MovieListItem from "./MovieListItem";

interface Props {
    movies: Movie[]
    handleDeleteMovie: (id: number) => void
    handleEditMovie: (id: number, newName: string) => void
}

const MovieList: React.FC<Props> = ({movies, handleDeleteMovie, handleEditMovie}) => {
    return <>
        {movies.length ?
            <>
                <h3>To watch list:</h3>
                {movies.map((movie) => (
                    <MovieListItem
                        key={movie.id}
                        name={movie.name}
                        handleDelete={() => handleDeleteMovie(movie.id)}
                        handleEdit={(event: React.ChangeEvent<HTMLInputElement>) => handleEditMovie(movie.id, event.target.value)}
                    />
                ))}
            </> :
            <h3>There are no films to watch</h3>
        }
    </>;
};

export default MovieList;