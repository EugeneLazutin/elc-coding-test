import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SearchItem from './searchItem';
import useSearch from '../hooks/useSearch';

const Search = ({ isOpen, toggleIsOpen }) => {
    const [query, setQuery] = useState('');
    const { result, clear } = useSearch(query);

    const handleQueryChange = (e) => setQuery(e.target.value);

    useEffect(() => {
        clear();
        setQuery('');
    }, [isOpen]);

    return (
        <div
            className={classNames({
                'showing': isOpen,
                'search-container': true,
            })}
        >
            <input type="text" value={query} onChange={handleQueryChange} />
            <a href onClick={toggleIsOpen}>
                <i className="material-icons close">close</i>
            </a>
            <div className="search-result">
                {result.map((item) => (
                    <SearchItem {...item} key={item._id} />
                ))}
            </div>
        </div>
    );
};

Search.propTypes = {
    isOpen: PropTypes.bool,
    toggleIsOpen: PropTypes.func,
};

export default Search;
