import {useState, useEffect} from 'react';
import debounce from 'debounce';

const useSearch = (query, minLetters = 3) => {
    const [result, setResult] = useState([]);

    const onQueryChange = debounce(() => {
        if (query && query.length >= minLetters) {
            fetch(`http://localhost:3035/search?query=${query}`)
                .then((response) => response.json())
                .then((data) => setResult(data))
                .catch((data) => {
                    console.error(data);
                    setResult([]);
                });
        }
    }, 300);

    useEffect(onQueryChange, [query]);

    return {
        result,
        clear: () => setResult([])
    };
};

export default useSearch;