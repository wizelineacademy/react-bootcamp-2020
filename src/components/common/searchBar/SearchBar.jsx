import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input className="search" type="text" placeholder="Search..." />
        </div>
    );
}

export default SearchBar;