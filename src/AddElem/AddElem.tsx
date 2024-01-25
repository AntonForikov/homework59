import React, {useState} from 'react';
import {Movie, MovieMutation} from "../types";


interface Props {
    onSubmit: (movie: Movie) => void
}
const AddElem: React.FC<Props> = ({onSubmit}) => {
    const [movie, setMovie] = useState<MovieMutation>({name: ''});
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMovie(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (movie.name) {
            onSubmit({
                id: Math.random(),
                ...movie
            })
        } else {
            alert("Please enter movie name before add it to list")
        }

    }

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

export default AddElem;