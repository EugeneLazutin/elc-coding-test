import useDebounce from "./useDebounce";
import useSearch from "./useSearch";

const useDebouncedSearch = (query, delay = 500) => {
    const debouncedQuery = useDebounce(query, delay);
    return useSearch(debouncedQuery);
};

export default useDebouncedSearch;
