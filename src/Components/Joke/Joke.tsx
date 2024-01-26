import React, {useEffect, useState} from 'react';
import JokeButton from "./JokeButton";

interface Joke {
    joke: string
}
const Joke: React.FC= () => {
    const [jokes, setJokes] = useState<Joke[]>([{joke: ''}]);

    const fetchData = async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (response.ok) {
            const post = await response.json();
            setJokes([{joke: post.value}]);
        } else {
            console.error(`[Fetch-${response.status}]: error - Please check request URL.`);
        }
    };

    useEffect(() => {
        void fetchData();
    }, []);

    return (
        <>
            {jokes.map(joke => {
                return <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: "center",
                        border: '2px solid gray',
                        borderRadius: 7,
                        padding: 7,
                        margin: '10px 0'
                    }}
                    key={Math.random()}
                >
                    {joke.joke}
                </div>;
            })}
            <JokeButton onClick={fetchData} />
        </>
    );
};

export default Joke;