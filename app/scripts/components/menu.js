import React, { useState } from 'react';
import useDebouncedSearch from '../hooks/useDebouncedSearch';
import SearchItem from './searchItem';

const Menu = () => {
    const [query, setQuery] = useState('');
    const [showingSearch, setShowingSearch] = useState(false);
    const { result, clear } = useDebouncedSearch(query);

    const handleQueryChange = (e) => setQuery(e.target.value);
    const handleSearchClick = () => {
        setShowingSearch(!showingSearch);
        clear();
        setQuery('');
    };

    return (
        <header className="menu">
            <div className="menu-container">
                <div className="menu-holder">
                    <h1>ELC</h1>
                    <nav>
                        <a href="#" className="nav-item">HOLIDAY</a>
                        <a href="#" className="nav-item">WHAT'S NEW</a>
                        <a href="#" className="nav-item">PRODUCTS</a>
                        <a href="#" className="nav-item">BESTSELLERS</a>
                        <a href="#" className="nav-item">GOODBYES</a>
                        <a href="#" className="nav-item">STORES</a>
                        <a href="#" className="nav-item">INSPIRATION</a>

                        <a href="#" onClick={handleSearchClick}>
                            <i className="material-icons search">search</i>
                        </a>
                    </nav>
                </div>
            </div>
            <div
                className={
                    (showingSearch ? 'showing ' : '') + 'search-container'
                }
            >
                <input type="text" value={query} onChange={handleQueryChange} />
                <a href="#" onClick={handleSearchClick}>
                    <i className="material-icons close">close</i>
                </a>
                <div className="search-items">
                    {result.map((item) => (
                        <SearchItem {...item} key={item._id} />
                    ))}
                </div>
            </div>
        </header>
    );
};

// Export out the React Component
module.exports = Menu;
