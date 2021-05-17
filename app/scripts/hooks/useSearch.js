import {useState, useEffect} from 'react';

const useSearch = (query, minLetters = 3) => {
    const [result, setResult] = useState([]);

    useEffect(function onQueryChange() {
        if (query && query.length >= minLetters) {
            fetch(`http://localhost:3035/search?query=${query}`)
                .then((response) => response.json())
                .then((data) => setResult(data))
                .catch((data) => {
                    console.error(data);
                    setResult([]);
                });
        }
    }, [query]);

    return {
        result,
        clear: () => setResult([])
    };
};

export default useSearch;