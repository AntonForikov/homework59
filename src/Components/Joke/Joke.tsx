import React, {useEffect, useState} from 'react';
import JokeButton from "./JokeButton";

interface Joke {
    joke: string
}
const Joke: React.FC= () => {
    const [jokes, setJokes] = useState<Joke[]>([]);

    const fetchOneJoke = async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (response.ok) {
            const post = await response.json();
            setJokes(prevState => [...prevState, {joke: post.value}]);
        } else {
            console.error(`[Fetch-${response.status}]: error - Please check request URL.`);
        }
    };

    const fetchFiveJokes = async () => {
        const promises = [];
        for (let i = 0; i < 5; i++) {
            promises.push(fetch('https://api.chucknorris.io/jokes/random'));
        }

        const responses = await Promise.all(promises);
        const newJokes: Joke[] = [];
        for (let i = 0; i < responses.length; i++) {
            const response = responses[i];
            if (response.ok) {
                const responseJson = await response.json();
                newJokes.push({joke: responseJson.value});
            }
        }
        setJokes(newJokes);
    };

    useEffect(() => {
        void fetchFiveJokes();
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
            <JokeButton onClick={fetchOneJoke} />
        </>
    );
};

export default Joke;