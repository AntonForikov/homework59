import React, {useState} from 'react';
import {Movie, MovieMutation} from "../../types";


interface Props {
    handleAddMovie: (movie: Movie) => void
}
const AddMovie: React.FC<Props> = ({handleAddMovie}) => {
    const [movie, setMovie] = useState<MovieMutation>({name: ''});
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMovie({name: e.target.value});
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (movie.name) {
            handleAddMovie({
                id: Math.random(),
                ...movie
            });
            setMovie({name: ''});
        } else {
            alert("Please enter movie name before add it to list");
        }
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type='text'
                placeholder='Enter movie'
                style={{marginRight: 10}}
                name='name'
                value={movie.name}
                onChange={changeName}
            />
            <button type='submit'>Add</button>
        </form>
    );
};

export default AddMovie;