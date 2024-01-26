import React from 'react';

interface Props {
    onClick: React.MouseEventHandler
}
const JokeButton: React.FC<Props> = React.memo(({onClick}) => {
    return (
        <button
            style={{marginBottom: 10}}
            onClick={onClick}
        >
            Get joke
        </button>
    );
},(prev,current)=> prev.onClick !== current.onClick
);

export default JokeButton;