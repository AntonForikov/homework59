import React from 'react';
import {Movie} from "../types";

interface Props {
    movies: Movie[]
}

const MovieItem: React.FC<Props> = ({movies}) => {
    return <>
        {movies.length ?
            <>
                <h2>To watch list:</h2>
                {movies.map((movie) => {
                    return <div
                        key={movie.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: "center",
                            border: '2px solid gray',
                            borderRadius: 7,
                            padding: 7,
                            margin: '10px 0'
                        }}
                    >
                        <h4>{movie.name}</h4>
                        <button
                            style={{backgroundColor: 'red', borderRadius: 7, padding: 5}}
                        >
                            Delete
                        </button>
                    </div>
                })}
            </> :
            <h2>There are no films to watch</h2>
        }
    </>;
};

export default MovieItem;