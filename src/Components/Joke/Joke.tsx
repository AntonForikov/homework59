import React, {useEffect, useState} from 'react';
import JokeButton from "./JokeButton";
import { Bars } from 'react-loader-spinner';

interface Joke {
    joke: string
}
const Joke: React.FC= () => {
    const [jokes, setJokes] = useState<Joke[]>([]);
    const [loader, setLoader] = useState(false);

    const fetchOneJoke = async () => {
        setLoader(true);
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (response.ok) {
            const post = await response.json();
            setJokes(prevState => [...prevState, {joke: post.value}]);
        } else {
            console.error(`[Fetch-${response.status}]: error - Please check request URL.`);
        }
        setLoader(false);
    };

    const fetchFiveJokes = async () => {
        setLoader(true);
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
        setLoader(false);
    };

    useEffect(() => {
        void fetchFiveJokes();
    }, []);

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Bars
                    height="20"
                    width="20"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    visible={loader}
                />
            </div>
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