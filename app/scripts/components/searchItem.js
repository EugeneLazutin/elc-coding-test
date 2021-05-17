import React from 'react';
import PropTypes from 'prop-types'

const SearchItem = (item) => {
    return (
        <div className="search-item">
            <img alt="picture" src={item.picture}/>
            <div className="search-item-info">
                <h3 className="search-item-name">{item.name}</h3>
                <span>{item.about}</span>
            </div>
        </div>
    );
};

SearchItem.propTypes = {
    picture: PropTypes.string,
    name: PropTypes.string,
    about: PropTypes.string,
};

export default SearchItem;