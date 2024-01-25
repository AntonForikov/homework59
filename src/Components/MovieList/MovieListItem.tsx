import React from 'react';

interface Props {
    name: string
    handleDelete: () => void
    handleEdit: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const MovieListItem: React.FC<Props> = ({name, handleDelete, handleEdit}) => {
    console.log('Rendered ', name);
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
};

export default MovieListItem;