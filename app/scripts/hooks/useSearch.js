import { useState, useEffect } from 'react';
import { ServerUrl } from '../constants';
import useDebounce from './useDebounce';

const defaultOptions = {
    minLetters: 3,
    delay: 500,
};

const useSearch = (query, options = defaultOptions) => {
    const [result, setResult] = useState([]);
    const debouncedQuery = useDebounce(query, options.delay);

    useEffect(
        function fetchData() {
            if (debouncedQuery && debouncedQuery.length >= options.minLetters) {
                fetch(`${ServerUrl}/search?query=${debouncedQuery}`)
                    .then((response) => response.json())
                    .then(setResult)
                    .catch((error) => {
                        console.error(error);
                        setResult([]);
                    });
            }
        },
        [debouncedQuery]
    );

    return {
        result,
        clear: () => setResult([]),
    };
};

export default useSearch;
