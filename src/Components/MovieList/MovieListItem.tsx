import React from 'react';

interface Props {
    name: string
    handleDelete: () => void
    handleEdit: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const MovieListItem: React.FC<Props> = React.memo(({name, handleDelete, handleEdit}) => {
    return (
        <div
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
            <input
                type='text'
                value={name}
                onChange={handleEdit}
            />
            <div>
                <button
                    style={{backgroundColor: 'red', borderRadius: 7, padding: 5}}
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
},(prev, current) => {
    return prev.name === current.name;
});

export default MovieListItem;