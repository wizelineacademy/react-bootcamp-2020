import React from 'react';

import './SearchBar.styles.css';

function SearchBar() {
  return (
    <div className="search-container">
      <form className="search-box">
        <label htmlFor="search">
        <input 
        type="text" id="search"
      />
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
